import {
  cart,
  addToCart,
  removeFromCart,
  updateCartQuantity,
  saveToStorage
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
});

document.querySelector(".order-summary").innerHTML = cartSummaryHTML;

function renderSubtotal(product, productID) {
  let finalPriceObject = document.querySelector(`.final-price-${productID}`);
  let currentPrice = product.productPriceCents;
  let currentQuantity = product.quantity;
  let currentShippingFee = product.productShippingFee;
  let NumOfItem = document.querySelector(`.return-to-home-link`).innerHTML;
  if (currentQuantity == 1) {
    finalPriceObject.innerHTML = `Subtotal (1 item) + delivery: $${formatCurrency(
      currentPrice + currentShippingFee
    )}`;
    NumOfItem = "1 item";
  } else if (currentQuantity == 0) {
    removeFromCart(productID);
    NumOfItem = "Zero item";
  } else {
    finalPriceObject.innerHTML = `Subtotal (${currentQuantity} items) + delivery: $${formatCurrency(
      currentPrice * currentQuantity + currentShippingFee
    )}`;
  }
  updateOrderSummary();
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
  // let deliveryOptionObject = document.getElementsByName(
  //   `delivery-option-${productID}`
  // );
  // deliveryOptionObject.forEach((item) => {
  //   if (item.checked === true) {
  //     extractedShippingFee = item.value;
  //   }
  // });
  // extractedShippingFee = parseInt(extractedShippingFee, 10);
  return extractedShippingFee;
}
// Create inputBox which also attach an EventListener to it
function createQuantityBox(currentProduct, previousSelector, currentQuantity) {
  const parent = previousSelector.parentNode;
  const inputBox = document.createElement("input");
  inputBox.type = "number";
  inputBox.value = currentQuantity;
  inputBox.classList.add("dynamic-input");
  inputBox.classList.add(`dynamic-input-box-${currentProduct.productID}`);
  // Add Event Listener
  inputBox.addEventListener("change", (event) => {
    let newQuantityValue = event.target.value;
    handleQuantityChange(
      currentProduct,
      currentProduct.productID,
      newQuantityValue
    );
  });
  parent.replaceChild(inputBox, previousSelector);
  return inputBox;
}

