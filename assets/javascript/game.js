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




function start(){
    document.getElementById("remaining-guesses").innerHTML = amountOfGuesses;
    document.getElementById("amount-blank").innerHTML = blanksAndCorrectGuesses;
    document.getElementById("incorrect-guesses").innerHTML = wrongGuesses;

    amountOfGuesses = 6;

    word = disneyMovies[Math.floor(math.random() * wordlist.length)];







}










