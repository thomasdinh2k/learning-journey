function addLog(message, selector) {
    let listHTML = ``
    const HTML = `<p>${message}</p>`;
    listHTML += HTML
    document.querySelector(`.${selector}`).innerHTML = listHTML;
}

// [
//     'make dinner',
//     'wash dishes',
//     'watch youtube',
//     'masturbate'
// ].forEach(function(value, index, array) {
//     if (value === 'wash dishes' || value === 'masturbate') {
//         return;
//     }
//     addLog(value);

// });

// 12a
let add = function(selector) {
    addLog(2 + 3, selector)
    // console.log(2+3)
}
add('E12a');
add('E12a');

// 12b 

function runTwice(fun) {
    fun('E12b');
}

// runTwice(add('E12b'));

// 12c

function finishButton(defaultState, activeState) {
    finishButtonElement = document.querySelector('.E12c');
    if (finishButtonElement.innerHTML === defaultState) {
        finishButtonElement.innerHTML = activeState;
    } else {
        finishButtonElement.innerHTML = defaultState;
    }
}

// 12d
function E12d() {
    ButtonElement = document.querySelector('.E12d');
    if(ButtonElement.innerHTML == 'Finished!') {
        ButtonElement.innerHTML = 'Click to Run E12d';
    } else {
        setTimeout(function(){
            ButtonElement.innerHTML = 'Loading....';
            ButtonElement.innerHTML = 'Finished!';
        } ,1000);
    }
}

// 12e
let timeoutID;
let timeoutSeconds;

function E12e() {
    let seconds = 4;
    const LogElement = document.querySelector('.E12e-log');
    clearTimeout(timeoutID);
    clearInterval(timeoutSeconds);
    LogElement.innerHTML = `Item is added to cart`
    document.querySelector('.E12e').classList.add('active')
    document.querySelector('.E12e-log-seconds').innerHTML = seconds;
    timeoutSeconds = setInterval(function() {
        if (seconds > 0) {
            document.querySelector('.E12e-log-seconds').innerHTML = seconds - 1;
            seconds -= 1;
        }
        else {
            document.querySelector('.E12e-log-seconds').innerHTML = "";
            LogElement.innerHTML = '';
            document.querySelector('.E12e').classList.remove('active')
        }
    }, 1000)
}

// 12g
function E12g() {
    let count = 10;
    countInterval = setInterval(function() {
        if (count > 0) {
            document.title = `(${count}) New messages`
            count --;
        } else {
            document.title = 'App';
            clearInterval(countInterval);
        }
    }, 500)
}

// 12j
// function multiply(a, b) {
//     return a * b;
// }

const multiply = (a, b) => {
    return a * b
}

const multiply2 = (a,b) => a * b;

addLog(multiply(2, 3),'E12j');
addLog(multiply2(7, 11), 'E12j');

// 12l
const countPositive = array => {
    let count = 0;
    array.forEach(element => {
        if (element > 0) {
            count ++;
        };
    });
    return count;
}

addLog(countPositive([1, 3, -5, -3, 4, 5]) ,'E12l');


function removeEggFunction(foodArray) {
    const removedEggArray =  foodArray.filter(function(element) {
        return element != 'egg'
    })

    return removedEggArray
}

addLog((removeEggFunction(['egg', 'apple', 'egg', 'egg', 'ham', 'sandwich', 'egg'])),"E12n");


// 12o
// Remove the first two egg only
function removeEggFunction2(foodArray) {
    let eggCount = 0;
    const removedEggArray =  foodArray.filter(function(element) {
        if (element === 'egg' && eggCount < 2) {
            eggCount ++;
            return false;
        } else {
            return true;
        }
    })

    return removedEggArray;
}

addLog(removeEggFunction2(['egg', 'apple','egg', 'egg', 'ham']),"E12o");

const arrowFunction = () => {
    console.log('Hello');
}

arrowFunction();

const oneParam = (param) => {
    console.log(param + 1);

}

oneParam(3);

const oneLine = () => 2 + 3;

console.log(oneLine());


const object2 = {
    method: () => {

    }

};

const buttonElement = document.querySelector('.js-button');

const eventListener = () => {
    console.log('click');


buttonElement.addEventListener('click', eventListener);

buttonElement.removeEventListener('click', eventListener);

buttonElement.addEventListener('click', () => {
    console.log('click2');
})