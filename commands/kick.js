const {prefix} = require('../config.json');
module.exports = {
    
    name : "kick",
    description : "this command is used to kick players",
    args: true,
    guildOnly: true,
    usage: `${prefix}kick <mention user to kick>`,
    aliases: ["remove"],
    execute(message, args,client){
        if (!message.mentions.users.size) {
            message.reply('You need to tag a person to Kick them!');
        }
        if(message.member.hasPermission('ADMINISTRATOR')){
            const taggedUser = message.guild.member(message.mentions.users.first());
            message.reply(`trying to kick user....`)
            .then(() => {
                taggedUser.kick().then(() => {
                    message.channel.send(`${message.author} has kicked ${taggedUser}\n`);
                })
                
            })
            .catch(err =>{
                message.reply("Some error occured");
                console.log(err);
            })
        }
        else {
            message.reply("You need to have admin privileges, dumbo!")
            return;
        }
    }
}
