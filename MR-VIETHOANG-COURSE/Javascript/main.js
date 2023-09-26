// Object

var product = {
  id: "0101",
  name: "iPhone 14 Pro",
  price: "21.500.000vnd",
};

// Query method
console.log(product);
// Add a property
product["quantity"] = 30;
console.log(product);

// Arrow Function
function sum(a, b) {
  return a, b;
}

const tinhTong = (a, b) => {
  return a + b;
};

const tinhHieu = (a, b) => a - b;

console.log(tinhTong(5, 10));
console.log(tinhHieu(50, 10));

// String Template
const menu = "<ul><li>home</li><ul>";

const sum_2 = (a, b) => a + b;
console.log(sum_2(1, 2));

// map, filter, reduce

var course = ["Javascript", "Node", "ReactJS"];

const new_course = course.map((item) => `<li>${item}</li>`);

const new_course_2 = course.map((item) => {
  return `<li>${item}</li>`;
});

console.log(new_course);
console.log(new_course_2);

// reduce()
var cart = [
  { id: "a1", name: "iPhone 14 Pro", price: 100 },
  { id: "a2", name: "dPhone", price: 600 },
  { id: "a3", name: "CPhone", price: 500 },
  { id: "a4", name: "bPhone", price: 400 },
];
// filter()
const filtered_cart = cart.filter( (item) => item.name != "bPhone");
console.log(filtered_cart)

const totalAll = cart.reduce((total, item) => total + item.price, 0);
console.log(totalAll);
