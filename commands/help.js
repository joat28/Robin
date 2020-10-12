module.exports = {

    name: "help",
    description: "this is used to list all possible commands",
    aliases: [ "h","commands"],
    execute(message, args){
        message.reply(" Here are some commands to get you started, ( prefix : .. )");  
    }

}