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
            return;
        }
        if(message.member.hasPermission('KICK_MEMBERS')){
            const taggedUser = message.guild.member(message.mentions.users.first());
            message.reply(`trying to kick user....`)
            taggedUser.kick()
            .catch(err =>{
                message.reply("Some error occured");
                console.log(err)
            });
            return;
        }
        else {
            message.reply("You need to have kick permissions, dumbo!")
            return;
        }
    }
}
