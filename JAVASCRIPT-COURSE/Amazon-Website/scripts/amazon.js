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
        ${(products.rating.count).toLocaleString()}
      </div>
    </div>

    <div class="product-price">
        $${(products.priceCents / 100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select>
        <option selected value="1">1</option>
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

    <button class="add-to-cart-button button-primary js-add-to-cart" data-product-name="${products.name}">
      Add to Cart
    </button>
  </div>`;
});

document.querySelector(".js-products-grid").innerHTML = productsHTML;

// Add Event Listener for the "Add to Cart button"
document.querySelectorAll(".js-add-to-cart").forEach( (button) => {
    button.addEventListener("click", () => {
        const productName = button.dataset.productName;
        // Check if product is already in the cart (Combine Quantity Together)
        let matchingItem;
        cart.forEach( (item) => {
            if(productName === item.productName) {
                matchingItem = item; // Matching item will now have 2 value (name, quantity)
            }
        });
        
        if (matchingItem) // A truthy object (If we find a matchingItem)
        {
            matchingItem.quantity += 1
        } else {     
        cart.push({
            productName: productName,
            quantity: 1
        })};
    console.log(cart);
    })
});
