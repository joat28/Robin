module.exports = {
    
    name : "avatar",
    description : "this command is used to give a link to users/mentions profile",
    aliases : ["icon", "pfp"],
    execute(message, args){
        if (!message.mentions.users.size) {
            message.reply(`Your Avatar URL: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }
        else {
            const avatarUrls = message.mentions.users.map(user => {
                return `\n ${user.username}'s avatar <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
            });
            message.reply(avatarUrls);
        }
    }
}
