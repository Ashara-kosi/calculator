// selecting our DOM elements

const cancel = document.getElementById('cancel');
const displayScreen = document.getElementById('calculator-screen');
const displayNumbers = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('arithmetic');
const back = document.getElementById('back-space');


// variables that holds values temporarily
var firstVal = '0';
var secondVal;
var evalStringCalc = [];


// updating the display screen
contentDisplayVal = (e) => {

    var btnValue = e.target.innerText;
    if (firstVal === '0'){
        firstVal = ''
    }

    //appending the value clicked(btnValue) to displayScreen

    firstVal += btnValue;
    //console.log('hellohfssedrfghjkyutf',displayScreen)
    //console.log(firstVal)
    displayScreen.innerText = firstVal;
}


// the main operation function
mainOperation = (e) => {
    var operation = e.target.innerText;

    switch (operation) {
        case '+':
            secondVal = firstVal;
            firstVal = '0';
            displayScreen.innerText = firstVal;
            evalStringCalc.push(secondVal);
            evalStringCalc.push('+');
            break;

        case '-':
            secondVal = firstVal;
            firstVal = '0';
            displayScreen.innerText = firstVal;
            evalStringCalc.push(secondVal);
            evalStringCalc.push('-');
            break;

        case '+':
            secondVal = firstVal;
            firstVal = '0';
            displayScreen.innerText = firstVal;
            evalStringCalc.push(secondVal);
            evalStringCalc.push('+');
            break;

        case 'x':
            secondVal = firstVal;
            firstVal = '0';
            displayScreen.innerText = firstVal;
            evalStringCalc.push(secondVal);
            evalStringCalc.push('*');
            break;
        
        case '/':  
            secondVal = firstVal;
            firstVal = '0';
            displayScreen.innerText = firstVal;
            evalStringCalc.push(secondVal);
            evalStringCalc.push('/');
            break;

        case '=':
            evalStringCalc.push(firstVal);
            var evaluation = eval(evalStringCalc.join(''));
            firstVal = evaluation + '';
            displayScreen.innerText = firstVal;
            evalStringCalc = []; // emptying the array
            break
        default:
            break

    }
}


// adding click event listener to each buttons using for loop

for ( let i = 0; i < displayNumbers.length; i++){
    displayNumbers[i].addEventListener('click', contentDisplayVal);
}

for ( let i = 0; i < operators.length; i++){
    operators[i].addEventListener('click', mainOperation );
}

// function for cancel button

cancel.onclick = ( ) => {
    firstVal = '0';
    secondVal = undefined;
    evalStringCalc = [];
    displayScreen.innerHTML = firstVal;
}

// function for backspace

back.onclick = () => {
    displayScreen.value = displayScreen.value.substring(0, displayScreen.value.length - 1)
}
