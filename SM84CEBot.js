//You need to store your bot into a variable.
var SM84CEbot = new Bot("SM84CEBot", "~");

function initializeBots() {
	//call the "register" function of your bot, which tells the bot API, "I'm here! Send me commands plz!"
	SM84CEbot.register();
}

//This is the function called whenever a message starts with the command header.
//set the 'executeCommand' function of your bot so that it, well, executes commands.
SM84CEbot.executeCommand = function(data) {
  //This code initializes the variables:
  var poster = data.poster;
  var message = data.message;
  var timestamp = data.timestamp;
  var raw_timestamp = data.rawTimestamp;

  //if the first 4 characters of the message, minus the command header, are "ping", then highlight the user and say, "Pong!".
  if (message.substring(9) == "BotAttack") {
  	//this is a built-in function of your bot.
  	respond(username + ": This is an attack of the Universal Paperclips drones.  You'd better run!!");
  }
}

//You are welcome :P
