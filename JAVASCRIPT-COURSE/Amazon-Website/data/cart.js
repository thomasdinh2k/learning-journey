// TODO: Make this interactive instead of pseudo data (Instead of making a variable, we will use a JSON file created after user has addToCart and push product to it. After that, we will call a function to load this file)

export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [
    {
      productName: "Apple MagSafe Charger - Wireless Charger with Fast Charging Capability, Type C Wall Charger, Compatible with iPhone and AirPods",
      productID: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6231",
      quantity: 1,
      priceCents: 3299
    },
    {
      productID: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6232",
      quantity: 7,
      productName:"SAMSUNG Galaxy Watch 5 Pro 45mm Bluetooth Smartwatch w/ Body, Health, Fitness and Sleep Tracker, Improved Battery, Sapphire Crystal Glass, GPS Route Tracking, Titanium Frame, US Version, Black",
      priceCents: 37999
    },
  ];
}

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}



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
    // console.log("Matching Item");
  } else {
    cart.push({
      productID: productID,
      productName: productName,
      quantity: productQuantity,
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
}