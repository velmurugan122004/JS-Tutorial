// Without array — messy
let item1 = "Dosa";
let item2 = "Idli";
let item3 = "Vada";

//Creation of array:-
// With array — clean

//Method:1-Array Literal (most common)
/*Syntax
  keyword arrayName = [value1, value2, value3];
*/
let foods = ["Dosa", "Idli", "Vada"];
console.log(foods);

//method:2:-(Array Contructor)
/*Syntax
  keyword arrayName = new Array(size of the array);
*/

let nums = new Array(1);//create empty array with 1 space 
console.log(nums);//output [ <1 empty items> ]
nums[0]=10;
console.log(nums);
nums[1]=20;//js ha auto expand memory that yy not error 
console.log(nums);

/*Syntax
  keyword arrayName= new Array(value1, value2, value3);
*/
let nums2 = new Array(1, 2, 3);//create array with value
console.log(nums2);

//method 3:-(empty array then added)
/*Syntax
  keyword arrayName=[];
*/
let nums3=[];
console.log(nums3);

nums3[0]=10;
nums3[1]="hello";
console.log(nums3);


//method 4:-(Array.of)

//sometime using Array contructor to end value i error that can be overcome with the help of Array.of it can be end only value of the array 

/*Syntax
    Array.of(value1, value2, value3)
*/
let arr = Array.of(10,20,30);
console.log(arr);


//method 5:-(Array.from)
/*Syntax
    Array.from(object)
*/
let arr1 = Array.from("hello");//separate string in array 
console.log(arr1);
/*Syntax
    Array.from(object, mapFunction)
*/
let arr2 = Array.from([1,2,3], x => x*2);
console.log(arr2);


//method 6:-(Mixed all type)
let mixed = [42, "hello", true, null, {name:"Vel"}, [1,2]];
console.log(mixed);