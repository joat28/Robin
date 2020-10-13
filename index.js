const fs = require('fs');
const Discord = require('discord.js');
const {prefix, token} =  require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const cooldownMessage = new Set();

 

for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command);
}

client.once('ready', ()=>{
    console.log('Ready!!')
})


client.on('message', message =>{ 

   
    if(!message.content.startsWith(`${prefix}`) || message.author.bot) return;
    
    else{
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase(); 
        const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        // console.log("commandName : " + commandName);
        // console.log(" get(commandName): " + client.commands.get(commandName))
        // console.log("includes(commandName) " + client.commands.find(cmd => {cmd.aliases && cmd.aliases.includes(commandName)}));  

        if(!command) return;
        if(command.guildOnly && message.channel.type == 'dm'){
            return message.reply("Oops!, This command can not be used in DMs.")
        }
        
        if(command.args && !args.length){
           
            let reply = "You did not provide any arguments"
            if(command.usage){
                reply += `, Proper use would be : ${prefix}${commandName} ${command.usage}`
            }
            return message.reply(reply);

        }
        try{

            if(cooldownMessage.has(message.author.id)){
                message.reply("You need to wait for 1.5 sec before the last command executes!")
            }
            else{
                command.execute(message, args);
                // Add user to the recentMessage members list
                cooldownMessage.add(message.author.id)
                // Remove user after 1.5 sec
                setTimeout(()=>{
                    cooldownMessage.delete(message.author.id)
                },1500)
            }
        }
        catch(error) {
            message.reply("There was an error trying to execute the command!, ask moderator to correct Code/Server issues!");
            console.log("ERROR: ", error)
        }
      
    }
})


client.login(token)

