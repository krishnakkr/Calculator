let inputString = '';
let outputString = '';

function updateDisplay() {
    document.getElementById('input').textContent = inputString;
    document.getElementById('output').textContent = outputString;
}

function addInput(value) {
    inputString += value;
    updateDisplay();
}

function clearInput() {
    inputString = '';
    outputString = '';
    updateDisplay();
}

function deleteInput() {
    inputString = inputString.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        let result = eval(inputString);
        outputString = result.toLocaleString();
    } catch {
        outputString = 'Error';
    }
    updateDisplay();
}


function addEventListeners() {
    let buttons = document.querySelectorAll('.button, .button1');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            let id = this.getAttribute('id');
            switch (id) {
                case 'clear':
                    clearInput();
                    break;
                case 'del':
                    deleteInput();
                    break;
                case 'enter':
                    calculate();
                    break;
                case 'ans':
                    calculate();
                    break;
                case 'root':
                    inputString += 'Math.sqrt(';
                    updateDisplay();
                    break;
                case 'close-bracket':
                    inputString += ')';
                    updateDisplay();
                    break;
                default:
                    addInput(this.textContent);
                    break;
            }
        });
    }
}

addEventListeners();
