const $main = document.querySelector('.main');

document.querySelector('#slow').onclick = function(event) {
    event.preventDefault();
    milliSecondsDifficult = 2000;
    hideElement('#homepage');
    showElement('#game');
    showElement('#start-game');
    hideElement('#actual-state');
}

document.querySelector('#normal').onclick = function(event) {
    event.preventDefault();
    milliSecondsDifficult = 1450;
    hideElement('#homepage');
    showElement('#game');
    showElement('#start-game');
    hideElement('#actual-state');
}

document.querySelector('#fast').onclick = function(event) {
    event.preventDefault();
    milliSecondsDifficult = 850;
    hideElement('#homepage');
    showElement('#game');
    showElement('#start-game');
    hideElement('#actual-state');
}

document.querySelector('#button-start-game').onclick = function(event) {
    event.preventDefault();
    hideElement('#start-game');
    showElement('#actual-state');
    blockUserInput();
    machinePattern = [];
    handleGame();
}

document.querySelector('#try-again').onclick = function(event) {
    event.preventDefault();
    hideElement('#player-lose');
    hideElement('#actual-state');
    showElement('#start-game');
    showElement('#game');
    blockUserInput();
    machinePattern = [];
}

document.querySelector('#change-difficulty').onclick = function(event) {
    event.preventDefault();
    hideElement('#player-lose');
    showElement('#homepage');
    blockUserInput();
    machinePattern = [];
}

function showElement(element) {
    document.querySelector(element).className = '';
}

function hideElement(element) {
    document.querySelector(element).className = 'hide';
}
