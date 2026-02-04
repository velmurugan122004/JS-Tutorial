
let productsHTML='';
//document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;  instead using amazon.html 48 inside data  

products.forEach((product)=>{
    productsHTML+=`
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars *10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents/100).toFixed(2)}
          </div>

          <div class="product-quantity-container ">
            <select class="js-user-select-quantity-${product.id}" data-product-id="${product.id}">
            
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-to-add-cart" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
    `;
});
//console.log(productsHTML);

document.querySelector('.js-products-grid').innerHTML=productsHTML;

const addedMessageTimeouts = {};

document.querySelectorAll('.js-to-add-cart')
    .forEach((button)=>{
      button.addEventListener('click',()=>{
        console.log('Added product');
        //console.log(button.dataset.productName);

        let addedMessageTimeoutId;
        
        //const productId=button.dataset.productId;
        //intead use below destructing 
        const {productId}=button.dataset;

        //checking item in cart
        let matchingItem;
        cart.forEach((item)=>{
          if(productId===item.productId)
          {
            matchingItem=item;
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

        let cartQuantity=0;
        
        cart.forEach((item)=>{
          cartQuantity+=item.quantity;
        });
         
        console.log(cartQuantity);
        //console.log(cart);
        document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;


        const addedMessage = document.querySelector(
        `.js-added-to-cart-${productId}`
        );

        addedMessage.classList.add('added-to-cart-visible');

        console.log(addedMessage);

  
        

        // Check if there's a previous timeout for this
        // product. If there is, we should stop it.
      //const previousTimeoutId = addedMessageTimeouts[productId]; 
      
      if (addedMessageTimeoutId) {
        clearTimeout(addedMessageTimeoutId);
      } 

      //document.querySelector(`.added-to-cart-visible`).innerHTML=`Added`;

      const timeoutId = setTimeout(() => {
              addedMessage.classList.remove('added-to-cart-visible');
        }, 2000);

        // Save the timeoutId for this product
      // so we can stop it later if we need to.
      addedMessageTimeoutId= timeoutId;
      });
});
