let machinePattern = []; 
let userPattern = [];

function handleGame() {
    machineTurn();
    userTurn();
}


function comparePatterns() {
    if(userPattern.length === machinePattern.length){
        handleGame();
    } else if(userPattern.length !== machinePattern.length) {
        console.log('NO!!!!!!!')
    }
}

function userTurn() {
    getUserBox();
    comparePatterns();
}

function getUserBox() {
    const redBox = document.querySelector('#red-box');
    const blueBox = document.querySelector('#blue-box');
    const greenBox = document.querySelector('#green-box');
    const yellowBox = document.querySelector('#yellow-box');

    redBox.onclick = function() {
        userPattern.push('#red-box');
        highlightBox('#red-box')
        setTimeout(function() {
            returnColorBox('#red-box');
        }, 3000);
    } 
    
    blueBox.onclick = function() {
        userPattern.push('#blue-box');
        highlightBox('#blue-box')
        setTimeout(function() {
            returnColorBox('#blue-box');
        }, 3000);
    }

    greenBox.onclick = function() {
        userPattern.push('#green-box');
        highlightBox('#green-box')
        setTimeout(function() {
            returnColorBox('#green-box');
        }, 3000);
    }

    yellowBox.onclick = function() {
        userPattern.push('#yellow-box');
        highlightBox('#yellow-box')
        setTimeout(function() {
            returnColorBox('#yellow-box');
        }, 3000);
    }
}

function machineTurn() {
    let randomBox = getRandomBox();

    machinePattern.push(randomBox);
    highlightBox(randomBox)
    setTimeout(function() {
        returnColorBox(randomBox);
    }, 3000);
}

function getRandomBox() {
    const totalBoxes = 4;
    let randomBoxNumber = Math.floor(Math.random() * totalBoxes) + 1;
    
    if(randomBoxNumber === 1) {
        return '#red-box';
    }
    if(randomBoxNumber === 2) {
        return '#blue-box';
    }
    if(randomBoxNumber === 3) {
        return '#green-box';
    }
    if(randomBoxNumber === 4) {
        return '#yellow-box';
    }
}

function highlightBox(randomBox) {
    document.querySelector(`${randomBox}`).className = 'highlight';
}

function returnColorBox(randomBox) {
    document.querySelector(`${randomBox}`).className = 'return-color';
}