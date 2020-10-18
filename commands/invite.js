module.exports ={
    name: "invite",
    description: "this command is used to invite channel users for an event. using DMs",
    args: true,
    usage : "<event_name> <mentions_for_invite (optional)>",
    execute: function(message,args) {

        const inviteMembers = [];
        let counter = 0;
        args.forEach(user => {
            if(counter == 1){
                inviteMembers.push(user);
            }
           counter = 1; 
        });
        if(!args[1]){
            inviteMembers.push('@everyone');
        }
        const inviteMessage = {
            color: "#547",
            title: `${args[0].toUpperCase()} Invite`,
            description: `${message.author} wants to invite ${inviteMembers} for ${args[0]} `,
        }
        message.channel.send({embed: inviteMessage}).
        catch(error => {
            message.channel.send("Some error occured! in invite");
            console.log(error)
        })


    }
}