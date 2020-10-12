module.exports ={
    
    name : "prune",
    description : "this is used to delete or prune messages from 2 to 100",
    args: true,
    aliases: [ "delmsg"],
    execute(message, args){
    const pruneNumber = parseInt(args[0])
    if(isNaN(pruneNumber)){
        message.reply("You need to provide a valid number!")
    }
    else if(pruneNumber<2 || pruneNumber>100){
        message.reply("Enter the number between 2 and 100")
    }
    else{
        message.channel.bulkDelete(pruneNumber,true).catch(err=>{
            message.reply("There was an error in Pruning, Mostly no recent Messages.")
        });
    }
    }

}