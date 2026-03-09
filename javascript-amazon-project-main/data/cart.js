export let cart;

loadFromStorage();

export function loadFromStorage(){
    cart =JSON.parse(localStorage.getItem('cartItems'));

    if(!cart){
      cart=[{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity:2,
        deliveryOptionId:'1'
      },{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb68452', 
        quantity:1,
        deliveryOptionId:'2'
      }];
    }
}


export function saveStorage()
{
  localStorage.setItem('cartItems',JSON.stringify(cart));
}

export function calculateCartQuantity()
{
      let cartQuantity=0;
        
      cart.forEach((cartItem)=>{
        cartQuantity+=cartItem.quantity;
      });
         
      //console.log(cartQuantity);
        //console.log(cart);
      return cartQuantity;
      
} 

export function addToCart(productId,userQuantity){
    //checking item in cart
        let matchingItem;
        cart.forEach((cartItem)=>{
          if(productId===cartItem.productId)
          {
            matchingItem=cartItem;
          }
        });

        //if already there means increase cart quantity
        
        if(matchingItem){
          matchingItem.quantity+= userQuantity;
        }
        else{
          cart.push({
              productId:productId,
              quantity:userQuantity,
              deliveryOptionId:'1'
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
export function updateCartQuantity(newQuantity,productId)
{
    cart.forEach((cartItem)=>{
        if(cartItem.productId===productId)
        {
          cartItem.quantity=Number(newQuantity);
        }
    });
    saveStorage();
}

export function UpdateDeliveryOption(productId,userSelectDelivery)
{
  let matchingItem;
  cart.forEach((cartItem)=>{
      if(productId===cartItem.productId)
      {
        matchingItem=cartItem;
      }
  });

  matchingItem.deliveryOptionId=userSelectDelivery;
  saveStorage();
}

export function loadCart(fun){
  const xhr=new XMLHttpRequest();

  xhr.addEventListener('load',()=>{
    
    console.log(xhr.response);
    fun();
  });
  xhr.open('GET','https://supersimplebackend.dev/cart');
  xhr.send();
}