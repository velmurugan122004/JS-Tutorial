import { orderSummary } from "../../Scripts/checkout/orderSummary.js";
import { loadFromStorage ,cart} from "../../data/cart-class.js";
import * as checkoutHeader from "../../Scripts/checkout/checkoutHeader.js";
import * as paymentSummary from "../../Scripts/checkout/paymentSummary.js";
import { loadProducts } from "../../data/products.js";
import { products } from "../../data/products.js";
describe('test suite: renderOrderSummary',()=>{
  let productId1='e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  let productId2='15b6fc6f-327a-4ec4-896f-486349e85a3d';
  beforeAll((done)=>{
      loadProducts(()=>{
        /*productId1 = products[0].id;
        productId2 = products[1].id;
        console.log('productId1:', productId1);
        console.log('productId2:', productId2);*/
        done();
      });
    });
    //spyOn(document, 'querySelector').and.callThrough();
    beforeEach(()=>{
      spyOn(localStorage,'setItem');

      
      spyOn(localStorage, 'getItem').and.callFake(() => {
        return JSON.stringify([{
          productId:productId1,
          quantity:2,
          deliveryOptionId:'1'
        },{
          productId:productId2, 
          quantity:1,
          deliveryOptionId:'2'
        }]);
      });
      document.querySelector('.js-test-container').innerHTML=`
      <div class="js-order-summary"></div>
      <div class="js-payment-summary"></div>
      `;
      spyOn(checkoutHeader, 'pageUpdateCartQuantity').and.stub();
      spyOn(paymentSummary, 'renderPaymentSummary').and.stub();

      loadFromStorage();
      orderSummary();

    });
  it('diplays the cart',()=>{
    
    expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(2);
    expect(
      document.querySelector(`.js-product-quantity-${productId1}`).textContent
    ).toContain('Quantity: 2');
    expect(
      document.querySelector(`.js-product-quantity-${productId2}`).textContent
    ).toContain('Quantity: 1');

    document.querySelector('.js-test-container').innerHTML = '';
  });
  it('removes a product', () => {
    document.querySelector(`.js-delete-link-${productId1}`).click();
    expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(1);
    expect(
      document.querySelector(`.js-cart-item-container-${productId1}`)
    ).toEqual(null);
    expect(
      document.querySelector(`.js-cart-item-container-${productId2}`)
    ).not.toEqual(null);
    expect(cart.cartItems.length).toEqual(1);
    expect(cart.cartItems[0].productId).toEqual(productId2);

    document.querySelector('.js-test-container').innerHTML = '';
  });
});