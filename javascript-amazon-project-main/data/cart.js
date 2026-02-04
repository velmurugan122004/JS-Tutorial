export const cart=[];

export function addToCart(productId){
    //checking item in cart
        let matchingItem;
        cart.forEach((cartItem)=>{
          if(productId===cartItem.productId)
          {
            matchingItem=cartItem;
          }
        });

        //if already there means increase cart quantity

        //use dom to get user select quantity

        const userQuantity=document.querySelector(`.js-user-select-quantity-${productId}`);

        console.log(userQuantity.value);
        const quantity=Number(userQuantity.value);
        
        
        if(matchingItem){
          matchingItem.quantity+=quantity;
        }
        else{
          cart.push({
              productId:productId,
              quantity:quantity
          });
        }

}