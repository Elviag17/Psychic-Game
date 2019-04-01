

var winsCounter = 0;
var lossesCounter = 0;
var guessCounter = 9;
var guessList = []
var compLetter = compGuess();
var winAudio = document.createElement("Audio");
var loseAudio = document.createElement("Audio");

loseAudio.setAttribute("src", "assets/buzzer.mp3");
winAudio.setAttribute("src", "assets/clapping.mp3");

function compGuess() {
    var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return alpha[Math.floor(Math.random() * 26)]

}

function totalWins() {
    document.getElementById("number-wins").textContent = winsCounter;
}

function totalGuessLeft() {
    document.getElementById("guesses-left").textContent = guessCounter;

}
function totalLosses() {
    document.getElementById("number-losses").textContent = lossesCounter;
}

function list() {
    document.getElementById("guess-list").textContent = guessList;
}

function newGame() {
    guessList = [];
    list();
    compLetter = compGuess();
    guessCounter = 9;
    totalGuessLeft();
}


document.onkeyup = function (event) {
    var userGuess = event.key;
    guessList.push(userGuess);
    list();


    if (userGuess == compLetter) {

        winAudio.play();
        newGame();
        winsCounter++;
        totalWins();

    }
    else if (userGuess != compLetter && guessCounter != 1) {
        guessCounter--;
        totalGuessLeft();

    }
    else {
        loseAudio.play();
        newGame();
        lossesCounter++
        totalLosses();



    }

}
