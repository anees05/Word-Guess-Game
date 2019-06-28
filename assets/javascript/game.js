var disneyMovies = ["lion king", "toy story", "little mermaid", "tarzan", "aladdin", "hercules", "the jungle book", "mulan"];

var wins = [];
var losses = [];
var userGuesses = [];
var amountOfGuesses = 6;
var blanks = 0;
var lettersInWord = [];
var word = "";
var wrongGuesses = [];
var blanksAndCorrectGuesses = [];



// Reset
function start(){
    document.getElementById("remaining-guesses").innerHTML = amountOfGuesses;
    document.getElementById("amount-blank").innerHTML = blanksAndCorrectGuesses.join(" ");
    document.getElementById("incorrect-guesses").innerHTML = wrongGuesses.join(" ");

    amountOfGuesses = 6;
    blanksAndCorrectGuesses = [];
    wrongGuesses = [];

    lettersInWord = word.split("");
    console.log(word);

    for (var c = 0; c < blanks; c++){
        blanksAndCorrectGuesses.push("_");
    }console.log(blanksAndCorrectGuesses);

    word = disneyMovies[Math.floor(Math.random() * disneyMovies.length)];
}

