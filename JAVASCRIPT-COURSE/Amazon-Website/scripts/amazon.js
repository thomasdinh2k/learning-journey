import { products } from "../data/products.js";
import { cart, addToCart, saveToStorage } from "../data/cart.js";
import { formatCurrency } from "./utils/money.js";
let productsHTML = "";

// Loop to create products to the page
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
        $${formatCurrency(products.priceCents)}
    </div>

    <div class="product-quantity-container">
      <select class="js-quantity-selector-${products.id}">
        <option value="1" selected>1</option>
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

    <div class="added-to-cart js-selector-${products.id}">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${
      products.id
    }" data-product-name="${products.name}"
    
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
  console.log(`Updated quantity = ${quantity} `);
  document.querySelector(".cart-quantity").innerHTML = cart.length;
}

updateQuantity();


function addedToCartNotification(productID) {
  let addedToCartObject = document.querySelector(
    `.added-to-cart.js-selector-${productID}`
  );
  let timeoutID;
  clearTimeout(timeoutID);
  // Dismiss notifications after 2 seconds
  if (
    addedToCartObject.style.opacity == "" ||
    addedToCartObject.style.opacity == "0"
  ) {
    clearTimeout(timeoutID);
    addedToCartObject.style.opacity = "1";
    timeoutID = setTimeout(() => {
      addedToCartObject.style.opacity = "0";
    }, 1000);
  }
}

// Add Event Listener for the "Add to Cart button"
document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    // console.log(button.dataset);
    const productID = button.dataset.productId;
    const productName = button.dataset.productName;
    const productQuantity = parseInt(
      document.querySelector(`.js-quantity-selector-${productID}`).value
    );
    addToCart(productID, productName, productQuantity);
    updateQuantity();
    // Added-to-cart notification
    addedToCartNotification(productID);
    // Save cart to storage
    saveToStorage();
  });
});

