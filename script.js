//number of circles we have in the game
var numCircles = 6;
//The colour variable should be an array that contains as many random RGB colours as there are circles.
var colours = [];
//This pickedColor is the RGB color we are trying to guess (string)
var pickedColor;
//This is the default colour of the game.
let defaultColour="#582c99"

//Grab all appropriate elements from the HTML.
var circles = document.querySelectorAll(".circle");
var colourToGuess = document.getElementById("colour-to-guess");
var resultMessage = document.getElementById("result-message");
var banner = document.querySelector(".banner");
var resetButton = document.getElementById("reset");

init();

function init() {
   reset();
   colourToGuess.textContent = pickedColor;
}


resetButton.addEventListener("click", reset);


function clickCircle() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
        resultMessage.textContent = "You win";
        resetButton.textContent = "Play again";
        
        circles.forEach(circle => {
            circle.style.backgroundColor = pickedColor;
        });
        banner.style.backgroundColor = pickedColor;
    } else {
        this.style.backgroundColor = defaultColour;
        resultMessage.textContent = "Try again";
    }
}

function reset() {
    colours = genRandomColours();
    pickedColor = chooseColor();
    colourToGuess.textContent = pickedColor;
    circles.forEach((circle, index) => {
        circle.style.backgroundColor = colours[index];
        circle.addEventListener("click", clickCircle);
    });
    banner.style.backgroundColor = defaultColour;
    resetButton.textContent = "RESTART";
    resultMessage.textContent = "";
	}


function makeColour() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function genRandomColours() {
    const newColors = [];
    for (let i = 0; i < numCircles; i++) {
        newColors.push(makeColour());
    }
    return newColors;
}

function chooseColor() {
    const randomIndex = Math.floor(Math.random() * colours.length);
    return colours[randomIndex];
}