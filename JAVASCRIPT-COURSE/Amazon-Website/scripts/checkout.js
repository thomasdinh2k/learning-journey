import { cart, addToCart, removeFromCart, updateCartQuantity } from "../data/cart.js";
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
  // We will use "De-duplicating the data" || "Normalizing the data"

  const productID = product.productID;

  products.forEach((item) => {
    if (productID === item.id) {
      matchingItem = item;
    }
  });

  // Render items to web's placeholder
  renderHTML(
    matchingItem.image,
    matchingItem.name,
    formatCurrency(matchingItem.priceCents),
    matchingItem.id
  );
  // return matchingItem;
});

document.querySelector(".order-summary").innerHTML = cartSummaryHTML;

function renderSubtotal(product, quantity, price, deliveryOption) {
  let finalPriceObject = document.querySelector(
    `.final-price-${product.productID}`
  );
  let newQuantityValue = quantity;

  if (quantity === 1) {
    finalPriceObject.innerHTML = `Subtotal (1 item) + delivery: $${formatCurrency(price)}`;
  } else if (quantity == 0) {
    removeFromCart(product.productID);
  } else
    finalPriceObject.innerHTML = `Subtotal (${quantity} items) + delivery: $${formatCurrency(
      price * quantity
    )}`;
}

function extractPrice(productID) {
  let extractedPrice;
  products.forEach((productInProductJS) => {
    if (productID === productInProductJS.id) {
      extractedPrice = productInProductJS.priceCents;
    }
  });
  return extractedPrice;
}

function createQuantityBox(previousSelector, currentQuantity, productId) {
  const parent = previousSelector.parentNode;
  const inputBox = document.createElement("input");
  inputBox.type = "number";
  inputBox.value = currentQuantity;
  parent.replaceChild(inputBox, previousSelector);
  inputBox.classList.add("dynamic-input");
  inputBox.classList.add(`dynamic-input-box-${productId}`);
  return inputBox;
}

cart.forEach((product) => {
  // Update the quantity right after user choose a new option
  let quantitySelectorObject = document.querySelector(
    `.js-checkout-quantity-selector-${product.productID}`
  );
  // Pull out the price value
  let extractedPrice = extractPrice(product.productID);
  quantitySelectorObject.value = product.quantity;
  renderSubtotal(product, product.quantity, extractedPrice);
  updateOrderSummary();

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
    let productQuantityObject = document.querySelector(
      `.product-quantity-${product.productID}`
    );
  }

  quantitySelectorObject.addEventListener("change", () => {
    let newQuantityValue = event.target.value;

    let finalPriceObject = document.querySelector(
      `.final-price-${product.productID}`
    );
    renderSubtotal(product, newQuantityValue, extractedPrice);
    updateCartQuantity(product.productID, newQuantityValue)
    updateOrderSummary();
  });
});

// Add Event Listener for the "Delete"
// TODO: Add event when user choose "0" then it delete the item in cart
document.querySelectorAll(".js-delete-button").forEach((button) => {
  button.addEventListener("click", () => {
    removeFromCart(button.dataset.productId);
    updateOrderSummary();
  });
});

// Make the Order Summary interactive
function updateOrderSummary() {
  let totalQuantity = 0;
  // Calculate Items
  cart.forEach( item => {
    totalQuantity += item.quantity;
  })
  let Sum = calculateSum();
  console.log(cart.length); // Need to recalculate this


  const summaryRowHolder = document.querySelector(".payment-summary-row div");
  if (totalQuantity > 1) {
    summaryRowHolder.innerHTML = `Items (${totalQuantity}):`;
  } else if (totalQuantity == 1) {
    summaryRowHolder.innerHTML = `Item (1):`;
  } else {
    summaryRowHolder.innerHTML = `Item (0):`;
  }

  const itemPriceHolder = document.querySelector(
    ".payment-summary-money.item-price"
  );
  itemPriceHolder.innerHTML = `$${formatCurrency(Sum)}`;

  const totalBeforeTaxHolder = document.querySelector(
    ".payment-summary-row.subtotal-row .payment-summary-money"
  );
  totalBeforeTaxHolder.innerHTML = `$${formatCurrency(Sum)}`;

  const taxHolder = document.querySelector(".payment-summary-money.tax");
  let tax = Sum / 100; 
  console.log(tax);
  taxHolder.innerHTML = `$${formatCurrency(tax)}`;

  const grandTotalHolder = document.querySelector(".grand-total");
  grandTotalHolder.innerHTML = `$${formatCurrency(Sum + tax)}`;
}

function calculateSum() {
  let Sum = 0;
  cart.forEach((item) => {
    let itemQuantity = item.quantity;
    let itemPrice = extractPrice(item.productID);
    let itemTotal = itemQuantity * itemPrice;
    console.log(
      `Calculating this product ${
        item.productName
      } with quantity of ${itemQuantity}\nHence total will be ${itemPrice} which is formatted to $${formatCurrency(
        itemTotal
      )}`
    );
    Sum += itemTotal;
  });
  return Sum;
}

updateOrderSummary();