var computerChoices = ["w", "i", "n", "s"];

//wins and losses and choices 
var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];

//functions
document.onkeyup = function (event) {

  var userGuess = event.key;

  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

  //if statements
  if (options.indexOf(userGuess) > -1) {

    if (userGuess === computerGuess) {
      wins++;
      numGuesses = 9;
      guessChoices = [];
    }

    if (userGuess != computerGuess) {
      numGuesses--;
      guessChoices.push(userGuess);
    }

    if (numGuesses === 0) {

      numGuesses = 9;
      losses++;
      guessChoices = [];
    }

    //logging on screen
    var html =
      "<h1> The Psychic Game </h1>" +
      "<p> Guess The Letter Thats On My Mind!</p>" +
      "<p>Wins: " + wins + "</p>" +
      "<p>Losses: " + losses + "</p>" +
      "<p>Guesses Left: " + numGuesses + "</p>" +
      "<p>Zoltar Says No!: " + guessChoices.join(", ") + "</p>";

    document.querySelector("#letsplay").innerHTML = html;
  }
};

var x = document.getElementById("myAudio"); 

function playAudio() { 
    x.play(); 
} 

function pauseAudio() { 
    x.pause(); 
}
