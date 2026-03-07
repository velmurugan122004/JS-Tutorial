import {cart}from '../../data/cart-class.js';
export function renderCheckoutHeader(){
  
  const checkoutHeaderHtml=`<div class="header-content">
        <div class="checkout-header-left-section">
          <a href="amazon.html">
            <img class="amazon-logo" src="images/amazon-logo.png">
            <img class="amazon-mobile-logo" src="images/amazon-mobile-logo.png">
          </a>
        </div>

        <div class="checkout-header-middle-section">
          Checkout (<a class="return-to-home-link js-current-UpdateQuantity"
            href="amazon.html"></a>)
        </div>

        <div class="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png">
        </div>
      </div>`;
      document.querySelector('.js-checkout-header').innerHTML=checkoutHeaderHtml;
}

export function pageUpdateCartQuantity()//HEADER OF CHECKOUT CURRENT UPDATED CART
    { 
      const element = document.querySelector('.js-current-UpdateQuantity');
      if (!element) return;
      const cartQuantity=cart.calculateCartQuantity();
      if(cartQuantity<=1)
      {
        element.innerHTML=`${cartQuantity} Item`;
      }
      else{
        element.innerHTML=`${cartQuantity} Items`;
      }
      
    }