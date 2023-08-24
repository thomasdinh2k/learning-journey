import { cart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
let cartSummaryHTML = "";

cart.forEach((product) => {
  //TODO: Find a way to retrieve other attribute (price, image) of item in a object of array products
  // We will use "De-duplicating the data" || "Normalizing the data"

  const productID = product.productID;
  let matchingItem;

  products.forEach((item) => {
    if (productID === item.id) {
      matchingItem = item;
    }
  });

  console.log(matchingItem);

  cartSummaryHTML += `<div class="cart-item-container js-cart-item-container-${
    matchingItem.id
  }">
            <div class="delivery-date">
              Delivery date: Tuesday, June 23th
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingItem.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingItem.name}
                </div>
                <div class="product-price">
                  $${formatCurrency(matchingItem.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${
                      product.quantity
                    }</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                  Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-button" data-product-id="${matchingItem.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${matchingItem.id}">
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
                    name="delivery-option-${matchingItem.id}">
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
                    name="delivery-option-${matchingItem.id}">
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
});

document.querySelector(".order-summary").innerHTML = cartSummaryHTML;

// Add Event Listener for the "Delete" and "Update" buttons

document.querySelectorAll(".js-delete-button").forEach((button) => {
  button.addEventListener("click", () => {
    const orderSummaryContainer = document.querySelector('.order-summary') ;
    const productID = button.dataset.productId;
    console.log(button.dataset);
    
    const itemContainer = document.querySelector(`.js-cart-item-container-${productID}`)
    // itemContainer.innerHTML = "";
    itemContainer.remove();
  });
});
