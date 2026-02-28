function Cart(localStorageKey){
    const cart={
   cartItems:undefined ,//?

   //loadFromStorage:function (){ instead of uing of shortant method
   loadFromStorage(){
    this.cartItems =JSON.parse(localStorage.getItem(localStorageKey));

    if(!this.cartItems){
      this.cartItems=[{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity:2,
        deliveryOptionId:'1'
      },{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb68452', 
        quantity:1,
        deliveryOptionId:'2'
      }];
    }
  },

  saveStorage()
  {
    localStorage.setItem(localStorageKey,JSON.stringify(this.cartItems));
  },

  addToCart(productId,userQuantity){
    //checking item in cart
        let matchingItem;
        userQuantity = Number(userQuantity);
        this.cartItems.forEach((cartItem)=>{
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
          this.cartItems.push({
              productId:productId,
              quantity:userQuantity,
              deliveryOptionId:'1'
          });
        }
      this.saveStorage();

  },
  removeProduct(productId)
  {
      const newCart=[];

      this.cartItems.forEach((cartItem)=>{
          if(cartItem.productId!==productId){
            newCart.push(cartItem);
          }
      });

      this.cartItems=newCart;
      this.saveStorage();
  },

  UpdateDeliveryOption(productId,userSelectDelivery)
  {
    let matchingItem;
    this.cartItems.forEach((cartItem)=>{
        if(productId===cartItem.productId)
        {
          matchingItem=cartItem;
        }
    });

    matchingItem.deliveryOptionId=userSelectDelivery;
    this.saveStorage();
  },

  calculateCartQuantity()
  {
        let cartQuantity=0;
          
        this.cartItems.forEach((cartItem)=>{
          cartQuantity+=cartItem.quantity;
        });
          
        //console.log(cartQuantity);
          //console.log(cart);
        return cartQuantity;
        
  },

  updateCartQuantity(newQuantity,productId)
  {
      this.cartItems.forEach((cartItem)=>{
          if(cartItem.productId===productId)
          {
            cartItem.quantity=Number(newQuantity);
          }
      });
      this.saveStorage();
  }


};
return cart;
}

const cart=Cart('cart-oop');
cart.loadFromStorage();
console.log(cart);

const businessCart=Cart('cart-business');
businessCart.loadFromStorage();
console.log(businessCart);