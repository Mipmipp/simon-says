const $main = document.querySelector('.main');

document.querySelector('#buttons-difficult').onclick = function(event) {
    event.preventDefault();
    hideElement('#homepage');
    showElement('#game');
}

document.querySelector('#start-game').onclick = function(event) {
    event.preventDefault();
    hideElement('#start-game');
    showElement('#actual-score');
    handleGame();
}

function showElement(element) {
    document.querySelector(element).className = '';
}

function hideElement(element) {
    document.querySelector(element).className = 'hide';
}
