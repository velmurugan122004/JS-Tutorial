import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";

import { orderSummary } from "./checkout/orderSummary.js";

import { renderPaymentSummary } from "./checkout/paymentSummary.js";

import { loadProducts,loadProductsFetch} from "../data/products.js";
import { loadCart ,loadCartFetch} from "../data/cart.js";
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


/*new Promise((resolve)=>{
  //console.log('Start promises');
  loadProducts(()=>{
    //console.log('Finished loading')
    resolve("value1");
  });

}).then((value)=>{
  console.log(value);
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
*/
//now run all promies at same time
/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  })

]).then((values)=>{
  console.log(values);//(2) ['value1', undefined] because one resolve retrun values
  renderCheckoutHeader();
  orderSummary();
  renderPaymentSummary();
});*/

//this is below code is shortcut for the above code line-58 to line-71
async function loadPage(){
  try{
    //throw "error";

    //console.log('load page');
    /*loadProductsFetch().then(()=>[
    ]);*///intead of using below code

    await loadProductsFetch();//only used async function 
    await loadCartFetch();

    /*const values=await new Promise((resolve,reject)=>{
      //throw "error2"; first way to create error manually in promies
      loadCart(()=>{
        //reject('error3');econd way to create error
        resolve('value3');
      });
    });/*.then((values)=>{
      instead of using await so const value=await new Promise((resolve)=>{ this ;ine store value
    });*/
  }
  catch(error){
    console.log("Unexpected error. please try again later ...");
  }

  renderCheckoutHeader();
  orderSummary();
  renderPaymentSummary();
  //return 'value2';
}
loadPage();
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
