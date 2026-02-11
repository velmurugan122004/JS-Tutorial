import { products } from "../../data/products.js";
import { cart } from "../../data/cart.js";

export function formatCurrency(priceCents){
  return (priceCents/100).toFixed(2);
}

export function taxCalculate(price)
{
  return (price*0.1);
}

export function totalPrice(price,shipping_fee,tax){
  return formatCurrency(price+tax+shipping_fee);
}


export function beforeTotal(price,shipping)
{
  //console.log(price);
  //console.log(shipping)
  return price+shipping;
}
export function cartItemPrice()
{
  let cartItemsPrice=0;
  cart.forEach((cartItem)=>{
      products.forEach((product)=>{
          if(cartItem.productId===product.id)
          {
            cartItemPrice+=product.priceCents;
          }
      });
  });
  return cartItemPrice;
}

export function calculateTotalCost()
{
  let total=0;
  cart.forEach((cartItem)=>{
      products.forEach((product)=>{
          if(cartItem.productId===product.id)
          {
            const cartQuantity=cartItem.quantity;
            console.log(`!!!!${cartQuantity}`);
            total+=(cartQuantity*(product.priceCents));
          }
      });
  });
  return total;
}