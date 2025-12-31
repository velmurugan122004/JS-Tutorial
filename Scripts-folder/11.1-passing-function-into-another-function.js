function makePayment(amount, onSuccess, onFailure) {
  const status = document.querySelector('.status');
  status.innerText = 'Processing payment of ₹' + amount + '...';

  // simulate server delay
  setTimeout(function () {//thi also one of best example of callbackfunction you can pass paraeter of anonyomous function
    const isSuccess = Math.random() > 0.5; // random success/failure mean true /false
    console.log(isSuccess);

    if (isSuccess) {
      onSuccess();//this calling of start payment of makepayment function call parameter 
    } else {
      onFailure();//this calling of start payment of makepayment function call parameter
    }
  }, 2000);
}

function startPayment() {
  const amountInput = document.querySelector('.amount');
  const amount = amountInput.value;

  if (amount === '' || amount <= 0) {
    document.querySelector('.status').innerText =
      'Please enter a valid amount ❗';
    return;
  }

  makePayment(//this auctually calling makepayment function 
    amount,
    function () {
      document.querySelector('.status').innerText =
        'Payment Successful ✅';
    },
    function () {
      document.querySelector('.status').innerText =
        'Payment Failed ❌ Try again';
    }
  );
}
