const {prefix} = require('../config.json');
module.exports = {
    name : "role",
    description : "this is used to give role",
    args: false,
    guildOnly: true,
    aliases: [],
    usage : `${prefix} User Role_To_Give>`,
    execute (message, args, client){
        // if (message.member.roles.cache.some(role => role.name === 'admin'|| role.name =='mod')) {
        //     message.channel.send("You are admin/mod and have permissions");
        // }
        // else{
        //     message.channel.send("You are not admin");
        // }
        console.log(message.guild.ownerID);
        
        if(args.length !=0){
            const person = message.mentions.users.first;
            if(person.hasPermission('KICK_MEMBERS')){
                return message.channel.send("User has permission to kick")
            }
            else{
                return message.channel.send("User does not have permission to kick")
            }
        }
        if (message.member.hasPermission('KICK_MEMBERS')) {
			return message.channel.send('You can kick members.');
        }
        else{
            return message.channel.send('You can not kick members.');
        }




        
    //   if(value){
    //       message.channel.send("You have admin role assigned!");
    //   }
    //   else{
    //       message.channel.send("You have no admin role assigned!");
    //   }
        //return message.reply(`You wanted to assign ${args[0]} a role of ${args[1]}! `);
    }
} 