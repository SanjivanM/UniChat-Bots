//register the bot. Syntax: registerBot(bot_username, bot_header_char, callback). callback is the name of the function to be called whenever a message starts with the command header.

registerBot("SM84CEBot", "~", "execute_SM84CEBot");

//this is the function called whenever a message starts with the command header. We recommend function names of the format execute<bot_username>
function execute_SM84CEBot(data) {
  //This code initializes the variables:
  var poster = data.poster;
  var message = data.message;
  var timestamp = data.timestamp;
  var raw_timestamp = data.rawTimestamp;

  //if the first 4 characters of the message, minus the command header, are "ping", then highlight the user and say, "Pong!".
  if (message.substring(9) == "BotAttack") {
  	respond(username + ": This is an attack of the Universal Paperclips drones.  You'd better run!!","SM84CEBot",data);
  }
}