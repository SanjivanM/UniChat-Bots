//You need to store your bot into a variable.
var SM84CEbot = new Bot("SM84CEBot", "~");


function initializeBots() {
  //call the "register" function of your bot, which tells the bot API, "I'm here! Send me commands plz!"
  SM84CEbot.register();
}

//This is the function called whenever a message starts with the command header.
//set the 'executeCommand' function of your bot so that it, well, executes commands.
SM84CEbot.executeCommand = function (data) {
  //This code initializes the variables:
  var poster = data.poster;
  var message = data.message;
  var timestamp = data.timestamp;
  var raw_timestamp = data.rawTimestamp;

  if (message.substring(0, 11) == "droneattack") {
    SM84CEbot.respond(poster + ": This is an attack of the Universal Paperclips drones.  You'd better run!!");
  }
  if (message.substring(0, 2) == "xd") {
    SM84CEbot.respond(poster + ": DoorsCS told me to tell you that xd is not an actual face.  Stop it.");
  }
  if (message.substring(0, 6) == "cookie") {
    SM84CEbot.respond("_iPhoenix_, LAX18, others: someone wanted you to have this cookie!");
  }
  if (message.substring(0, 21) == "releasethehypnodrones") {
    SM84CEbot.respond(poster + ": Releasing the HypnoDrones...");
    setTimeout(function () {
      SM84CEbot.respond(poster + ": The HypnoDrones have been released!  _iPhoenix_, are you ready to be turned into paperclips?");
    }, 1000);
  }
  if (message.substring(0, 12) == "installcycle") {
    SM84CEbot.respond(poster + ": Have you tried uninstalling and reinstalling?");
  }
  if (message.substring(0, 10) == "powercycle") {
    SM84CEbot.respond(poster + ": DoorsCS told me to ask you if you've tried turning it off and back on again.  He also wants you to look at this: https://youtu.be/nn2FB1P_Mn8");
  }
  if (message.substring(0, 6) == "sm84ce") {
    SM84CEbot.respond("SM84CE: ping!");
  }
  if (message.substring(0, 4) == "ping") {
    SM84CEbot.respond(poster + ": pong!");
  }
  if (message.substring(0,3) == "ban") {
    SM84CEbot.respond("Don't make _iPhoenix_ ban you...")
  }
  if (message.substring(0,9) == "botattack") {
    SM84CEbot.respond(poster + ": This is an attack of the UniChat Bots.  RUUUN!!");
  }
  if (message.substring(0,9) == "banhammer") {
    SM84CEbot.respond("------[#] :( ");
    SM84CEbot.respond("uh oh... Someone's going to have a BAD day...");
  }
  if (message.substring(0,5) == "order") {
    SM84CEbot.respond("ORDER! ORDER in the chatroom!! *"+poster+" bangs "+((poster == "SM84CE" || poster=="_iPhoenix_") ? "his " : "his/her ")+((poster == "_iPhoenix_")?"ban":"")+"hammer");
  }
}
