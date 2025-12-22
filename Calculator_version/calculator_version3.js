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
