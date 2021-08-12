// Button color green using JS
const greenButton = document.getElementById('green-button');
function makeGreen (){
    document.body.style.background = 'green';
}
greenButton.onclick = makeGreen;

// Button color red using JS
const redButton = document.getElementById('red-button');
redButton.onclick = makeRed;
function makeRed(){
    document.body.style.background = 'red';
}

// Button color blur using JS
const blueButton = document.getElementById('blue-button');
blueButton.onclick = makeBlue;
function makeBlue (){
    document.body.style.background = 'blue';
}
