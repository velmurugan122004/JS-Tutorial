import { cart } from "./cart.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
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

export function CalculateDeliveryDate(deliveryOption)
{
  let deliveryDate=dayjs();//GET DATA OF ALL DATA,TIME,MINUTES,ETC..

  let remaingDays=deliveryOption.deliveryDays;//GET UER SELECT DELIVERY OPTION

  while (remaingDays>0) {
    deliveryDate=deliveryDate.add(1,'day');
    if(!isWeekend(deliveryDate))
    {
      remaingDays--;//if not weekend doesn,t add 1 delivery day extro else add
      //(user order=thursday choose delivery in 3 days  mean saturday is weekend so add one more day and check if it is weekendd means same process)
    }
  }

  
  const dateString=deliveryDate.format('dddd ,MMMM D');//GET DATE IN STRING FORMAT LIKE (Saturday, February 14)
  return dateString;
}
function isWeekend(date)
{
  const dayOfWeek=date.format('dddd');
  return dayOfWeek==='Saturday' || dayOfWeek==='Sunday';
}