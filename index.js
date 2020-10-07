const Discord = require('discord.js');
const {prefix, token} =  require('./config.json');
const client = new Discord.Client();

client.once('ready', ()=>{
    console.log('Ready!!')
})






client.on('message', message =>{ 
    if(!message.content.startsWith(`${prefix}`) || message.author.bot) return;
    
    else{
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
    
         //////////////  KICK COMMAND ///////////////
         if(command == 'kick'){
             
             if(!message.mentions.users.size){
                 message.reply('You need to tag a person to Kick them!');
             }
             else{
                 const taggedUser = message.mentions.users.first();
                 message.reply(`You wanted to kick ${taggedUser.username}`)
             }
         }


         ///////////////// AVATAR URL COMMAND ////////////
         else if(command == 'avatar'){
             if(!message.mentions.users.size){
                 message.reply(`Your Avatar URL: <${message.author.displayAvatarURL({format: "png" , dynamic: true})}>`)
             }
             else{
                
                 const avatarUrls = message.mentions.users.map( user =>{
                    return `\n ${user.username}'s avatar <${user.displayAvatarURL({format: "png", dynamic: true })}>`
                 })
                 message.reply(avatarUrls);
             }
         }


         //////////////// PRUNING MESSAGES COMMAND ////////////////
         else if(command == 'prune'){
             const pruneNumber = parseInt(args[0])
             if(isNaN(pruneNumber)){
                 message.reply("You need to provide a valid number!")
             }
             else if(pruneNumber<2 || pruneNumber>100){
                 message.reply("Enter the number between 2 and 100")
             }
             else{
                 message.channel.bulkDelete(pruneNumber,true).catch(err=>{
                     message.reply("There was an error in Pruning, Mostly no recent Messages.")
                 });
             }
         }








       
    }
})


client.login(token)

