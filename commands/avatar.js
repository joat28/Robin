const {prefix} =  require('./config.json');
module.exports = {
    
    name : "avatar",
    description : "this command is used to give a link to users/mentions profile",
    aliases : ["icon", "pfp"],
    guildOnly:false,
    args: false,
    usage: `${prefix}avatar <user (optinal)>`,
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
