/*
let word = ["xenophobic" , "preaccept", "duffer", "servants", "unbecomingly", "commended", "sonic", "jonathan", "advise", "parade",
"remarriages", "combos", "superconductor", "trackless", "uprousing", "emancipation", "lasciviousness", "stillest", 
"conflictive", "scavenges"]
*/
//
let word = [
    ["C","I","N","D","E","R","E","L","L","A"],
    ["T","W","I","L","I","G","H","T"],
    ["G","L","A","D","I","A","T","O","R"],
    ["F","R","O","Z","E","N"],
    ["I","N","C","E","P","T","I","O","N"],
    ["W","A","T","C","H","M","E","N"],
    ["D","R","A","C","U","L","A"],
    ["H","A","N","C","O","C","K"],
    ["W","A","N","T","E","D"],
    ["T","I","T","A","N","I","C"],
    ["A","L","A","D","D","I","N"]
];

let random = Math.floor((Math.random()*(word.length-1))); //randomizes

let guess_word = word[random]; // chooses random words

console.log(guess_word);

// Add placeholders "_" to guess field and print to field
let placeholder = new Array(guess_word.length);
let wrongCounter = 0;

for (let i = 0; i < placeholder.length; i++){
    placeholder[i] = "_ ";
    console.log(placeholder);
}

function printPlaceholder(){
    for (let i = 0; i < placeholder.length; i++){
        let ratefield = document.getElementById("ratefield");
        let addholder = document.createTextNode(placeholder[i]);
        ratefield.appendChild(addholder);
    }
}

// Check if letter provided matches letter in the word
let letterCheck = function(){
    let f = document.rateformular;
    let b = f.elements["guessedletter"];
    let checker = b.value;
    checker = checker.toUpperCase();

    for (let i = 0; i < guess_word.length; i++){
        if(guess_word[i] === checker){
            placeholder[i] = checker + " ";
            var letter = true;
        }
    b.value = "";

        // replaces field with new one
    let ratefield = document.getElementById("ratefield");
    ratefield.innerHTML = "";
    printPlaceholder();
    }

    if(!letter){
        let wrongLetter = document.getElementById("wrongLetters");
        let addholder = document.createTextNode(" " + checker);
        wrongLetter.appendChild(addholder);
        wrongCounter++;
        
        if(wrongCounter === 1){
            let hangman_image = document.getElementById("hangman");
            hangman.src = "images/head.JPG";
        }

        if(wrongCounter === 2){
            let hangman_image = document.getElementById("hangman");
            hangman.src = "images/torso.JPG";
        }

        if(wrongCounter === 3){
            let hangman_image = document.getElementById("hangman");
            hangman.src = "images/limb1.JPG";
        }

        if(wrongCounter === 4){
            let hangman_image = document.getElementById("hangman");
            hangman.src = "images/limb2.JPG";
        }

        if(wrongCounter === 5){
            let hangman_image = document.getElementById("hangman");
            hangman.src = "images/limb3.JPG";
        }

        if(wrongCounter === 6){
            let hangman_image = document.getElementById("hangman");
            hangman.src = "images/limb4.JPG";
        }

        // UNABLE TO IMPORT STICKMAN JAVASCRIPT FILE
        // jQuery.getScript('js/stickman.js', function() {
        //     head(); 
        // });
    }

    // check if all letters found
    let done = true;
    for (let i = 0; i < placeholder.length; i++){
        if (placeholder[i] === "_ "){
            done = false;
        }
     }

    if(done){
        window.alert("No way! You guessed the word!");
    }

    if (wrongCounter === 6) {
            window.alert("No!!! better luck next time. :(");
    }
}

function init(){
    printPlaceholder();
}

window.onload = init;

// adapted from https://codepen.io/offline_blogger/pen/Kedtr