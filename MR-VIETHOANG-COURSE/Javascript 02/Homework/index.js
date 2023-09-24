// Sum to 100

function sumTo100() {
  let result = 0;
  for (let i = 1; i <= 100; i++) {
    result += i;
  }
  return result;
}

const sumTo100Arrow = () => {
  let result = 0;
  for (let i = 1; i <= 100; i++) {
    result += i;
  }
  return result;
};

console.log(sumTo100());
console.log(sumTo100Arrow());

// Sum Odd Even up to 50
const sumOddEven = () => {
  let sumOdd = 0;
  let sumEven = 0;
  for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
      sumEven += i;
    } else {
      sumOdd += i;
    }
  }
  console.log(`Some Even = ${sumEven}`);
  console.log(`Some Odd = ${sumOdd}`);
  return sumOdd + sumEven;
};

console.log(sumOddEven());

// Sum Prompt AB
const sumPrompt = () => {
  const val1 = prompt("Enter value for A: ");
  const val2 = prompt("Enter value for B: ");
  if (val1 < val2) {
    let a = val1;
    let b = val2;
  } else {
    let b = val1;
    let a = val2;
  }
  console.log(`A = ${a}\nB = ${b}`);
};
