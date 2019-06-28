var disneyMovies = ["lionking", "toystory", "littlemermaid", "tarzan", "aladdin", "hercules", "thejunglebook", "mulan"];

var wins = [];
var losses = [];
var userGuesses = [];
var amountOfGuesses = 6;
var blanks = 0;
var lettersInWord = [];
var word = "";
var wrongGuesses = [];
var blanksAndCorrectGuesses = [];
var letterguessed;



// Reset
function start() {
   
    word = disneyMovies[Math.floor(Math.random() * disneyMovies.length)];

    amountOfGuesses = 6;
    blanksAndCorrectGuesses = [];
    wrongGuesses = [];

    lettersInWord = word.split("");
    console.log(word);

    for (var c = 0; c < word.length; c++) {
        blanksAndCorrectGuesses.push("_");
    } console.log(blanksAndCorrectGuesses);

    document.getElementById("remaining-guesses").innerHTML = amountOfGuesses;
    document.getElementById("blank-amount").innerHTML = blanksAndCorrectGuesses.join(" ");
    document.getElementById("incorrect-guesses").innerHTML = wrongGuesses.join(" ");
}

// Word Check
function checkGuess(guess) {

    var inWord = false;

    if (word.includes(letterguessed)) {

        for (var i = 0; i < word.length; i++) {
            if (word[i] === letterguessed) {
                blanksAndCorrectGuesses[i] = letterguessed;
            }
        }

    } else {

        if (wrongGuesses.includes(letterguessed)) {
            alert("pick a letter you have not guessed");
        } else {
            amountOfGuesses--;
            wrongGuesses.push(guess);
        }

    };

}
// Restart Round
function roundOver() {
    console.log("Win:" + wins + "Loss" + losses + "AmountofGuesses" + amountOfGuesses);

    document.getElementById("remaining-guesses").innerHTML = amountOfGuesses;
    document.getElementById("blank-amount").innerHTML = blanksAndCorrectGuesses.join(" ");
    document.getElementById("incorrect-guesses").innerHTML = wrongGuesses.join(" ");

    if (lettersInWord.toString() === blanksAndCorrectGuesses.toString()) {
        wins++;
        alert("You Win!");

        document.getElementById("wins").innerHTML = wins;
        start();
    }

    else if (amountOfGuesses === 0) {
        losses++
        alert("You Lose");
        document.getElementById("losses").innerHTML = losses;
        start();
    }
}

// Running App
start();

document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        letterguessed = event.key.toLocaleLowerCase();
        checkGuess(letterguessed);
        roundOver();
    }
}

