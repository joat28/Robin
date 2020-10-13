const {prefix} = require('../config.json');

module.exports = {

    name: "help",
    description: "this is used to list all possible commands",
    aliases: [ "h","commands"],
    execute(message, args){
        // message.reply(" Here are some commands to get you started, ( prefix : .. )"); 
        let data = [];
        const {commands} = message.client;
        if(!args.length){
            data.push("Here is a list of all my commands! ");
            data.push(commands.map(cmd =>cmd.name).join(', '));
            data.push(`To get info about a particular command use ${prefix}help <COMMAND NAME>`)
            return message.author.send(data).then(() => {
                if(message.channel.type = "dm") return;
                message.reply("I have sent you a list of commands, check your DM!");
            })
            .catch(error => {
                message.reply("There was an error sending you, a list of commands!", error);
            })
        }
        else{

               
                const commandHelpAsked = commands.find(cmd => cmd.name == args[0]);
                if(!commandHelpAsked){
                    message.reply("No such Command found! Please check.");
                    return;
                }
                data.push("Here are the details of the command you are looking for. ");
                data.push(`Name: ${commandHelpAsked.name} \nDescription: ${commandHelpAsked.description} \nUsage: ${commandHelpAsked.usage} \nAliases: ${commandHelpAsked.aliases} \nArguements Required: ${commandHelpAsked.args}` );
                return message.reply(data).catch(error => {
                    message.reply("Some error occured!. ")
                    console.log(error);
                })

        } 
    }

}