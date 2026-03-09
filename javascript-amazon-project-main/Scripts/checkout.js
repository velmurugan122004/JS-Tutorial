import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";

import { orderSummary } from "./checkout/orderSummary.js";

import { renderPaymentSummary } from "./checkout/paymentSummary.js";

import { loadProducts} from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
//import '../data/car.js';
//import '../data/backend-practice.js';

//why promies used means lot of nexting of function means(function inside function )like below mwntioned code 

//A Promise in JavaScript is an object that represents the result of an asynchronous operation (something that takes time).
/*
Examples of async tasks:

Loading products from backend

Fetching API data

Reading files

Waiting for a timer

A Promise has 3 states:

Pending ⏳ – still working

Resolved (Fulfilled) ✅ – task completed successfully

Rejected ❌ – task failed*/
new Promise((resolve)=>{
  console.log('Start promises');
  loadProducts(()=>{
    //console.log('Finished loading')
    resolve();
  });
}).then(()=>{
  //console.log('next step');
  return new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  });
}).then(()=>{
  renderCheckoutHeader();
  orderSummary();
  renderPaymentSummary();
});


/*
//this is callback(more function calling inide nesting mean loading more time )
that yyy above Promise is used
loadProducts(()=>{
  loadCart(()=>{
    renderCheckoutHeader();
    orderSummary();
    renderPaymentSummary();
  });
});*/
