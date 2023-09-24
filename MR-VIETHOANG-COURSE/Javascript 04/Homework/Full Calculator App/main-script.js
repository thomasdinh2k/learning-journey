const screen = document.querySelector(".screen");
let buffer = "0";
let previousOperator;
let previousInput;
let runningTotal = 0;
let calculatingState = 0;
let equationDisplay;

function init() {
  document.querySelector(".calc-buttons").addEventListener("click", (event) => {
    buttonClick(event.target.innerText);
    // console.log(event.target.innerText);
  });
}

function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
    console.log(`Checking state = ${calculatingState}`);
    if (calculatingState == 0) {
      console.log(`Buffer ${buffer}`);
      screen.innerText = buffer;
    } else if (calculatingState == 2) {
      let temp = value;
      flushOperation();
      buffer = temp;
      screen.innerText = buffer;
    } else {
      screen.innerText = `${previousInput} ${previousOperator} ${buffer}`;
    }
  }
}

function handleSymbol(symbol) {
  if (calculatingState == 2) {
    calculatingState = 1;
  }
  switch (symbol) {
    case "C":
      flushOperation();
      break;
    case "←":
      if (buffer.length == 1 || !buffer) {
        buffer = 0;
      } else if (buffer.length > 1) {
        buffer = buffer.toString().slice(0, -1);
      }

      if (equationDisplay) {
        screen.innerText = equationDisplay;
      } else {
        screen.innerText = buffer;
      }
      break;
    case "=":
      if (calculatingState >= 1) {
        console.log("Running Total");
        runningTotal = handleMath(
          parseFloat(previousInput),
          parseFloat(buffer),
          previousOperator
        );
        equationDisplay = `${previousInput} ${previousOperator} ${buffer} = ${runningTotal}\n`;
        screen.innerText = equationDisplay;
        // Repeat Calculation
        previousInput = runningTotal;
        calculatingState = 2;
        break;
      }
    case "+":
    case "−":
    case "×":
    case "÷":
      if (calculatingState == 0) {
        calculatingState = 1;
        previousInput = buffer;
        previousOperator = symbol;
        buffer = 0;
        equationDisplay = `${previousInput} ${previousOperator}`;
        screen.innerText = equationDisplay;
      } else {
        buffer = 0;
        previousOperator = symbol;
        equationDisplay = `${previousInput} ${previousOperator}`;
        screen.innerText = equationDisplay;
      }
      break;
    case "±":
      buffer *= -1;
      previousInput = buffer;
      screen.innerText = buffer;
      break;
    case ".":
      buffer += ".";
      screen.innerText = buffer;
      break;
  }
}

function handleNumber(value) {
  // Add more digits after initial value
  if (buffer != 0) {
    buffer += value;
  } else if (buffer == 0 || calculatingState == 2) {
    buffer = value;
  }
}

function handleMath(value1, value2, symbol) {
  console.log(
    `Value 1 = ${value1}\nValue 2 = ${value2}\nOperator is "${symbol}"`
  );
  switch (symbol) {
    case "+":
      return value1 + value2;
      break;
    case "−":
      return value1 - value2;
      break;
    case "×":
      return value1 * value2;
      break;
    case "÷":
      return value1 / value2;
      break;
  }
}

function flushOperation() {
  console.log("Flushed Operation");
  buffer = 0;
  previousOperator = "";
  previousInput = 0;
  runningTotal = 0;
  calculatingState = 0;
  screen.innerText = buffer;
}

function handleCalculation(value) {}
init();
console.log(`Buffer ${buffer}`);
