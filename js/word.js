var word = ["xenophobic" , "preaccept", "duffer", "servants", "unbecomingly", "commended", "sonic", "jonathan", "advise", "parade", 
"remarriages", "combos", "superconductor", "trackless", "uprousing", "emancipation", "lasciviousness", "stillest", 
"conflictive", "scavenges"]

var random = word[Math.floor(Math.random() * (word.length-1))]; //randomizes

var guess_word = word[random]; // chooses random words

// Add placeholders "_" to guess field and print to field
var placeholders = new Array(guess_word.length());
var wrongCounter = 0;

for (var i = 0; i <placeholders.length; i++){
    placeholders[i] = "_";
}

function printPlaceholder(){
    for (var i = 0; i < placeholders.length; i++){
        var ratefield = document.getElementById("ratefield");
        var addholder = document.createTextNode(placeholder[i]);

        ratefield.appendChild(addholder);
    }
}

// Check if letter provider matches letter in the word
var letterCheck = function() {
    var f = document.rateformular;
    var b = f.elements("guessedletter");
    var checker = b.value;

    checker = checker.toUpperCase();

    for (var i = 0; i < guess_word.length; i++) {
        if (guess_word[i] === checker) {
            placeholders[i] = checker + " ";
            var letter = true;
        }
        b.value = "";

        // replaces field with new one
        var ratefield = document.getElementById("ratefield");
        ratefield.innerHTML = "";
        printPlaceholder();
    }

    if (!letter) {
        var wrongLetter = document.getElementById("wrongLetter");
        var addHolder = document.createTextNode(" " + checker);
        wrongLetter.appendChild(addHolder);
        wrongCounter++;
        // NEED TO FIGURE OUT HOW TO HANDLE HANGMAN DRAWING
    }

    // check if all letters found
    var done = true;
    for (var i = 0; i < placeholders.length; i++) {
        if (placeholder[i] === "_") {
            done = false;
        }

        if (done) {
            window.alert("You Win!");
        }

        if (wrongCounter === 6) {
            window.alert("You guessed six times and died.")
        }
    }
}

function init(){
    printPlaceholder();
}

window.onload = init;