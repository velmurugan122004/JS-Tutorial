import { products } from "../../data/products.js";
import { cart } from "../../data/cart.js";

export function formatCurrency(priceCents){
  return (Math.round(priceCents)/100).toFixed(2);
}

export default formatCurrency;
