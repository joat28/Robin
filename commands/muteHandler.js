const {prefix} = require('../config.json');

module.exports  = {

    name: "mute",
    description: "this is used to mute members in corresponding voice channel",
    args: false,
    aliases: ['m'],
    guildOnly: true,
    usage: `For muting users: ${prefix}mute <arguments> \n For unmuting users: ${prefix}unmute <arguements>` ,
    execute(message, args, client){
        const channel = message.channel;
        const members = channel.members;
        console.log(args);
        try{
            if(args == 'u' || args == 'U'){
                members.forEach(member => {
                    member.voice.setMute(false)
                
                }).then(message.channel.send('Everyone is unmuted!'));
            }
            else{
                members.forEach(member => {
                    member.voice.setMute(true);
                }).then(message.channel.send('Everyone is muted! use ..m u to revert'));
            }
        }
        catch(error){
            message.channel.send(error);
            message.channel.send('Some error occured on server side!');
            return;
        }
    }
}