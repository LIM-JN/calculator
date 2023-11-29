let currentOperator = '';
let previousNum = 0;
let calculated = false;

const previousDisplay = document.querySelector('.previous-num').children[0]
const currentDisplay = document.querySelector('.current-num').children[0]


const numButtons = document.querySelectorAll('.num')
numButtons.forEach(numEvent);

function numEvent(button) {
    button.addEventListener("click",function() {
        if (calculated === true) {
            previousNum = 0;
            previousDisplay.innerHTML = 0;
            currentDisplay.innerHTML = 0;
            calculated = false;
        }
        if ( currentDisplay.innerHTML === '0' ) {
            currentDisplay.innerHTML = button.innerHTML
        } else {
            currentDisplay.innerHTML += button.innerHTML
        }
    })
}
const operators = document.querySelectorAll('.operator')
operators.forEach(operatorEvent)

function operatorEvent(operator) {
    operator.addEventListener('click',function() {
        if (currentDisplay.innerHTML != 0) {
        calculated = false;
        currentOperator = operator.innerHTML;
        previousNum = parseFloat(currentDisplay.innerHTML)
        previousDisplay.innerHTML = `${previousNum} ${currentOperator}`
        currentDisplay.innerHTML = "0"
        }
    })
}

const resultButton = document.querySelector('#result')

resultButton.addEventListener("click", function() {
    const currentNum = parseFloat(currentDisplay.innerHTML);
    if( currentNum != 0 && previousNum !=0 && currentOperator !=='') {
        previousDisplay.innerHTML = `${previousNum} ${currentOperator} ${currentNum}`
        calculated = true;
        switch (currentOperator) {
            case "+":
            currentDisplay.innerHTML = previousNum + currentNum
            previousNum += currentNum
            break
            case "-":
            currentDisplay.innerHTML = previousNum - currentNum
            previousNum -= currentNum
            break
            case "x":
            currentDisplay.innerHTML = previousNum * currentNum
            previousNum = previousNum * currentNum
            break
            case "÷":
            currentDisplay.innerHTML = previousNum / currentNum
            previousNum = previousNum / currentNum
            break
        }
        resultNum = parseFloat(currentDisplay.innerHTML).toPrecision(12)
        while ( resultNum.includes('.') && resultNum.endsWith('0') || resultNum.endsWith('.')) {
            resultNum = resultNum.slice(0,-1)
        }
        currentDisplay.innerHTML = resultNum
        currentOperator = ''
    }
})

const clearButton = document.querySelector('#clear')

clearButton.addEventListener ("click",function() {
    currentOperator = '';
    previousNum = 0
    currentDisplay.innerHTML = 0
    previousDisplay.innerHTML = 0
})

const deleteButton = document.querySelector('#delete')

deleteButton.addEventListener("click",function() {
    const original = currentDisplay.innerHTML
    if (calculated === false) {
        if (original.length > 1) {
            currentDisplay.innerHTML = original.slice(0,original.length-1)
        } else {
            currentDisplay.innerHTML = 0;
        }
    }
})

const dotButton = document.querySelector('#dot')

dotButton.addEventListener('click',function() {
    const haveDot = currentDisplay.innerHTML.indexOf('.') > -1 
    if ( haveDot === false && calculated === false) {
        currentDisplay.innerHTML += '.'
    }
})