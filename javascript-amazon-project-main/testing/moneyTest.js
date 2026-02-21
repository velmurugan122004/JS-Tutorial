//Testing is two type (manual and automated)
//manual testcase:it means manulally website change product to check
//automated testing:it can be check based on use code to test code (like below code) 

import {formatCurrency} from "../Scripts/utills/money.js";


console.log('test suite:cformatCurrency');

console.log('convert cents into dollars');

console.log('Default test case');
if(formatCurrency(2095)==='20.95')
{
  console.log('passed');
}
else{
  console.log('failed');
}

//Edge case
console.log('With zero');
if(formatCurrency(0)==='0.00')
{
  console.log('passed');
}
else{
  console.log('failed');
}

console.log('rounds up to the nearest cent');
if(formatCurrency(2000.5)==='20.01')
{
  console.log('passed');
}
else{
  console.log('failed');
}
console.log('round of float value');
if(formatCurrency(2095.50)==='20.96')
{
  console.log('passed');
}
else{
  console.log('failed');
}