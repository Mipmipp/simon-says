let machinePattern = []; 
let userPattern = [];


function highlightBox(randomBox) {
    document.querySelector(`${randomBox}`).className = 'highlight';
}

function returnColorBox(randomBox) {
    document.querySelector(`${randomBox}`).className = 'return-color';
}
