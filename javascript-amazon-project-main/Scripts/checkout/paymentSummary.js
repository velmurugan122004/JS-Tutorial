import { cart } from "../../data/cart-class.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOption.js";
import{formatCurrency} from "../utills/money.js";
import { addOrder } from "../../data/orders.js";

//payment summary 
//REVIEW YOUR ORDER LIST
export function renderPaymentSummary(){
  let cartTotalPrice=0;
  let shippingPrice=0;

  let quantity=0;
  cart.cartItems.forEach((cartItem)=>{
    const product=getProduct(cartItem.productId);
    cartTotalPrice+=product.priceCents*cartItem.quantity;
    quantity+=cartItem.quantity;
    const deliveryOption=getDeliveryOption(cartItem.deliveryOptionId);
    shippingPrice+=deliveryOption.priceCents;
  });

  const totalPriceBeforeTax=cartTotalPrice+shippingPrice;

  const taxCents=totalPriceBeforeTax*0.1;

  const totalPriceAfterTax=totalPriceBeforeTax+taxCents;
  /*console.log(cartTotalPrice);
  console.log(shippingPrice);
  console.log(totalPriceBeforeTax);
  console.log(taxCents);
  console.log(totalPriceAfterTax);*/

  const paymentSummary=`
    <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items(${quantity})</div>
            <div class="payment-summary-money">$${formatCurrency(cartTotalPrice)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(shippingPrice)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalPriceBeforeTax)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(totalPriceAfterTax)}</div>
          </div>
          <button class="place-order-button button-primary js-payment-order-placed">
                Place your order
          </button>
        </div>
        `;
        document.querySelector('.js-payment-summary').innerHTML=paymentSummary;

        const orderPlaced=document.querySelector('.js-payment-order-placed');

    orderPlaced.addEventListener('click',async()=>{

      try{
          const response=await fetch('https://supersimplebackend.dev/orders',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            cart:cart
          })
        });
        const order=await response.json();
        //console.log(order);
        addOrder(order);
        cart.clearCart();
      }
      catch(error){
        console.log('Unexpected error . Try again later');
      }
      window.location.href='orders.html';
        
    });
}