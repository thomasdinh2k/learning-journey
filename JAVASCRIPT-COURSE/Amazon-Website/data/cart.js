export const cart = [];

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
}

