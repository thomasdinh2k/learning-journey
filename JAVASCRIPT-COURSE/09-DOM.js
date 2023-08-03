function subscribe() {
  const buttonElement = document.querySelector('.js-subscribe-button');

  if (buttonElement.innerHTML === 'Subscribe') {
      buttonElement.innerHTML = 'Subscribed';
  } else {
      buttonElement.innerHTML = 'Subscribe';
  }
}

document.querySelector('.button-9b').innerHTML = '9b done!';

function headAndTail(choice) {
    document.querySelector('.result-9b').innerHTML = `You chose: ${choice}`
}

function sayYourName() {
  let name = document.querySelector('input').value;

  if (name) {
    document.querySelector('.result-9c').innerHTML = `Hello! Your name is ${name}`;
  } else {
    document.querySelector('.result-9c').innerHTML = `Please enter your name`;
  }
}

document.querySelector('.name-input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    sayYourName();
  }
})

function repeat(){
  let messageElement = document.querySelector('.word-input').value;
  console.log(messageElement);
  document.querySelector('.result-9h').innerHTML = messageElement;
}

document.querySelector('.result-9i').innerHTML = 'Cart quantity: 0'

function showCartQuantity(quantity){
  document.querySelector('.result-9i').innerHTML = `Cart quantity: ${quantity}`
}

function showResult(result){
  document.querySelector('.result-9j').innerHTML = `${result}`
}

