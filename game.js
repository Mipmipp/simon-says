let machinePattern = []; 
let userPattern = [];
let milliSecondsDifficult = 0;

function handleGame() {
    updateState('Machine turn, wait!');
    blockUserInput();

    const newBox = getRandomBox();
    machinePattern.push(newBox);

    const DELAY_USER_TURN = (machinePattern.length + 1) * milliSecondsDifficult;

    machinePattern.forEach(function(box, index) {
        unblockUserInput();
        const MS_DELAY = (index + 1) * milliSecondsDifficult;
        setTimeout(function() {
            highlightBox(box);
        }, MS_DELAY);
    });

    setTimeout(function() {
        updateState(`Is your turn! This is the round #${machinePattern.length}`);
        unblockUserInput();
        userTurn();
    }, DELAY_USER_TURN);

    userPattern = [];
}

function userTurn() {
    const $board = document.querySelector('#board');
    $board.addEventListener('click', handleUserClick);
}

function handleUserClick(e) {
    const elementClicked = `#${e.target.id}`
    highlightBox(elementClicked)
    userPattern.push(elementClicked);
    
    const machineBoxSelected = machinePattern[userPattern.length - 1];
    if (elementClicked !== machineBoxSelected) {
        lose();
        return;
    }
    
    if(userPattern.length === machinePattern.length) {
        blockUserInput();
        setTimeout(handleGame, milliSecondsDifficult);
    }
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
    document.querySelector(randomBox).className = 'highlight';
    setTimeout(function() {
        returnColorBox(randomBox);
    }, milliSecondsDifficult)
}

function returnColorBox(randomBox) {
    document.querySelector(randomBox).className = 'return-color';
}

function blockUserInput() {
    const $board = document.querySelector('#board');
    $board.style.pointerEvents = 'none';
}

function unblockUserInput() {
    const $board = document.querySelector('#board');
    $board.style.pointerEvents = 'auto';
}

}
