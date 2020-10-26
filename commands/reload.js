const {prefix} = require('../config.json');
module.exports = {
	name: 'reload',
    description: 'Reloads a command',
    args: true,
    usage: `${prefix}reload Command_Name `,
    guildonly:false,
    aliases: ['rld'],
	execute(message, args) {
        const commandName = args[0].toLowerCase();
      //  console.log(commandName);
        const {commands} = message.client;
        const commandSearched = commands.get(commandName)
        || commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if(!commandSearched){
        
            message.channel.send("No such command found!")
            return;
        }
        else{
            delete require.cache[require.resolve(`./${commandSearched.name}.js`)];
            try {
                const newCommand = require(`./${commandSearched.name}.js`);
                message.client.commands.set(newCommand.name, newCommand);
                message.channel.send(`Command \`${commandSearched.name}\` was reloaded!`);
            } catch (error) {
                console.error(error);
                message.channel.send(`There was an error while reloading a command \`${commandSearched.name}\`:\n\`${error.message}\``);
            }
           
        }
    
    },
    
};