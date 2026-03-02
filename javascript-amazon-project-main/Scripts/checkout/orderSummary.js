import {cart,removeProduct,calculateCartQuantity,updateCartQuantity,UpdateDeliveryOption,saveStorage} from '../../data/cart.js';
import { products ,getProduct} from '../../data/products.js';

import { formatCurrency } from '../utills/money.js';



import { deliveryOption, userDeliveryOptionPrice,getDeliveryOption,CalculateDeliveryDate } from '../../data/deliveryOption.js';

import { renderPaymentSummary } from './paymentSummary.js';

import { pageUpdateCartQuantity } from './checkoutHeader.js';

export function orderSummary()
{ 
        
    pageUpdateCartQuantity();//HEADER OF CHECKOUT CURRENT UPDATED CART

    

    //CART DETAILS

    let cartSummary='';
    cart.forEach((cartItem)=>{
        const productId=cartItem.productId;

        const matchingProduct=getProduct(productId);

         //console.log(matchingProduct);
        //console.log(cartItem.quantity);

        const deliveryOptionId=cartItem.deliveryOptionId;

        const deliveryOptions=getDeliveryOption(deliveryOptionId);

        
        const dateString=CalculateDeliveryDate(deliveryOptions);//get delivery date based on user select delivery option 
        cartSummary+=`
          <div class="cart-item-container js-cart-item-container js-cart-item-container-${matchingProduct.id}">
                <div class="delivery-date">
                  Delivery date:${dateString} <!--UPDATED USER SELECT DELIVERY OPTION -->
                </div>

                <div class="cart-item-details-grid">
                  <img class="product-image"
                    src="${matchingProduct.image}"> <!--GET PRODUCT IMAGE USING matchingProduct -->

                  <div class="cart-item-details">
                    <div class="product-name">
                      ${matchingProduct.name}
                    </div>  <!--GET PRODUCT NAME USING matchingProduct -->

                    <div class="product-price">
                      ${matchingProduct.getPrice()}
                    </div>  <!--GET PRODUCT PRICE USING matchingProduct -->

                    <div class="product-quantity">
                      <span>
                        Quantity: <span class="quantity-label">${cartItem.quantity}</span>  <!--GET CART PRODUCT QUANTITY USING cartItem.quantity -->
                      </span>

                      <span class="update-quantity-link link-primary js-update-cart js-update-cart-${matchingProduct.id}" data-product-id="${matchingProduct.id}">
                        Update
                      </span> <!--UPDATE CART QUANTITY IN CHECKOUT PAGE AND CART.JS-->


                      <span class="delete-quantity-link link-primary js-delete-cart" data-product-id="${matchingProduct.id}">
                        Delete
                      </span> <!--DELETE CART QUANTITY  IN CHECKOUT PAGE AND CART.JS-->

                    </div>
                  </div>

                  <div class="delivery-options">
                    <div class="delivery-options-title">
                      Choose a delivery option:
                    </div>
                    ${deliveryOptionHtml(matchingProduct,cartItem)}
                  </div>  <!--CALL deliveryOptionHtml() TO GET USER CHOOSE DELIVERY OPTION-->
                </div>
              </div>
        ` ;
        
    });

    //DELIVERY OPTION HTML PAGE AND USER SELECT DELIVERY OPTION
    function deliveryOptionHtml(matchingProduct,cartItem)
    {
      let deliveryHtml='';//EMPTY HTML CREATE 
      deliveryOption.forEach((deliveryOption)=>{

          
          const dateString=CalculateDeliveryDate(deliveryOption);

          const PriceString=deliveryOption.priceCents===0?'FREE':`$${formatCurrency(deliveryOption.priceCents)} `;//GET DELIVERY OPTION PRICE UPDATE DELIVERY OPTION IN CHECKOUT PAGE 

          const isChecked=deliveryOption.id===cartItem.deliveryOptionId;//GIVE TRUE /FALSE BASED ON DELIVERYOPTIONLIST AND USER SELECT DELIVERY OPTION
          //console.log(isChecked);
          //console.log(deliveryOption.id);
          //console.log(cartItem.deliveryOptionId);

          //LINE-137 RADIO BUTTON 
          //LINE-138 USER SELECT RADIO BUTTON IF USER NOT SELECT EMPTY
          deliveryHtml+=`
            <div class="delivery-option js-delivery-option" data-product-id="${matchingProduct.id}"
            data-delivery-option-id="${deliveryOption.id}">
                    <input type="radio"
                    ${isChecked?'checked':''}
                      class="delivery-option-input"
                      name="${matchingProduct.id}">

                    <div>
                      <div class="delivery-option-date">
                        ${dateString}
                      </div>  <!--UPDATE DELIVERY OPTION DATE IN OPTON PAGE-->
                      <div class="delivery-option-price">
                        ${PriceString} - Shipping
                      </div>
                    </div>  <!--UPDATE DELIVERY OPTION PRICE IN OPTION PAGE-->
            </div>
          `;
      });
      return deliveryHtml;
    }
        //console.log(cartSummary);

    //UPDATE CHECKOUT ALL CART DETAILS LIKE NAME,PRICE,DELIVERY OPTION,ETC..
    document.querySelector('.js-order-summary').innerHTML=cartSummary;

    //CODE OF DELETE CART IN CHECKOUT PAGE 
    document.querySelectorAll('.js-delete-cart').forEach((link)=>{
        link.addEventListener('click',()=>{
            const productId=link.dataset.productId;
            //console.log(productId);
            removeProduct(productId) ;//?
            //const container=document.querySelector(`.js-cart-item-container-${productId}`);
            //container.remove();//intead of using below code 
            orderSummary();
            pageUpdateCartQuantity();
            renderPaymentSummary();
        });
    });

    //CODE FOR UPDATE CART IN CHECKOUT PAGE
    document.querySelectorAll('.js-update-cart').forEach((linkItem)=>{
      linkItem.addEventListener('click',()=>{
          //console.log("updated ");
          
          //disapper of update button
          linkItem.style.display = 'none';

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
            <span>
                
                <input type="number" 
                  class="js-quantity-input"
                  value="${currentQuantity}" 
                  min="1" max="50">
                <button class="js-save-button">Save</button>
            </span>
          `;
          //SAVE BUTTON LOGIC
          container.querySelector('.js-save-button').addEventListener('click',()=>{
              const newQuantity = container.querySelector('.js-quantity-input').value;
              
            // console.log(newQuantity);
              updateCartQuantity(newQuantity,productId);//UPDATE CART QUANTITY IN cart.js

              pageUpdateCartQuantity();//UPDATE CHECKOUT PAGE IN Checkout(Cartitem)

              renderPaymentSummary();//update payment page

              orderSummary();//UPDATE OF ORDER SUMMARY UPDATE CART ITEM LIST COUNT
          });
      });
    });

    //UPDATE DELIVERY OPTION USER LIVE SELECT RADIO BUTTON AND UPDATE DELIVERYOPTION IN CART LIKE cart.js 
    document.querySelectorAll('.js-delivery-option').forEach((element)=>{
        element.addEventListener('click',()=>{
            const {productId,deliveryOptionId}=element.dataset;//GET DATA OF PRODUCTID AND USERSELECT DELIVERY OPTION
            UpdateDeliveryOption(productId,deliveryOptionId);//UPDATE DELIVERY OPTION IN cart.js
            orderSummary();//REFRESH UPDATE 

            renderPaymentSummary();
        });
    });

    
    
}

