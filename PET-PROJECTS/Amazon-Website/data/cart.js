// Make this interactive instead of pseudo data (Instead of making a variable, we will use a JSON file created after user has addToCart and push product to it. After that, we will use localStorage to parse items)

export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
  return cart
}


export function retrieveCartFromStorage() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  return cart
}

export let cart = retrieveCartFromStorage();
console.log(cart);

// Move function addToCart to this file because it is cart related
export function addToCart(productID, productName, productQuantity) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productID === cartItem.productID) {
      matchingItem = cartItem; // Matching item will now have 3 value (id, name, quantity)
    }
  });

  if (matchingItem) {
    // A truthy object (If we find a matchingItem)
    matchingItem.quantity += productQuantity;
  } else {
    cart.push({
      productID: productID,
      productName: productName,
      quantity: productQuantity,
      productShippingFee: 0,
    });
  }
  saveToStorage();

}
export function removeFromCart(productID) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productID !== productID) {
      newCart.push(cartItem);
    }
  })
  cart = newCart;
  saveToStorage();
  const orderSummaryContainer = document.querySelector(".order-summary");
  const itemContainer = document.querySelector(
    `.js-cart-item-container-${productID}`
  );
  itemContainer.remove();
  console.log(`Item Removed Successfully ${productID}`);
}

export function updateCartQuantity(productID, newQuantity) { // Done
  cart.forEach( item => {
    if (productID === item.productID) {
      item.quantity = newQuantity;
      console.log(`Confirm updated new quantity to ${newQuantity}, modified correct property`);
    }
  })
};

