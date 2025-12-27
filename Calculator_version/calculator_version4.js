let total=localStorage.getItem('calculation') ||'';
displayCalculation();

function calculate(value)
{
  total+=value;
  displayCalculation();

  localStorage.setItem('calculation',total);
}
function displayCalculation()
{
  document.querySelector('.js-result').innerHTML=total;
}

function checkToggle()
{
 /* const check=document.querySelector('.js-toggle');
  check.classList.toggle('is-toggled');*/

  document.body.classList.toggle('is-toggled');
}