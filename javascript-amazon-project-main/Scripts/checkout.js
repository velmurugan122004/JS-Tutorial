import {cart,removeProduct,calculateCartQuantity,updateCartQuantity,UpdateDeliveryOption,saveStorage} from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency ,calculateTotalCost, beforeTotal, taxCalculate, totalPrice} from './utills/money.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

import { deliveryOption, userDeliveryOptionPrice } from '../data/deliveryOption.js';


/*console.log(dayjs());
const today=dayjs();

console.log(today.add(7,'days'));
const deliveryDate=today.add(7,'days');
console.log(deliveryDate.format('dddd, MMMM D'));*/
function orderSummary()
{ 
        
    pageUpdateCartQuantity();//HEADER OF CHECKOUT CURRENT UPDATED CART

    function pageUpdateCartQuantity()//HEADER OF CHECKOUT CURRENT UPDATED CART
    {
      const cartQuantity=calculateCartQuantity();
      if(cartQuantity<=1)
      {
        document.querySelector('.js-current-UpdateQuantity').innerHTML=`${cartQuantity} Item`;
      }
      else{
        document.querySelector('.js-current-UpdateQuantity').innerHTML=`${cartQuantity} Items`;
      }
      
    }

    //CART DETAILS

    let cartSummary='';
    cart.forEach((cartItem)=>{
        const productId=cartItem.productId;

        let matchingProduct;

        products.forEach((product)=>{
            if(product.id===productId){
              matchingProduct=product;//GET THAT PRODUCT ALL DETAILS LIKE NAME,PRICE,ETC...
            }
        }); //console.log(matchingProduct);
        //console.log(cartItem.quantity);

        const deliveryOptionId=cartItem.deliveryOptionId;

        let deliveryOptions;//GET ALL DELIVERY OPTION OBJECT DATA LIKE OF ID,PRICECENTS,DELIVERYDAYS

        deliveryOption.forEach((option)=>{
          if(option.id===deliveryOptionId){
            deliveryOptions=option;
          }
        });

        const today=dayjs();//GET DATA OF ALL DATA,TIME,MINUTES,ETC..
        const deliveryDate=today.add(
          deliveryOptions.deliveryDays,'days'
        );//ADD DELVIERY DAYS BASED ON USER SELECT  

        const dateString=deliveryDate.format('dddd, MMMM D'); //GET DATE IN STRING FORMAT LIKE (Saturday, February 14)

        //CART ADDED PRODUCT DETAILS
        cartSummary+=`
          <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
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
                      $${formatCurrency(matchingProduct.priceCents)}
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

          const today=dayjs();
          const deliveryDate=today.add(
          deliveryOption.deliveryDays,'days'
          );
          const dateString=deliveryDate.format('dddd, MMMM D');

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
            //console.log(cart);
            const container=document.querySelector(`.js-cart-item-container-${productId}`);
            container.remove();//?
            pageUpdateCartQuantity();
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
        });
    });

  //payment summary 
  //REVIEW YOUR ORDER LIST
    const cartQuantity=calculateCartQuantity();//INSTEAD USING BELOW CODE
    //document.querySelector('.js-total-cart').innerHTML=`Items :(${cartQuantity})`; 

    const totalCost=calculateTotalCost();
    //console.log(totalCost);
    //document.querySelector('.js-payment-monney').innerHTML=`$${formatCurrency(totalCost)}`;
    
    const shippingCost=userDeliveryOptionPrice();
    //console.log(shippingCost);

    //document.querySelector('.js-shipping-fee').innerHTML=`$${formatCurrency(userDeliveryOption)}`;

    const beforeTotalPrice=beforeTotal(totalCost,shippingCost);
    //console.log(beforeTotalPrice);
    //document.querySelector('.js-before-tax').innerHTML=`$${beforeTotalPrice}`;

    const tax=taxCalculate(beforeTotalPrice);//GET TAX FROM MONEY.JS

    const total=totalPrice(totalCost,shippingCost,tax);//GET TOTAL FROM MONEY.JS
    //console.log(total);

    const paymentSummary=`
    <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items(${cartQuantity})</div>
            <div class="payment-summary-money">$${formatCurrency(totalCost)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(shippingCost)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(beforeTotalPrice)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(tax)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${total}</div>
          </div>

          <a href="orders.html">
              <button class="place-order-button button-primary js-payment-order-placed">
                Place your order
              </button>
          </a>
        </div>
        `;
    document.querySelector('.js-payment-summary').innerHTML=paymentSummary;

    /*const orderPlaced=document.querySelector('.js-payment-order-placed');

    orderPlaced.addEventListener('click',()=>{
        window.location.href = 'orders.html';
    });*/
}

orderSummary();

