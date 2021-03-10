const {prefix} = require('../config.json');
module.exports = {
    name : "crole",
    description : "this is used to make mod role, and assign it to users",
    args: true,
    guildOnly: true,
    aliases: [],
    usage : `${prefix} <To users>`,
    execute (message, args, client){
 
        // console.log(message.guild.ownerID);
        // console.log(message.member.user.id);

        if(message.guild.ownerID === message.member.user.id){
            //message.channel.send('You can use this command!');
            if(!message.mentions.users.size){
                return message.channel.send('Please mention users!')
            }
            else{
                let checkRole = false;
                const hasModRole = message.guild.roles.cache.find(role => role.name === 'mod');
               // console.log(message.guild.roles.cache);
                if(hasModRole){
                    return message.channel.send('There is already a mod role in the channel!')
                }
                else{
                    message.channel.send('There is no mod role in the channel!');
                    message.guild.roles.create({
                         data: {
                            name: 'mod',
                            color:'GREEN',
                            permissions:{ MANAGE_MESSAGES :  false,
                                          KICK_MEMBERS: false,
                                          BAN_MEMBERS:false,
                                          MUTE_MEMBERS:false,
                                          DEAFEN_MEMBERS:false,
                                          BAN_MEMBERS:false,
                                          MANAGE_ROLES:false, 
                                          MANAGE_ROLES_OR_PERMISSIONS:false,
                                        }
                                }
                        })
                    .then(message.channel.send('mod role created'))
                    .catch(error =>{console.log(error)});
                }
            }
            return;
        }
        else{
            message.channel.send('Only the guild owner can use this command!')
            return;
        }
        



        
        // if(args.length !=0){
        //     const person = message.mentions.users.first;
        //     if(person.hasPermission('KICK_MEMBERS')){
        //         return message.channel.send("User has permission to kick")
        //     }
        //     else{
        //         return message.channel.send("User does not have permission to kick")
        //     }
        // }
        // if (message.member.hasPermission('KICK_MEMBERS')) {
		// 	return message.channel.send('You can kick members.');
        // }
        // else{
        //     return message.channel.send('You can not kick members.');
        // }




        

    }
} 