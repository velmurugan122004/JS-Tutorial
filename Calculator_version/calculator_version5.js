let total=localStorage.getItem('calculation') ||'';
displayCalculation();
const allowedKeys = [
  '0','1','2','3','4','5','6','7','8','9',
  '+','-','*','/','.'
];


function calculate(value)
{
  total+=value;
  displayCalculation();

  localStorage.setItem('calculation',total);
}

function calculateKey(checkevent)
{
  console.log(checkevent.key);
  console.log(total);
  if(allowedKeys.includes(event.key))//alraedy list array
  {
    event.preventDefault();
    total+=checkevent.key;
    
  }
  if(checkevent.key==='=' || checkevent.key==='Enter')
  {
    checkevent.preventDefault(); // stop default input behavior
    total=eval(total);
    
  }
  if(checkevent.key==='Backspace' )
  {
    checkevent.preventDefault(); 
    removeOne();
    return;
  }
  displayCalculation();

  localStorage.setItem('calculation',total);
}
function displayCalculation()
{
  document.querySelector('.js-result').value=total;
}
function removeOne() {
  total = total.slice(0, -1); // remove last character
  displayCalculation();
  localStorage.setItem('calculation', total);
}


function checkToggle()
{
 /* const check=document.querySelector('.js-toggle');
  check.classList.toggle('is-toggled');*/

  document.body.classList.toggle('is-toggled');
}