function createQuantityBoxTest(product, currentQuantity = 0) {
  const currentSelectorHolder = document.querySelector(
    `.product-quantity-${product.productID}`
  );
  if (currentQuantity >= 10) {
    currentSelectorHolder.innerHTML = `<input type="number" class="dynamic-input dynamic-input-box-${product.productID}" name="quantity" min="0" value="${currentQuantity}"><span class="delete-quantity-link link-primary js-delete-button-${product.productID}" >
                    Delete
                  </span>`;
    // Handle when user change the value
    const currentSelectorObject = document.querySelector(
      `.dynamic-input-box-${product.productID}`
    );
    currentSelectorObject.addEventListener("change", (event) => {
      handleQuantityChange(product, product.productID, event.target.value);
    });

    // Handle when user try to delete the value
    const deleteValueObject = document.querySelector(
      `.js-delete-button-${product.productID}`
    );
    deleteValueObject.addEventListener("click", (event) => {
      removeFromCart(product.productID); // Move the removal logic here
      updateOrderSummary();
    });
  } else {
    var currentSelectorObject = document.querySelector(
      `.js-checkout-quantity-selector-${product.productID}`
    );
    currentSelectorObject.value = product.quantity;
    currentSelectorObject.addEventListener("change", (event) => {
      if (event.target.value < 11) {
        handleQuantityChange(product, product.productID, event.target.value);
      } else {
        handleQuantityChange(product, product.productID, event.target.value);
        createQuantityBoxTest(product, event.target.value);
      }
    });
  }
}
// Make the Order Summary interactive
function updateOrderSummary() {
  let totalQuantity = 0;
  let totalShippingFee = 0;
  let NumOfItem = document.querySelector(`.return-to-home-link`);
  // Calculate Items
  cart.forEach((item) => {
    totalQuantity += parseInt(item.quantity, 10);
    totalShippingFee += parseInt(item.productShippingFee, 10);
  });
  let GrandTotal = calculateSum();
  GrandTotal += totalShippingFee;
  const summaryRowHolder = document.querySelector(".payment-summary-row div");
  if (cart.length > 1) {
    summaryRowHolder.innerHTML = `Items (${cart.length}):`;
    NumOfItem.innerHTML = `${cart.length} items`;
  } else if (cart.length == 1) {
    summaryRowHolder.innerHTML = `Item (1):`;
    NumOfItem.innerHTML = `${cart.length} item`;
  } else {
    summaryRowHolder.innerHTML = `No item in cart`;
    NumOfItem.innerHTML = `No item`;
  }
  const itemPriceHolder = document.querySelector(
    ".payment-summary-money.item-price"
  );
  itemPriceHolder.innerHTML = `$${formatCurrency(GrandTotal)}`;
  const shippingFeeHolder = document.querySelector(".shippingFee");
  shippingFeeHolder.innerHTML = `$${formatCurrency(totalShippingFee)}`;
  const totalBeforeTaxHolder = document.querySelector(
    ".payment-summary-row.subtotal-row .payment-summary-money"
  );
  totalBeforeTaxHolder.innerHTML = `$${formatCurrency(GrandTotal)}`;
  const taxHolder = document.querySelector(".payment-summary-money.tax");
  let tax = GrandTotal / 100;
  taxHolder.innerHTML = `$${formatCurrency(tax)}`;
  const grandTotalHolder = document.querySelector(".grand-total");
  grandTotalHolder.innerHTML = `$${formatCurrency(GrandTotal + tax)}`;
  const grandTotalVNDHolder = document.querySelector(
    ".grand-total-vietnamdong"
  );
  grandTotalVNDHolder.innerHTML = `<span>🇻🇳  </span> ${(
    ((GrandTotal + tax) * 24406) /
    100
  ).toLocaleString("vi-VN", { style: "currency", currency: "VND" })} `;
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
  renderSubtotal(product, productID);
  saveToStorage();
}

// Test putting shippingFeeObject outside
// Parsing JSON DATA
let shippingFeeObject;
try {
  shippingFeeObject = JSON.parse(localStorage.getItem("shippingFeeObject"));
} catch (error) {
  console.log(error);
  let shippingFeeObject;
}
console.log("Get shippingFeeObject from JSON successfully!");
console.log(shippingFeeObject);

cart.forEach((product) => {
  let productID = product.productID;
  let quantitySelectorObject = document.querySelector(
    `.js-checkout-quantity-selector-${productID}`
  );
  let shippingFeeOptionObject = document.getElementsByName(
    `delivery-option-${product.productID}`
  );
  createQuantityBoxTest(product, product.quantity);

  // Binding properties to item arrays
  handleQuantityChange(product, productID, product.quantity);
  product.productPriceCents = extractPrice(product.productID);
  product.productShippingFee = extractShippingFee(product.productID);

  shippingFeeOptionObject.forEach((radioSelector) => {
    radioSelector.addEventListener("change", (event) => {
      product.productShippingFee = parseInt(event.target.value, 10);
      // Add key-value pair to shippingObject
      shippingFeeObject[productID] = product.productShippingFee;
      renderSubtotal(product, productID);
      console.log(shippingFeeObject);
      localStorage.setItem('shippingFeeObject', JSON.stringify(shippingFeeObject));
    });
  });
  renderSubtotal(product, productID);
  updateOrderSummary();
});

// Add Event Listener for the "Delete"
// Add event when user choose "0" then it delete the item in cart
document.querySelectorAll(".js-delete-button").forEach((button) => {
  button.addEventListener("click", () => {
    removeFromCart(button.dataset.productId);
    updateOrderSummary();
  });
});
// Save changes to cart globally
saveToStorage();