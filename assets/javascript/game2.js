alert('Press any key to get started!');


var Words = ['Super Mario', 'The Legend of Zelda', 'Megaman', 'Metriod', 
'Bomberman','Pokemon', 'Picross', 'Professor Layton','Phoneix Wright', 'Mario Kart', 'Super Smash Bros', 'Animal Crossing',]



// global variables 


var s;
var Game="";
var count = 0;
var answerArray = [];

var word="";

function init(){
    // Pick a random word
    word = WORDS[Math.floor(Math.random() * WORDS.length)];
    // Set up the answer array
    answerArray = [];
    for (var i = 0; i < word.length; i++) {
      answerArray[i] = "_";
    }
    document.getElementById("answer").innerHTML= answerArray.join(" ");
    document.getElementById("message").innerHTML= "Type a letter then press guess, or press quit to stop playing."
  }
  init();


  // putting in a string
  s = answerArray.join(" ");
  document.getElementById("answer").innerHTML = s;
}

function letter() {
  var letter = document.getElementById("letter").value;
  
  if (letter.length > 0) {
    for (var i = 0; i < Game.length; i ++) {
      if (Game[i] === letter) {
        answerArray[i] = letter;
      }
    }
    count++;
    document.getElementById("counter").innerHTML = "No of clicks: " + count;
    document.getElementById("answer").innerHTML = answerArray.join(" ");
  }
  if(count>5) {
    document.getElementById("stat").innerHTML = "You should have guessed it by now!";
  }
}
