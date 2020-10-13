module.exports = {
    name : "role",
    description : "this is used to give role",
    args: true,
    guildOnly: true,
    usage : "<USER> <ROlE TO GIVE>",
    execute (message, args){
        return message.reply(`You wanted to assign ${args[0]} a role of ${args[1]}! `);
    }
} 