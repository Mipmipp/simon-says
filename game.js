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
        blockUserInput();
        const MS_DELAY = (index + 1) * milliSecondsDifficult;

        setTimeout(function() {
            highlightBox(box);
        }, MS_DELAY);
    });

    setTimeout(function() {
        updateState(`Is your turn! This is the round #${machinePattern.length}`);
        unblockUserInput();
    }, DELAY_USER_TURN);

    userPattern = [];
}

function handleUserClick(e) {
    const elementClicked = `#${e.target.id}`

    highlightBox(elementClicked);
    setTimeout(function() {
        returnColorBox(elementClicked);
        unblockUserInput();
    }, milliSecondsDifficult)

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
    blockUserInput();
    document.querySelector(randomBox).className = 'highlight';
    setTimeout(function() {
        returnColorBox(randomBox);
    }, milliSecondsDifficult - 500)
}

function returnColorBox(randomBox) {
    blockUserInput();
    document.querySelector(randomBox).className = 'return-color';
}

function blockUserInput() {
    const $redBox = document.querySelector('#red-box');
    const $blueBox = document.querySelector('#blue-box');
    const $greenBox = document.querySelector('#green-box');
    const $yellowBox = document.querySelector('#yellow-box');
    $redBox.removeEventListener('click', handleUserClick);
    $blueBox.removeEventListener('click', handleUserClick);
    $greenBox.removeEventListener('click', handleUserClick);
    $yellowBox.removeEventListener('click', handleUserClick);
}

function unblockUserInput() {
    const $redBox = document.querySelector('#red-box');
    const $blueBox = document.querySelector('#blue-box');
    const $greenBox = document.querySelector('#green-box');
    const $yellowBox = document.querySelector('#yellow-box');
    $redBox.addEventListener('click', handleUserClick);
    $blueBox.addEventListener('click', handleUserClick);
    $greenBox.addEventListener('click', handleUserClick);
    $yellowBox.addEventListener('click', handleUserClick);
}

function updateRound(round) {
    const $board = document.querySelector('#red-box');
    numberRound.textContent = `${round}`;
}

function updateState(state) {
    const $state = document.querySelector('#actual-state');
    $state.textContent = state;
} 

function lose() {
    hideElement('#game');
    showElement('#player-lose');
}
