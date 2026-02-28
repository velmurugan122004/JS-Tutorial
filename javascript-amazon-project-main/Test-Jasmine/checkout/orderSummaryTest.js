import { orderSummary } from "../../Scripts/checkout/orderSummary.js";
import { loadFromStorage } from "../../data/cart.js";
import * as checkoutHeader from "../../Scripts/checkout/checkoutHeader.js";
import * as paymentSummary from "../../Scripts/checkout/paymentSummary.js";

describe('test suite: renderOrderSummary',()=>{
  it('diplays the cart',()=>{
    document.querySelector('.js-test-container').innerHTML=`
      <div class="js-order-summary"></div>
    `;

    spyOn(localStorage, 'getItem').and.callFake(() => {
          return JSON.stringify([{
            productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity:2,
            deliveryOptionId:'1'
          },{
            productId:'e43638ce-6aa0-4b85-b27f-e1d07eb68452', 
            quantity:1,
            deliveryOptionId:'2'
          }]);
        });

        spyOn(checkoutHeader, 'pageUpdateCartQuantity').and.stub();
        spyOn(paymentSummary, 'renderPaymentSummary').and.stub();

        loadFromStorage();
        orderSummary();

        expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(2);
  });
});