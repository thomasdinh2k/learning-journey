import { products } from "../data/products.js";
import { cart } from "../data/cart.js";
let productsHTML = "";

products.forEach((products) => {
  // Template String
  productsHTML += `<div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${products.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${products.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${products.rating.stars * 10}.png">
      <div class="product-rating-count link-primary">
        ${products.rating.count.toLocaleString()}
      </div>
    </div>

    <div class="product-price">
        $${(products.priceCents / 100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select class="js-quantity-selector-${products.id}">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${products.id}" data-product-name="${products.name}"
    
    ">
      Add to Cart
    </button>
  </div>`;
});

document.querySelector(".js-products-grid").innerHTML = productsHTML;

// Calculate + Update total quantity
function updateQuantity() {
  let quantity = 0;
  cart.forEach((cartItem) => {
    quantity += cartItem.quantity;
  });
  console.log(`Total quantity = ${quantity} `);
  document.querySelector(".cart-quantity").innerHTML = quantity;
}

// Add Event Listener for the "Add to Cart button"
document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.dataset);
    const productID = button.dataset.productId;
    const productName = button.dataset.productName;
    console.log(productID);
    console.log(productName);

    // Take out quantity in each product selection
    const productQuantity = parseInt(document.querySelector(`.js-quantity-selector-${productID}`).value);

    // Check if product is already in the cart (Combine Quantity Together)
    let matchingItem;
    cart.forEach((item) => {
      if (productID === item.productID) {
        matchingItem = item; // Matching item will now have 3 value (id, name, quantity)
      }
    });
    
    if (matchingItem) {
      // A truthy object (If we find a matchingItem)
      matchingItem.quantity += productQuantity;
      console.log("Matching Item");
    } else {
      cart.push({
        productID: productID,
        productName: productName,
        quantity: productQuantity,
      });
    }
    updateQuantity();
  });
  

});


