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
  console.log(cart);
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

function renderSubtotal(product, productID) {
  console.log(productID);
  let finalPriceObject = document.querySelector(`.final-price-${productID}`);
  let currentPrice = product.productPriceCents;
  let currentQuantity = product.quantity;
  let currentShippingFee = product.productShippingFee;

  if (currentQuantity == 1) {
    finalPriceObject.innerHTML = `Subtotal (1 item) + delivery: $${formatCurrency(
      currentPrice + currentShippingFee
    )}`;
  } else if (currentQuantity == 0) {
    removeFromCart(productID);
  } else {
    finalPriceObject.innerHTML = `Subtotal (${currentQuantity} items) + delivery: $${formatCurrency(
      currentPrice * currentQuantity + currentShippingFee
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
  var extractedShippingFee = 0;
  let deliveryOptionObject = document.getElementsByName(
    `delivery-option-${productID}`
  );
  deliveryOptionObject.forEach((item) => {
    if (item.checked === true) {
      extractedShippingFee = item.value;
    }
  });
  extractedShippingFee = parseInt(extractedShippingFee, 10);
  return extractedShippingFee;
}


//TODO:  Hiện tại đang gặp vấn đề với createQuantityBox + handleQuantityChange không hoạt động với EventListener

function createQuantityBox(previousSelector, currentQuantity, productId) {
  const parent = previousSelector.parentNode;
  const inputBox = document.createElement("input");
  inputBox.type = "number";
  inputBox.value = currentQuantity;
  inputBox.classList.add("dynamic-input");
  inputBox.classList.add(`dynamic-input-box-${productId}`);
  parent.replaceChild(inputBox, previousSelector);
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

// Dynamic quantitySelector Enabler
function handleQuantityChange(product, productID, newQuantityValue) {
  updateCartQuantity(productID, newQuantityValue);
  if (product.quantity > 10) {
    // let quantitySelectorObject = document.querySelector(
    //   `.dynamic-input-box-${productID}`
    // );
    let quantitySelectorObject = document.querySelector(`.js-checkout-quantity-selector-${productID}`);
    let dynamicQuantitySelectorObject = document.querySelector(`dynamic-input-box-${productID}`);
    if (quantitySelectorObject) {
      createQuantityBox(quantitySelectorObject, product.quantity, productID);
    } else {
      createQuantityBox(dynamicQuantitySelectorObject, product.quantity, productID);
    }
  }
  renderSubtotal(product, productID);
}

cart.forEach((product) => {
  let productID = product.productID;
  let quantitySelectorObject = document.querySelector(
    `.js-checkout-quantity-selector-${productID}`
  );
  let shippingFeeOptionObject = document.getElementsByName(
    `delivery-option-${product.productID}`
  );

  if (product.quantity < 10) {
    document.querySelector(
      `.js-checkout-quantity-selector-${productID}`
    ).value = product.quantity;
  } else if (product.quantity >= 10) {
    createQuantityBox(quantitySelectorObject, product.quantity, productID);
  }

  // Update the quantity right after user choose a new option of delivery

  // Binding properties to item arrays
  handleQuantityChange(product, productID, product.quantity);
  product.productPriceCents = extractPrice(product.productID);
  product.productShippingFee = extractShippingFee(product.productID);

  shippingFeeOptionObject.forEach((radioSelector) => {
    radioSelector.addEventListener("change", (event) => {
      product.productShippingFee = parseInt(event.target.value, 10);
      console.log(cart);
      renderSubtotal(product, productID);
    });
  });

  renderSubtotal(product, productID);

  updateOrderSummary();

  // Update when user choose the new quantity value
  if (quantitySelectorObject) {
  quantitySelectorObject.addEventListener("change", (event) => {
    let newQuantityValue = event.target.value;
    handleQuantityChange(product, productID, newQuantityValue);
  });
}
  // Change the class to Dynamic ones
  if (!quantitySelectorObject) {
    let dynamicQuantitySelectorObject = document.querySelector(`dynamic-input-box-${productID}`);
    dynamicQuantitySelectorObject.addEventListener("change", (event) => {
      let newQuantityValue = event.target.value;
      handleQuantityChange(product, productID, newQuantityValue);
    })
  }
});

// Add Event Listener for the "Delete"
// Add event when user choose "0" then it delete the item in cart
document.querySelectorAll(".js-delete-button").forEach((button) => {
  button.addEventListener("click", () => {
    removeFromCart(button.dataset.productId);
    updateOrderSummary();
  });
});
