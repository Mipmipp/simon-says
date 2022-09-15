let machinePattern = []; 
let userPattern = [];


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
