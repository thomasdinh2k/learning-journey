function updateResult(value, containerID) {
    document.getElementById(containerID).innerHTML = value;
}

const product = {
    name: 'iPhone',
    quantity: 2,
};

product.name = 'Android' //Change value in an object
product.newProperty = true;
delete product.newProperty; //Delete a property
console.log(product)
updateResult(product.name, "demo");