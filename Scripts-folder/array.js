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

//Array Slicing/Copying:-
console.log("Array Slicing");
/*Syntax
  arrayName.slice(startIndex);

  arrayName.slice(startIndex, endIndex);
*/
let array3=array2.slice(0,1);
console.log(array3);//only 5 print

//Array Length
console.log("Array Length");
/*Syntax
  arrayName.length;
*/

let arr3=[1,2,3,4,5];
console.log(arr3.length);

//convert anything to array
//method 1:-(Array.from)line-56 check
//method 2:-(Array.of)line-44 check
//method 3:-(toString)convert array to string
let arr4 = [10,20,30];

let result = arr4.toString();

console.log(result);//"10,20,30"

//Array Searching
console.log("Searching")
//method 1:-(indexOf)
/*Syntax
  arrayName.indexOf(value);
*/
let arr5 = [10,20,30,20];

console.log(arr5.indexOf(20));

//method 2:-(lastIndexOf)
/*Syntax
  arrayName.lastIndexOf(value);
*/
console.log(arr5.lastIndexOf(20));

//method 3:-(includes)check value in array
/*Syntax
  arrayName.includes(value);
*/
console.log(arr5.includes(20));

//method 4:-(find)Returns first element that matches condition
/*Syntax
  arrayName.find(callback);
*/
let arr6 = [10,20,30,40];
let result1 = arr6.find(x => x > 20);
console.log(result1);


//method 5:-(findIndex)Returns first element of index that matches condition
/*Syntax
  arrayName.findIndex(callback);
*/
let result2 = arr6.findIndex(x => x > 20);
console.log(result2);

//Array Transform /modify
console.log("Array Modify");

//method 1:-(Sort)
/*Syntax
  arrayName.sort();
*/
let arr7 = [5,2,8,1];
arr7.sort();
console.log(arr7);

//method 2:-(reverse)
/*Syntax
  arrayName.reverse();
*/
arr7.reverse();
console.log(arr7);

//method 3:-(concant)
/*Syntax
  arrayName.concat();
*/
let arr8=[6,8,9];
let result3=arr7.concat(arr8);
console.log(result3);

//method 4:-(join)
/*Syntax
  arrayName.join(separator);
*/
console.log(result3.join("-"));

//method 5:-(flat)convert to ingle array
/*Syntax
  arrayName.flat(depth);Flattens nested arrays.
*/
let arr9 = [1,2,[3,4]];

console.log(arr9.flat());

//method 6:-(fill)filling with value
/*Syntax
  arrayName.fill(value);Fill value
*/
let arr10 = new Array(5).fill(0);

console.log(arr10);

//method 7:-(copyWithin)Copies part of array inside same array
/*Syntax
  arrayName.copyWithin(target, start, end);
*/

let arr11 = [1,2,3,4,5];

arr11.copyWithin(0,3);

console.log(arr11);//4,5,3,4,5