function getData() {
  const firstNum = parseFloat(document.getElementById("firstNum").value);
  const secondNum = parseFloat(document.getElementById("secondNum").value);
  return { firstNum, secondNum };
}

function handleCalculator(operation) {
  const { firstNum, secondNum } = getData(); // Technique?
  switch (operation) {
    case "plus":
      console.log(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
      return firstNum + secondNum;
      break;
    case "minus":
      return firstNum - secondNum;
      break;
    case "mul":
      return firstNum * secondNum;
      break;
    case "div":
      return firstNum / secondNum;
      break;
    case "sqt":
      console.log("sqt");
      return Math.sqrt(firstNum);
      break;
    case "abs":
      return Math.abs(firstNum);
      break;
    case "ceil":
      return Math.ceil(firstNum);
      break;
  }
}

function renderResult(operation) {
  const result = handleCalculator(operation);
  document.querySelector(".result").placeholder = result;
}

document
  .querySelector(".plus")
  .addEventListener("click", () => renderResult("plus"));
document
  .querySelector(".minus")
  .addEventListener("click", () => renderResult("minus"));
document
  .querySelector(".mul")
  .addEventListener("click", () => renderResult("mul"));
document
  .querySelector(".div")
  .addEventListener("click", () => renderResult("div"));

document.querySelector(".sqt").addEventListener("click", () => {
  renderResult("sqt");
});
document.querySelector(".abs").addEventListener("click", () => {
  renderResult("abs");
});
document.querySelector(".ceil").addEventListener("click", () => {
  renderResult("ceil");
});
