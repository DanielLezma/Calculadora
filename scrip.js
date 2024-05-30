let display = document.getElementById('display');
let historyList = document.getElementById('historyList');

document.addEventListener('DOMContentLoaded', loadHistory);

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        let result = eval(display.value);
        display.value = result;
        saveToHistory(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function saveToHistory(operation) {
    let history = getHistory();
    history.push(operation);
    localStorage.setItem('history', JSON.stringify(history));
    addToHistoryList(operation);
}

function getHistory() {
    let history = localStorage.getItem('history');
    if (history) {
        return JSON.parse(history);
    } else {
        return [];
    }
}

function loadHistory() {
    let history = getHistory();
    history.forEach(addToHistoryList);
}

function addToHistoryList(operation) {
    let li = document.createElement('li');
    li.textContent = operation;
    historyList.appendChild(li);
}
