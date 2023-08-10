let listHTML = ``
function addLog(message, selector) {
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
    console.log(2+3)
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
    console.log(finishButtonElement.innerHTML);
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
            console.log(document.title)
            count --;
        } else {
            document.title = 'App';
            clearInterval(countInterval);
        }
    }, 500)
}