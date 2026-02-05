export let cart=JSON.parse(localStorage.getItem('cartItems'));

if(!cart){
  cart=[{
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity:2
  },{
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb68452', 
    quantity:1
  }];
}


function saveStorage()
{
  localStorage.setItem('cartItems',JSON.stringify(cart));
}

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
      saveStorage();

}
export function removeProduct(productId)
{
    const newCart=[];

    cart.forEach((cartItem)=>{
        if(cartItem.productId!==productId){
          newCart.push(cartItem);
        }
    });

    cart=newCart;
    saveStorage();
}