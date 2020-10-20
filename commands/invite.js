const {prefix} =  require('./config.json');
module.exports ={
    name: "invite",
    description: "this command is used to invite channel users for an event. using DMs/ channel messages",
    args: true,
    usage : `Basic invite : ${prefix}invite Event_Name   Mentions_For_Invite(optional) \nForce Invite : ${prefix}invite Event_Name force/f/u   Mentions_For_Invite(optional)`,
    aliases:["inv", "i"],
    guildOnly: true,
    execute: function(message,args) {

        const inviteMembers = [];
        const dateObj = new Date();
        let counter = 0;
        args.forEach(user => {
            if(counter == 1){
                inviteMembers.push(user);
            }
           counter = 1; 
        });
        if(!message.mentions.users.size){
            inviteMembers.push('@everyone');
        }
        let force = false;
        if(args[1] == "force" || args[1] == "f" || args[1] == "u"){
            force = true;
            inviteMembers.shift();
        } 
        const title = force ? `${args[0].toUpperCase()} URGENT INVITE` : `${args[0].toUpperCase()} INVITE`; 
        const inviteMessage = {
            color: 0xfffff,
            title: `${title}`,
            description: `${message.author} wants to invite for ${args[0].toUpperCase()} `,
            fields: [
            { 
                    name: '\u200B',
                    value: '\u200B' 
            },
            {
                name: "Invitees :",
                value: `${inviteMembers}`
            },
            {   
                name: "Time of Event :",
                value: `Now (${dateObj.toTimeString()}), invite expires in 1 hr`
            },
            {   
                name: "Organiser :",
                value: `${message.author}`
            },
            { 
                name: '\u200B',
                value: '\u200B' 
            },
            ],
            timestamp : new Date(),
            footer:{
                text: "Developed by Prabhat"
            }
        }
        if(!force){

            message.channel.send({embed: inviteMessage})
            .catch(error => {
            message.channel.send("Some error occured! in invite");
            console.log(error)
            })

        }
        else{

            message.channel.send({embed: inviteMessage}).
            then(msg =>{
            // 
            //inviteMessage.title = `${args[0].toUpperCase()} URGENT INVITE`; 
            message.mentions.users.map(user => user.send({embed:inviteMessage}));
            //console.log(message.mentions);
            })
            .catch(error => {
            message.channel.send("Some error occured! in invite");
            console.log(error)
            })

        }
        


    }
}