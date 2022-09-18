let speech;
let input;
let textReply;
let responses = [];

let bot = new RiveScript();


setup = () => {
  createCanvas(displayWidth, displayHeight);
  responses.push("Welcome, Hello there!");
  textFont("Poppins");

  speech = new p5.Speech(voiceReady); // speech synthesis object
  speech.speak('Welcome! Hello there!'); // say something     

  function voiceReady() {
    console.log(speechRec.voices);
  }

  bot.loadFile([
    "./begin.rive",
    "./chatbot.rive",
  ]).then(loading_done).catch(loading_error);


  function loading_done() {
    console.log("Bot has finished loading!");
    // replies must be sorted
    bot.sortReplies();
    // RiveScript remembers user data by their username and can tell
    // multiple users apart.
    let username = "local-user";
    bot.reply(username, "hello").then(function (reply) {
      console.log("The bot says: " + responses);

    });
    setTimeout("console.log('pauseBetween')", 2000);
  }

  function loading_error(_err, _filename, _lineno) {
    console.log("Error when loading files: " + _err);
  }


  //////////// Create a Speech Recognition object with callback
  let speechRec = new p5.SpeechRec('en-US', gotSpeech);
  //////////// "Continuous recognition" (as opposed to one time only)
  let continuous = true;
  ///////////// If you want to try partial recognition (faster, less accurate)
  let interimResults = false;
  ///////////// This must come after setting the properties
  speechRec.start(continuous, interimResults);


  function gotSpeech() {

    const mainDiv = document.getElementById("chatbox");
    let botDiv = document.createElement("div");
    let userDiv = document.createElement("div");
    botDiv.id = "chatbot";
    userDiv.id = "user";

    if (speechRec.resultValue) {
      input = speechRec.resultString;
      console.log(input);
      reply = bot.reply("local-user", input).then(function (reply) {
        speech.speak(reply);
        console.log(reply);
        userDiv.innerHTML = input;
        mainDiv.appendChild(userDiv);
        botDiv.innerHTML = reply;
        mainDiv.appendChild(botDiv);
        mainDiv.scrollTop = mainDiv.scrollHeight;
      }
      )
      textReply = bot.reply("local-user", input).then(respond);
    }

    input = input.replace('.','');
    let textlower= input.toLowerCase();
    
    if(textlower.includes("italic") == true){
      userDiv.style.fontStyle = "italic";
      botDiv.style.fontStyle = "italic";
    }else if(textlower.includes("normal") == true){
      userDiv.style.fontStyle = "normal";
      botDiv.style.fontStyle = "normal";
    }else if(textlower.includes("thin") == true){
      userDiv.style.fontWeight = "200";
      botDiv.style.fontWeight = "200";
    }else if(textlower.includes("regular") == true){
      userDiv.style.fontWeight = "400";
      botDiv.style.fontWeight = "400";
    }else if(textlower.includes("bold") == true){
      userDiv.style.fontWeight = "700";
      botDiv.style.fontWeight = "700";
    }else if(textlower.includes("black") == true){
      userDiv.style.fontWeight = "900";
      botDiv.style.fontWeight = "900";
    }else if(textlower.includes("reset") == true){
      userDiv.style.fontStyle = "normal";
      botDiv.style.fontStyle = "normal";
      userDiv.style.fontWeight = "400";
      botDiv.style.fontWeight = "400";
    }

  }

  function respond(response) {
    responses.push(response);
    responses.splice(0, 1);
  }

}

