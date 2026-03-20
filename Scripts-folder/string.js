//String
//A string is a sequence of characters stored in quotes

// 3 ways to create
let single   = 'Hello Vel';
let double   = "Hello Vel";
let template = `Hello Vel`; 

//String creation
console.log("String creation");
// Method 1 — Literal
/*Syntax
  keyword stringName="String...";
*/
let name = "Vel Murugan";
console.log(name);
// Method 2 — String Constructor
/*Syntax
  Keyword referenceName=String("...String");
*/
let s = new String("Hello");   // String object (avoid this)
console.log(s);
let s2 = String(123); 
console.log(s2);
console.log(`s2 type :${typeof s2}`);
// Method 3 — Template Literal
let city = "Chennai";
let msg = `I live in ${city}`; // "I live in Chennai"
console.log(msg);
// Multi-line string
let address = `
  Name: Vel
  City: Chennai
  Role: Developer
`;
console.log(address);

//String length
console.log("String Length");
/*Syntax
  stringName.length
*/
let str = "Chennai";
console.log("length:"+str.length); // 7
msg = "Vel Murugan";
console.log("length:"+msg.length); // 11

//String Indexing and Acessing
console.log("String indexing");
name="Vel Murugan";
//method 1:-([])Access by index
console.log(name[0]);        // "V"
console.log(name[4]);        // "M"
console.log(name[100]); 

//method 2:-(charAt)
console.log(name.charAt(0)); // "V"
console.log(name.charAt(4)); // "M"

// Last character
console.log(name[name.length - 1]); // "n"
console.log(name.at(-1));           // "n" (modern)
console.log(name.at(-2));  

//Extract Method
//method 1:-(String Slicing)
//orginal not changed
/*Synatx
  string.slice(startIndex, endIndex)
*/
str = "Vel Murugan";

// slice(start, end) — end NOT included
console.log(str.slice(0, 3));   // "Vel"
console.log(str.slice(4));      // "Murugan"
console.log(str.slice(-7));     // "Murugan"
console.log(str.slice(-7, -4)); // "Mur"

//method 2:-(subString)
/*Syntax
  string.substring(startIndex, endIndex)
*/
str = "Chennai";

console.log(str.substring(0, 4)); // "Chen"
console.log(str.substring(4));    // "nai"

// Difference from slice — no negative index support
console.log(str.substring(-3));   // "Chennai" (treats -3 as 0)
console.log(str.slice(-3));       // "nai" ✅

//method 3:-(substr)
/*Syntax
  string.substr(startIndex, length)
*/str = "Chennai";

console.log(str.substr(0, 3)); // Che


//Searching
console.log("Searching");
//method 1:-(indexOf)
/*Syntax
  stringName.indexOf(searchValue, startIndex)
*/
str = "Idli Dosa Idli";

console.log(str.indexOf("Idli")); // 0

//method 2:-(lastIndexOf)
/*Syntax
  stringName.lastIndexOf(searchValue, startIndex)
*/
console.log(str.lastIndexOf("Idli")); // 10
//realworld
let email = "user@gmail.com";

if (email.indexOf("@") === -1) {
    console.log("Invalid email");
}

//method 3:-(includes)
/*Syntax
  string.includes(searchValue, startIndex)
*/
//String case sensitive so separate lowerr and upper
str = "Idli Dosa idli ";

console.log(str.includes("Dosa")); // true

email = "usergmail.com";

if (email.includes("@")) {
    console.log("Valid email format");
}
else{
  console.log("Invalid email format");
}

//method 4:-(startsWith)
/*Syntax
  string.startsWith(searchValue, startIndex)
*/
str = "Chennai City";
console.log(str.startsWith("Chennai")); // true
let url = "https://google.com";

if (url.startsWith("https")) {
    console.log("Secure site");
}


//method 5:-(endsWith)
/*Syntax
  string.endsWith(searchValue, length)
*/
let filename = "resume.pdf";

if (filename.endsWith(".pdf")) {
    console.log("Valid file type");
}
//method 6:-(search)
/*Syntax
  string.search(pattern)
*/
str = "Idli Dosa idli";
console.log(str.search("Dosa")); // 5

let input = "user123";

if (input.search(/[0-9]/) !== -1) {//it can check numver is not -1
    console.log("Contains number");
}

//String replace
console.log("Replacing String")

//method 1:-(replace)
/*Syntax
  string.replace(searchValue, newValue)
*/
//str = "Idli Dosa idli";
str= str.replace("idli", "Vada");

console.log(str); // Vada Dosa Idli

//method 2:-(replaceAll)
/*Syntax
  string.replaceAll(searchValue, newValue)
*/
let result = str.replaceAll("Idli", "Vada");

console.log(result); // Vada Dosa Vada

//Case Conversion
console.log("Case Conversion")
//method 1:-(uppercase)
/*Syntax
  string.toUpperCase()
*/
let userInput = "vel murugan";
userInput= userInput.toUpperCase();
console.log(userInput); // VEL MURUGAN

//method 1:-(lowercase)
/*Syntax
  string.toLowerCase()
*/
email = "USER@GMAIL.COM";

let cleanEmail = email.toLowerCase();

console.log(cleanEmail); // user@gmail.com

//Trim Methods
console.log("Trim Methods");
//method 1:-(trim)//Removes spaces from both start and end
/*Syntax
  string.trim()
*/
str = "   Chennai   ";
console.log(str.trim()); // "Chennai"

//method 2:-(trimStart)//Removes spaces from start only
/*Syntax
  string.trimStart()
*/
str = "   Idli Dosa";
console.log(str.trimStart()); // "Idli Dosa"

//method 2:-(trimEnd)//Removes spaces from end only
/*Syntax
  string.trimEnd()
*/
str = "Idli Dosa  ";
console.log(str.trimEnd()); // "Idli Dosa"

//String combine
 console.log("String combine");
//method 1:-(concat)
 /*Syntax
  string1.concat(string2, string3, ...)
*/
let str1 = "Idli";
let str2 = "Dosa";

let result1 = str1.concat(" ", str2);

console.log(result1); // Idli Dosa

//method 2:-(operator);
str = "Hello" + " " + "World";

console.log(str); // Hello World
//method 3:-(Template Literals)
/*Synatx
  `text ${variable}`
*/
name = "Vel";

msg = `Hello ${name}`;

console.log(msg); // Hello Vel

//String repeat
/*Syntax
  string.repeat(count)
*/
str = "Hi ";

console.log(str.repeat(3)); // Hi Hi Hi 
//pattern
let n = 5;
for (let i = 1; i <= n; i++) {
    console.log("* ".repeat(n));
}

//String split and convert
//method 1:-(split)
/*Syntax
  string.split(separator, limit)
*/
str = "Idli Dosa Pongal";
result = str.split(" ");
console.log(result); // ["Idli", "Dosa", "Pongal"]

//method 2:-(join)(Reverse of split)
/*Syntax
  array.join(separator)Converts array → string
*/
let arr = ["Idli", "Dosa", "Vada"];
str = arr.join(" ");

console.log(str); // Idli Dosa Vada

//method 3:-(toString)
/*Syntax
  value.toString()Converts number/array → string
*/
let num = 100;

str = num.toString();

console.log(str); // "100"

//method 4:-(String)type conversion
/*Syntax
  String(value)
*/
num = 200;
//convert number to tring
str = String(num);

console.log(str); // "200"

//method 5:-(Number)
//convert string to number
num = Number(str);

console.log(num); // 100

//method 6:-(parseInt)
str = "123px";

console.log(parseInt(str));   // 123
console.log(parseFloat("10.5")); // 10.5