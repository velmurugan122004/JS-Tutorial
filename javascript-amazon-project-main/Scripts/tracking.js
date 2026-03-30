import {getOrder} from '../data/orders.js';
import {getProduct, loadProductsFetch} from '../data/products.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { cart } from '../data/cart-class.js';
async function loadPage(){
  await loadProductsFetch();

  document.querySelector('.js-track-order-cart').innerHTML=cart.calculateCartQuantity();
  const url = new URL(window.location.href);
  //console.log(url);
  const orderId = url.searchParams.get('orderId');
  const productId = url.searchParams.get('productId');
  //console.log(orderId);
  const order = getOrder(orderId);
  const product = getProduct(productId);

  // Get additional details about the product like
  // the estimated delivery time.
  let productDetails;
  order.products.forEach((details) => {
    if (details.productId === product.id) {
      productDetails = details;
    }
  });
  //calculate percentage of order progress
  const today=dayjs();
  const orderTime=dayjs(order.orderTime);
  const deliveryTime=dayjs(productDetails.estimatedDeliveryTime);

  const percentageProgress=((today-orderTime)/(deliveryTime-orderTime))*100;

  /*console.log(today);
  console.log(orderTime);
  console.log(deliveryTime);
  console.log(today-orderTime);
  console.log(deliveryTime-orderTime);
  console.log((today-orderTime)/(deliveryTime-orderTime));
  console.log(percentageProgress);*/


  //console.log(productDetails);
  //console.log(productDetails.quantity);
  //console.log(dayjs(productDetails.estimateDeliveryTime).format('dddd, MMMM D'));
  //console.log(dayjs(productDetails.estimatedDeliveryTime).format('dddd, MMMM D'));
  const trackingHTML=`<a class="back-to-orders-link link-primary" href="orders.html">
          View all orders
        </a>

        <div class="delivery-date">
          Arriving on ${dayjs(productDetails.estimatedDeliveryTime).format('dddd, MMMM D')}
        </div>

        <div class="product-info">
          ${product.name}
        </div>

        <div class="product-info">
          Quantity: ${productDetails.quantity}
        </div>

        <img class="product-image" src="${product.image}">

        <div class="progress-labels-container">
          <div class="progress-label ${percentageProgress<50?'current-status':''}">
            Preparing
          </div>
          <div class="progress-label ${(percentageProgress>=50 && percentageProgress<100)?'current-status':''}">
            Shipped
          </div>
          <div class="progress-label${
            percentageProgress>=100?'current-status':''
          }">
            Delivered
          </div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar" style="width:${percentageProgress}%"></div>
        </div>`;
        document.querySelector('.js-track-order').innerHTML=trackingHTML;
}

loadPage();