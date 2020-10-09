module.exports ={
    name: "args-info",
    description: "this is used as a test command for information about an arg and command",
    args: true,
    execute(message, args){
            message.reply(`The arguments are : ${args}`)
        
    }
}