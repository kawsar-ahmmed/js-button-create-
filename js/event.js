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

// Different ways to use addEventListener on a button 
const nativeButton = document.getElementById('native-button');

nativeButton.onclick = function(){
    document.body.style.background = '#000'
}

// Different ways to use addEventListener on a button 
const narroGold = document.getElementById('narro-button');
narroGold.addEventListener('click', makeGolden);
function makeGolden (){
    document.body.style.background = '#1e7aca'
}

// Different ways to use addEventListener on a button another way
const hotPink = document.getElementById('hotPink-button');
// console.log(hotPink);
hotPink.addEventListener('click', function makePink (){
    document.body.style.background = 'pink'
})


