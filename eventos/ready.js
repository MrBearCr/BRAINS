

module.exports = async(client,message,args,config) => {


client.user.setPresence( {
       activity: {
           name: ` $help`,
           type: "PLAYING"
       },
       status: "online"
    });

  
  }
