const fs = require('fs');
const Discord = require('discord.js');
const {prefix, token} =  require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

 

for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command);
    client.cooldowns.set(command.name,command.cooldown)
}

client.once('ready', ()=>{
    console.log('Ready!!')
})

client.on('message', message =>{ 
    if(!message.content.startsWith(`${prefix}`) || message.author.bot) return;
    
    else{
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        

        if(!client.commands.has(commandName)) return;
        const command = client.commands.get(commandName);
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
            command.execute(message, args);
        }
        catch{
            message.reply("There was an error trying to execute the command!");
        }
      
    }
})


client.login(token)

