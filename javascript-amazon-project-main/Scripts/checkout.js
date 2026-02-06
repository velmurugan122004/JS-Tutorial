import {cart,removeProduct,calculateCartQuantity,updateCartQuantity} from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utills/money.js';

let cartSummary='';
pageUpdateCartQuantity();
function pageUpdateCartQuantity()
{
  const cartQuantity=calculateCartQuantity();
  if(cartQuantity===1 || cartQuantity===0)
  {
    document.querySelector('.js-current-UpdateQuantity').innerHTML=`${cartQuantity} Item`;
  }
  else{
    document.querySelector('.js-current-UpdateQuantity').innerHTML=`${cartQuantity} Items`;
  }
}
cart.forEach((cartItem)=>{
    const productId=cartItem.productId;

    let matchingProduct;

    products.forEach((product)=>{
        if(product.id===productId){
          matchingProduct=product;
        }
    }); console.log(matchingProduct);
    console.log(cartItem.quantity);
    
    cartSummary+=`
      <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${formatCurrency(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary js-update-cart" data-product-id="${matchingProduct.id}">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-cart" data-product-id="${matchingProduct.id}">
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
                    name="${matchingProduct.id}">
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
                    name="${matchingProduct.id}">
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
                    name="${matchingProduct.id}">
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
          </div>
    ` ;
    
});
//console.log(cartSummary);
document.querySelector('.js-order-summary').innerHTML=cartSummary;

document.querySelectorAll('.js-delete-cart').forEach((link)=>{
    link.addEventListener('click',()=>{
        const productId=link.dataset.productId;
        console.log(productId);
        removeProduct(productId) ;
        console.log(cart);
        const container=document.querySelector(`.js-cart-item-container-${productId}`);
        container.remove();
        pageUpdateCartQuantity();
    });
});
document.querySelectorAll('.js-update-cart').forEach((linkItem)=>{
  linkItem.addEventListener('click',()=>{
      //console.log("updated ");
      const productId=linkItem.dataset.productId;
      //console.log(productId);
      const container = document.querySelector(
      `.js-cart-item-container-${productId}`
      );

      container.classList.add('is-editing');
      //console.log(container);
      const quantityLabel = container.querySelector('.quantity-label');
    
      //console.log(quantityLabel);
      const currentQuantity = quantityLabel.innerText;
      //console.log(currentQuantity);
      quantityLabel.innerHTML = `
        <input type="number" 
          class="js-quantity-input"
          value="${currentQuantity}" 
          min="1" max="10">
        <button class="js-save-button">Save</button>
      `;
    document.querySelector('.js-save-button').addEventListener('click',()=>{
        const newQuantity = container.querySelector('.js-quantity-input').value;
        
        console.log(newQuantity);
        updateCartQuantity(newQuantity,productId)
        quantityLabel.innerHTML=newQuantity;

        pageUpdateCartQuantity();
    });
  })
});
