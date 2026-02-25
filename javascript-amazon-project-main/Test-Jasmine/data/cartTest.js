import { addToCart, cart,loadFromStorage } from "../../data/cart.js";

describe('test suite: addToCart', () => {

  it('add exiting product to the cart',()=>{
    spyOn(localStorage, 'setItem');
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity:1,
        deliveryOption:'1'
      }]);
    });
    loadFromStorage();

    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6',1);
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(2);
  });

  it('adds a new product to the cart', () => {
    // 1. Spy on localStorage.setItem so it doesn't actually save to the browser
    spyOn(localStorage, 'setItem');

    // 2. Spy on getItem to return an empty array string
    // This ensures loadFromStorage starts with a clean, empty cart
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });

    // 3. Re-run the storage loader to apply the mock
    loadFromStorage();

    // 4. Add the product
    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6',1);

    // 5. Run your expectations
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(1);
  });
});