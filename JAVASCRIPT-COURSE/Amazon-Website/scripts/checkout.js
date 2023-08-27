import { cart, addToCart, removeFromCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
let cartSummaryHTML = "";

function renderHTML(image, name, price, id) {
  cartSummaryHTML += `<div class="cart-item-container js-cart-item-container-${id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 23th
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${name}
                </div>
                <div class="product-price">
                  $${price}
                </div>
                <div class="product-quantity-${id}">
                <select class="js-quantity-selector js-checkout-quantity-selector-${id}">
                  <option value="0">0 (Delete)</option>
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
                  <option value="11">10+</option>
                  
            </select>
                  <span class="delete-quantity-link link-primary js-delete-button" data-product-id="${id}">
                    Delete
                  </span>
                </div>
                <div class="final-price final-price-${id}"></div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;

  return cartSummaryHTML;
}
let matchingItem;

cart.forEach((product) => {
  //TODO: Find a way to retrieve other attribute (price, image) of item in a object of array products
  // We will use "De-duplicating the data" || "Normalizing the data"

  const productID = product.productID;

  products.forEach((item) => {
    if (productID === item.id) {
      matchingItem = item;
    }
  });

  console.log(matchingItem);

  renderHTML(
    matchingItem.image,
    matchingItem.name,
    formatCurrency(matchingItem.priceCents),
    matchingItem.id
  );
  return matchingItem;
});

document.querySelector(".order-summary").innerHTML = cartSummaryHTML;

function renderQuantityAndPrice(product, quantity, price) {
  let finalPriceObject = document.querySelector(
    `.final-price-${product.productID}`
  );
  let newQuantityValue = quantity;

  if (quantity === 1) {
    finalPriceObject.innerHTML = `Subtotal (1 item): $${formatCurrency(price)}`;
  } else if (quantity == 0) {
    removeFromCart(product.productID);
  } else
    finalPriceObject.innerHTML = `Subtotal (${quantity} items): $${formatCurrency(
      price * quantity
    )}`;
}



function createQuantityBox(previousSelector, currentQuantity, productId) {
  const parent = previousSelector.parentNode;
  const inputBox = document.createElement("input");
  inputBox.type = "number";
  inputBox.value = currentQuantity;
  parent.replaceChild(inputBox, previousSelector);
  inputBox.classList.add("dynamic-input");
  inputBox.classList.add(`dynamic-input-box-${productId}`);
  console.log("inputBox returned as parameter");

  return inputBox;
}
cart.forEach((product) => {
  // Update the quantity right after user choose a new option
  let quantitySelectorObject = document.querySelector(
    `.js-checkout-quantity-selector-${product.productID}`
  );

  quantitySelectorObject.value = product.quantity;
  renderQuantityAndPrice(product, product.quantity, product.priceCents);

  // Dynamic quantitySelector Enabler
  if (product.quantity > 10) {
    createQuantityBox(
      quantitySelectorObject,
      product.quantity,
      product.productID
    );
    quantitySelectorObject = document.querySelector(
      `.dynamic-input-box-${product.productID}`
    );
    let productQuantityObject = document.querySelector(`.product-quantity-${product.productID}`)
    
  }

  quantitySelectorObject.addEventListener("change", () => {
    let newQuantityValue = event.target.value;

    let finalPriceObject = document.querySelector(
      `.final-price-${product.productID}`
    );
    renderQuantityAndPrice(product, newQuantityValue, product.priceCents);
  });
});

// Add Event Listener for the "Delete"
// TODO: Add event when user choose "0" then it delete the item in cart
document.querySelectorAll(".js-delete-button").forEach((button) => {
  button.addEventListener("click", () => {
    // console.log(button.dataset.productId);
    removeFromCart(button.dataset.productId);
  });
});

// TODO: Update button allow selected quantity stored into quantity of the product in Cart
console.log(cart);

console.log(cart[0].quantity);

cart[0].quantity = 3;
console.log(cart);

// TODO: Make the Order Summary interactive
