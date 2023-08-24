


const updateButton = document.querySelector('.update-quantity-link');
const option = document.querySelector('.js-checkout-quantity-selector');

option.value = 69;
updateButton.addEventListener("click", () => {
    document.querySelector('.test-result').innerHTML = `result = ${option.value}`;
})

let resultHTML = '';

for (let i = 10; i < 100; i++) {
    let result = `<option value="${i}">${i}</option>\n`
    resultHTML += result;
}

console.log(resultHTML);
document.querySelector('.test-result').innerHTML = `result = ${option.value}`;