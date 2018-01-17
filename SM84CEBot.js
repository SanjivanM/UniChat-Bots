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
  if (message.substring(0,9) == "botattack") {
  	//this is a built-in function of your bot.
  	SM84CEbot.respond(poster + ": This is an attack of the Universal Paperclips drones.  You'd better run!!");
  }
if (message.substring(0,2) == "xd") {
  	//this is a built-in function of your bot.
  	SM84CEbot.respond(poster + ": DoorsCS told me to tell you that xd is not an actual face.  Stop it.");
  }
if (message.substring(0,6) == "cookie") {
  	//this is a built-in function of your bot.
  	SM84CEbot.respond(poster + ": UniChatDevTeam, someone wanted you to have this cookie!");
  }
  if (message.substring(0,21) == "releasethehypnodrones") {
  	//this is a built-in function of your bot.
  	SM84CEbot.respond(poster + ": Releasing the HypnoDrones...");
  }
if (message.substring(0,21) == "releasethehypnodrones") {
  	//this is a built-in function of your bot.
  	SM84CEbot.respond(poster + ": The HypnoDrones have been released!  _iPhoenix_, are you ready to be turned into paperclips?");
  }
	if (message.substring(0,12) == "installcycle") {
  	//this is a built-in function of your bot.
  	SM84CEbot.respond(poster + ": Have you tried uninstalling and reinstalling?");
  }
	if (message.substring(0,10) == "powercycle") {
  	//this is a built-in function of your bot.
  	SM84CEbot.respond(poster + ": DoorsCS told me to ask you if you've tried turning it off and back on again.  He also wants you to look at this: https://youtu.be/nn2FB1P_Mn8");
  }
}
