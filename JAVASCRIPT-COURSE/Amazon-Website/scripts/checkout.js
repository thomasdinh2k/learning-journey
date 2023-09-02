import {
  cart,
  addToCart,
  removeFromCart,
  updateCartQuantity,
} from "../data/cart.js";
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
                  <input type="radio" 
                    class="delivery-option-input"
                    name="delivery-option-${id}" value = "0" checked>
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
                  <input type="radio" value="499"
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
                    name="delivery-option-${id}" value = "999">
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

  //TODO: Retrieve Usr's last value for shipping fee

  // var lastShippingSelection = localStorage.getItem(`shipping-fee-${productID}`);
  //   console.log(lastShippingSelection);
  //   var shippingFeeObject = document.getElementsByName(`delivery-option-${productID}`);
  //   console.log(shippingFeeObject);
  //   console.log(shippingFeeObject);
  //   shippingFeeObject.forEach((shippingFeeOption => {
  //     console.log("Shipping Fee Option");
  //     console.log(shippingFeeOption);
  //     if (shippingFeeOption.value === lastShippingSelection) {
  //       shippingFeeOption.checked = true;
  //     }
  //   }))
});

document.querySelector(".order-summary").innerHTML = cartSummaryHTML;

function renderSubtotal(product, quantity, price) {
  let finalPriceObject = document.querySelector(
    `.final-price-${product.productID}`
  );

  let shippingFee = extractShippingFee(product.productID);

  if (quantity === 1) {
    finalPriceObject.innerHTML = `Subtotal (1 item) + delivery: $${formatCurrency(
      price + shippingFee
    )}`;
  } else if (quantity == 0) {
    removeFromCart(product.productID);
  } else {
    console.log(`current price = ${price / 100}`);
    console.log(`current quantity = ${quantity}`);
    console.log(`current shipping fee = ${shippingFee}`);
    finalPriceObject.innerHTML = `Subtotal (${quantity} items) + delivery: $${formatCurrency(
      price * quantity + shippingFee
    )}`;
  }
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

function extractShippingFee(productID) {
  var extractedFee = 0;
  let deliveryOptionObject = document.getElementsByName(
    `delivery-option-${productID}`
  );
  deliveryOptionObject.forEach((item) => {
    if (item.checked === true) {
      extractedFee = item.value;
    }
  });
  extractedFee = parseInt(extractedFee, 10);
  return extractedFee;
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

// Make the Order Summary interactive
function updateOrderSummary() {
  let totalQuantity = 0;
  let totalShippingFee = 0; 
  // Calculate Items
  cart.forEach((item) => {
    totalQuantity += parseInt(item.quantity, 10);
    // totalShippingFee += 
  });
  let Sum = calculateSum();
  console.log(cart.length); // Need to recalculate this

  // TODO: Add Sum for shippingFee and re-calculate the total based on correct shipping value

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
    Sum += itemTotal;
  });
  return Sum;
}

console.log(cart);

cart.forEach((product) => {
  // Update the quantity right after user choose a new option of delivery
  let productID = product.productID;
  let quantitySelectorObject = document.querySelector(
    `.js-checkout-quantity-selector-${product.productID}`
  );

  let shippingFeeOptionObject = document.getElementsByName(
    `delivery-option-${product.productID}`
  );
  product.productPriceCents = extractPrice(product.productID);

  shippingFeeOptionObject.forEach((radioSelector) => {
    radioSelector.addEventListener("change", () => {
      renderSubtotal(product, product.quantity, productPriceCents);
      updateOrderSummary();
    });
  });
  

  renderSubtotal(
    product,
    product.quantity,
    product.productPriceCents
  );
  
  updateOrderSummary();
  
  // Dynamic quantitySelector Enabler
  function handleQuantityChange(productID = productID, newQuantityValue) {
    let finalPriceObject = document.querySelector(`.final-price-${productID}`);
    let extractedShippingFee = extractShippingFee(productID);
    renderSubtotal(
      product,
      newQuantityValue,
      product.priceCents
      
    );
    updateCartQuantity(product.productID, newQuantityValue);
    if (product.quantity > 10) {
      createQuantityBox(quantitySelectorObject, product.quantity, product.productID);
      
      quantitySelectorObject = document.querySelector(
        `.dynamic-input-box-${product.productID}`
      );
      quantitySelectorObject.addEventListener("change", (event) => {
        newQuantityValue = parseInt(event.target.value, 10);
        product.quantity = newQuantityValue;
        console.log(`Current Shipping Fee ${extractShippingFee}`);
        renderSubtotal(product, newQuantityValue, extractedPrice);
      })
    }
    updateOrderSummary();
  }

 
  // Update when user choose the new quantity value
  quantitySelectorObject.addEventListener("change", () => {
    let newQuantityValue = event.target.value;
    handleQuantityChange(productID, newQuantityValue);
  });
});

// Add Event Listener for the "Delete"
// Add event when user choose "0" then it delete the item in cart
document.querySelectorAll(".js-delete-button").forEach((button) => {
  button.addEventListener("click", () => {
    removeFromCart(button.dataset.productId);
    updateOrderSummary();
  });
});