// Without array — messy
let item1 = "Dosa";
let item2 = "Idli";
let item3 = "Vada";//it can be not clear that yy array used

//Creation of array:-

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

//Array Insertion:-
console.log("Array Insertion");
let array=[];
//method 1:-(normal insertion with index)
/*Synatx
  arrayName[index]=value;
*/
console.log(array);
array[0]=1;
array[1]=2;
console.log(array);

//method 2:-(push)insert at last
/*Synatx
  arrayName.push(value);insert one value
  arrayName.push(value1,value2)
*/
array.push(3);
console.log(array);

//method 3:-(unshift)insert at end
/*Synatx
  arrayName.unshift(value);
*/
array.unshift(0);
console.log(array);

//method 4;-(splice)insert at user position
/*Synatx
  array.splice(index, deleteCount, element)
*/
array.splice(3,0,2.5);
console.log(array);

//method 5:-(multiple value)
/*Synatx
  arrayName.push(value1,value2)insert multiple value
*/
array.push(4,5);
console.log(array);

//method 6:-(Insert using spread operator (new array))
/*Synatx
  keyword arrayName=[...oldArray,value]
  keyword arrayName=[value,...newArray]
*/
let array1=[...array,6,7];//before added array
console.log(array1);

let array2=[-2,-1,...array1];//before added array
console.log(array2);

//Array deletion
console.log("Array deletion")
//method 1:-(pop)delete at end
/*Synatx
  arrayName.pop(value)
*/
array2.pop();
console.log(array2);

//method 2:-(shift)delete at begin
array2.shift();
console.log(array2);

//method 3:-(splice)specific index
/*Synatx
  arrayName.splice(index, count);
*/
array2.splice(2,2);//point 2 index remove two value
console.log(array2);

//method 4:-(delete)Remove using delete keyword
delete array2[2];
console.log(array2);//output [ -1, 0, <1 empty item>, 3, 4, 5, 6 ]


//method 5:-(splice) Remove multiple elements from index
/*Syntax
arrayName.splice(startIndex, deleteCount);
*/

array2.splice(0,5);
console.log(array2);