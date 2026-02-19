import { cart } from "./cart.js";
export const deliveryOption=[{
  id:'1',
  deliveryDays:7,
  priceCents:0
},
{
  id:'2',
  deliveryDays:3,
  priceCents:499
},
{
  id:'3',
  deliveryDays:1,
  priceCents:999
}];

export function userDeliveryOptionPrice()
{   let deliveryOptions;
    let price=0;
    cart.forEach((cartItem)=>{
      deliveryOptions=cartItem.deliveryOptionId;
      
      deliveryOption.forEach((option)=>{
          if(deliveryOptions===option.id)
          {
            price+=option.priceCents;
          }
      });

    });
    return price;
}

export function getDeliveryOption(deliveryOptionId){
  let deliveryOptions;//GET ALL DELIVERY OPTION OBJECT DATA LIKE OF ID,PRICECENTS,DELIVERYDAYS

        deliveryOption.forEach((option)=>{
          if(option.id===deliveryOptionId){
            deliveryOptions=option;
          }
        });
  return deliveryOptions ||deliveryOptions[0];
}