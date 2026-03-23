// ============================================================
//          JAVASCRIPT OBJECTS - COMPLETE REFERENCE
// ============================================================

// ─────────────────────────────────────────────
// CREATION OF OBJECT
// ─────────────────────────────────────────────

// Method 1:- Object Literal (most common)
/*
Syntax:
  let objName = {
    key1: value1,
    key2: value2
  };
*/
let person1 = {
  name: "Vel",
  age: 21,
  city: "Chennai"
};
console.log(person1);

// Method 2:- new Object() Constructor
/*
Syntax:
  let objName = new Object();
  objName.key = value;
*/
let person2 = new Object();
person2.name = "Murugan";
person2.age = 22;
console.log(person2);

// Method 3:- Object.create()
/*
Syntax:
  let objName = Object.create(protoObject);
*/
let proto = { greet() { return "Hello!"; } };
let person3 = Object.create(proto);
person3.name = "Ram";
console.log(person3.greet()); // Hello!

// Method 4:- Constructor Function
/*
Syntax:
  function FnName(param1, param2) {
    this.key1 = param1;
    this.key2 = param2;
  }
  let objName = new FnName(val1, val2);
*/
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let person4 = new Person("Vel", 21);
let person5 = new Person("Ram", 22);
console.log(person4);
console.log(person5);

// Method 5:- ES6 Class
/*
Syntax:
  class ClassName {
    constructor(param1, param2) {
      this.key1 = param1;
      this.key2 = param2;
    }
  }
  let objName = new ClassName(val1, val2);
*/
class Animal {
  constructor(type, sound) {
    this.type = type;
    this.sound = sound;
  }
}
let dog = new Animal("Dog", "Woof");
let cat = new Animal("Cat", "Meow");
console.log(dog);
console.log(cat);

// Method 6:- Factory Function (returns object without new)
/*
Syntax:
  function createObj(param1, param2) {
    return { key1: param1, key2: param2 };
  }
*/
function createUser(name, role) {
  return { name, role }; // shorthand property
}
let user1 = createUser("Vel", "Admin");
let user2 = createUser("Ram", "Editor");
console.log(user1);
console.log(user2);


// ─────────────────────────────────────────────
// ACCESSING PROPERTIES
// ─────────────────────────────────────────────
console.log("--- Accessing Properties ---");

let car1 = { brand: "Toyota", model: "Innova", year: 2022 };

// Method 1:- Dot Notation
/*
Syntax:
  objName.key
*/
console.log(car1.brand); // Toyota
console.log(car1.model); // Innova

// Method 2:- Bracket Notation
/*
Syntax:
  objName["key"]
*/
console.log(car1["model"]); // Innova

// Method 3:- Dynamic key access (bracket only)
/*
Syntax:
  let propKey = "keyName";
  objName[propKey]
*/
let propKey = "year";
console.log(car1[propKey]); // 2022


// ─────────────────────────────────────────────
// ADDING / UPDATING PROPERTIES
// ─────────────────────────────────────────────
console.log("--- Adding / Updating ---");

/*
Syntax:
  objName.newKey = value;    // add new property
  objName.existKey = value;  // update existing property
*/
let phone = { brand: "Samsung", price: 15000 };

phone.color = "Black"; // add new property
console.log(phone); // { brand: 'Samsung', price: 15000, color: 'Black' }

phone.price = 18000; // update existing property
console.log(phone.price); // 18000


// ─────────────────────────────────────────────
// DELETING PROPERTIES
// ─────────────────────────────────────────────
console.log("--- Deleting Properties ---");

/*
Syntax:
  delete objName.key;
*/
let student = { name: "Vel", age: 21, marks: 95 };
delete student.marks;
console.log(student); // { name: 'Vel', age: 21 }


// ─────────────────────────────────────────────
// CHECKING PROPERTY EXISTENCE
// ─────────────────────────────────────────────
console.log("--- Checking Property ---");

let bike = { brand: "Royal Enfield", cc: 350 };

// Method 1:- 'in' operator (checks own + prototype chain)
/*
Syntax:
  "key" in objName
*/
console.log("brand" in bike); // true
console.log("color" in bike); // false

// Method 2:- hasOwnProperty() (checks only own property)
/*
Syntax:
  objName.hasOwnProperty("key")
*/
console.log(bike.hasOwnProperty("cc"));    // true
console.log(bike.hasOwnProperty("speed")); // false

// Method 3:- Compare with undefined
console.log(bike.color === undefined); // true (key not present)


// ─────────────────────────────────────────────
// OBJECT METHODS (Functions inside object)
// ─────────────────────────────────────────────
console.log("--- Object Methods ---");

let calc = {
  numA: 10,
  numB: 5,

  // Regular function method (has its own 'this')
  add: function () {
    return this.numA + this.numB;
  },

  // Shorthand method - ES6
  subtract() {
    return this.numA - this.numB;
  },

  // Arrow function (no own 'this' - avoid using as method)
  info: () => {
    return "Arrow: no own this keyword";
  }
};

console.log(calc.add());      // 15
console.log(calc.subtract()); // 5
console.log(calc.info());     // Arrow: no own this keyword


// ─────────────────────────────────────────────
// 'this' KEYWORD
// ─────────────────────────────────────────────
console.log("--- this keyword ---");

let employee = {
  name: "Vel",
  dept: "IT",
  introduce() {
    return `I am ${this.name} from ${this.dept}`;
    // 'this' refers to the employee object
  }
};
console.log(employee.introduce()); // I am Vel from IT


// ─────────────────────────────────────────────
// OBJECT ITERATION
// ─────────────────────────────────────────────
console.log("--- Object Iteration ---");

let scores = { maths: 90, science: 85, english: 78 };

// Method 1:- for...in loop (iterates over keys)
/*
Syntax:
  for (let key in objName) { }
*/
for (let key in scores) {
  console.log(`${key}: ${scores[key]}`);
}

// Method 2:- Object.keys() → returns array of keys
/*
Syntax:
  Object.keys(objName)
*/
console.log(Object.keys(scores)); // ['maths', 'science', 'english']

// Method 3:- Object.values() → returns array of values
/*
Syntax:
  Object.values(objName)
*/
console.log(Object.values(scores)); // [90, 85, 78]

// Method 4:- Object.entries() → returns array of [key, value] pairs
/*
Syntax:
  Object.entries(objName)
*/
console.log(Object.entries(scores));
// [['maths', 90], ['science', 85], ['english', 78]]

// Iterate entries using destructuring
for (let [subj, mark] of Object.entries(scores)) {
  console.log(`${subj} → ${mark}`);
}


// ─────────────────────────────────────────────
// OBJECT COPYING
// ─────────────────────────────────────────────
console.log("--- Object Copying ---");

let originalObj = { name: "Vel", age: 21 };

// Method 1:- Shallow Copy using Spread operator
/*
Syntax:
  let copyObj = { ...sourceObj };
*/
let spreadCopy = { ...originalObj };
spreadCopy.name = "Ram";
console.log(originalObj.name); // Vel  (not affected)
console.log(spreadCopy.name);  // Ram

// Method 2:- Shallow Copy using Object.assign()
/*
Syntax:
  Object.assign(target, source)
*/
let assignCopy = Object.assign({}, originalObj);
assignCopy.age = 99;
console.log(originalObj.age); // 21  (not affected)
console.log(assignCopy.age);  // 99

// Method 3:- Deep Copy using JSON (for simple/flat objects)
/*
Syntax:
  let deepCopy = JSON.parse(JSON.stringify(objName));
  NOTE: Loses undefined, functions, Symbol keys, Date objects
*/
let nestedObj = { name: "Vel", address: { city: "Chennai" } };
let deepCopyObj = JSON.parse(JSON.stringify(nestedObj));
deepCopyObj.address.city = "Bangalore";
console.log(nestedObj.address.city);  // Chennai (not affected)
console.log(deepCopyObj.address.city); // Bangalore


// ─────────────────────────────────────────────
// OBJECT MERGING
// ─────────────────────────────────────────────
console.log("--- Object Merging ---");

let objA = { a: 1, b: 2 };
let objB = { c: 3, d: 4 };

// Method 1:- Spread operator
let mergedSpread = { ...objA, ...objB };
console.log(mergedSpread); // { a:1, b:2, c:3, d:4 }

// Method 2:- Object.assign()
let mergedAssign = Object.assign({}, objA, objB);
console.log(mergedAssign); // { a:1, b:2, c:3, d:4 }

// Override: user preference overrides default config
let defaultConfig = { theme: "light", lang: "en", size: 14 };
let userPref = { theme: "dark" };
let finalConfig = { ...defaultConfig, ...userPref };
console.log(finalConfig); // { theme: 'dark', lang: 'en', size: 14 }


// ─────────────────────────────────────────────
// OBJECT DESTRUCTURING
// ─────────────────────────────────────────────
console.log("--- Destructuring ---");

let profile = { name: "Vel", age: 21, city: "Chennai" };

// Basic destructuring
/*
Syntax:
  let { key1, key2 } = objName;
*/
let { name, age } = profile;
console.log(name, age); // Vel 21

// Rename variable while destructuring
/*
Syntax:
  let { key: newName } = objName;
*/
let { city: location } = profile;
console.log(location); // Chennai

// Default value if key doesn't exist
/*
Syntax:
  let { key = defaultValue } = objName;
*/
let { country = "India" } = profile;
console.log(country); // India

// Nested destructuring
let nestedUser = { info: { userId: 101, role: "Admin" } };
let { info: { userId, role } } = nestedUser;
console.log(userId, role); // 101 Admin

// Destructuring in function parameter
/*
Syntax:
  function fn({ key1, key2 }) { }
*/
function greetUser({ name, city }) {
  return `Hello ${name} from ${city}`;
}
console.log(greetUser(profile)); // Hello Vel from Chennai


// ─────────────────────────────────────────────
// COMPUTED PROPERTY NAMES
// ─────────────────────────────────────────────
console.log("--- Computed Property ---");

/*
Syntax:
  let obj = { [expression]: value };
*/
let fieldName = "score";
let computedObj = { [fieldName]: 99 };
console.log(computedObj); // { score: 99 }

// Dynamic key using template literal
let prefixStr = "user";
let dynamicObj = {
  [`${prefixStr}_name`]: "Vel",
  [`${prefixStr}_age`]: 21
};
console.log(dynamicObj); // { user_name: 'Vel', user_age: 21 }


// ─────────────────────────────────────────────
// SHORTHAND PROPERTY NAMES (ES6)
// ─────────────────────────────────────────────
console.log("--- Shorthand Property ---");

/*
Syntax:
  let obj = { varName };  // same as { varName: varName }
*/
let username = "Vel";
let userAge = 21;

let userShorthand = { username, userAge }; // shorthand
console.log(userShorthand); // { username: 'Vel', userAge: 21 }


// ─────────────────────────────────────────────
// GETTERS AND SETTERS
// ─────────────────────────────────────────────
console.log("--- Getters & Setters ---");

/*
Syntax:
  let obj = {
    _key: value,
    get propName() { return this._key; },
    set propName(val) { this._key = val; }
  };
*/
let tempConverter = {
  _celsius: 0,
  get fahrenheit() {
    return this._celsius * 9 / 5 + 32;
  },
  set fahrenheit(f) {
    this._celsius = (f - 32) * 5 / 9;
  }
};

tempConverter.fahrenheit = 98.6;
console.log(tempConverter._celsius.toFixed(1)); // 37.0
console.log(tempConverter.fahrenheit);          // 98.6


// ─────────────────────────────────────────────
// OBJECT FREEZE & SEAL
// ─────────────────────────────────────────────
console.log("--- Freeze & Seal ---");

// Object.freeze() → No add, update, or delete allowed
/*
Syntax:
  Object.freeze(objName);
*/
let frozenConfig = Object.freeze({ env: "production", version: 1 });
frozenConfig.env = "dev";       // silently ignored
frozenConfig.newKey = "test";   // silently ignored
console.log(frozenConfig); // { env: 'production', version: 1 }

// Object.seal() → Can update, but cannot add or delete
/*
Syntax:
  Object.seal(objName);
*/
let sealedSettings = Object.seal({ theme: "dark", lang: "en" });
sealedSettings.theme = "light"; // allowed  ✅
sealedSettings.newProp = "x";   // ignored  ❌
delete sealedSettings.lang;     // ignored  ❌
console.log(sealedSettings); // { theme: 'light', lang: 'en' }


// ─────────────────────────────────────────────
// Keys/Values/Entries — Useful Tricks
// ─────────────────────────────────────────────
console.log("--- Keys/Values/Entries Tricks ---");

let subjectMarks = { maths: 80, science: 90, english: 70 };

// Sum all values using reduce
let totalMarks = Object.values(subjectMarks).reduce((acc, val) => acc + val, 0);
console.log("Total:", totalMarks); // 240

// Convert object → array of display strings
let displayArr = Object.entries(subjectMarks).map(([sub, mark]) => `${sub}: ${mark}`);
console.log(displayArr); // ['maths: 80', 'science: 90', 'english: 70']


// ─────────────────────────────────────────────
// OPTIONAL CHAINING (?.)
// ─────────────────────────────────────────────
console.log("--- Optional Chaining ---");

/*
Syntax:
  objName?.key
  objName?.key?.nestedKey
*/
let userData = { profile: { name: "Vel" } };

console.log(userData?.profile?.name);  // Vel
console.log(userData?.address?.city);  // undefined (no error!)


// ─────────────────────────────────────────────
// NULLISH COALESCING (??)
// ─────────────────────────────────────────────
console.log("--- Nullish Coalescing ---");

/*
Syntax:
  value ?? defaultValue
  Returns defaultValue only if value is null or undefined
*/
let userInfo = { name: null, city: "Chennai" };

console.log(userInfo.name ?? "Unknown"); // Unknown (name is null)
console.log(userInfo.city ?? "Unknown"); // Chennai
console.log(userInfo.zip  ?? "N/A");    // N/A  (zip is undefined)


// ─────────────────────────────────────────────
// PROTOTYPE & INHERITANCE
// ─────────────────────────────────────────────
console.log("--- Prototype ---");

function Vehicle(type) {
  this.type = type;
}

// Add method to prototype (shared by all instances — memory efficient)
Vehicle.prototype.describe = function () {
  return `This is a ${this.type}`;
};

let car2 = new Vehicle("Car");
let bike2 = new Vehicle("Bike");

console.log(car2.describe());         // This is a Car
console.log(bike2.describe());        // This is a Bike
console.log(car2 instanceof Vehicle); // true


// ─────────────────────────────────────────────
// Object.fromEntries() → Convert array to object
// ─────────────────────────────────────────────
console.log("--- Object.fromEntries ---");

/*
Syntax:
  Object.fromEntries(arrayOfPairs)
*/
let pairsArr = [["name", "Vel"], ["age", 21], ["city", "Chennai"]];
let fromPairs = Object.fromEntries(pairsArr);
console.log(fromPairs); // { name: 'Vel', age: 21, city: 'Chennai' }

// Use case: Transform all object values (10% discount)
let prices = { apple: 50, banana: 20, mango: 80 };
let discounted = Object.fromEntries(
  Object.entries(prices).map(([fruit, price]) => [fruit, price * 0.9])
);
console.log(discounted); // { apple: 45, banana: 18, mango: 72 }


// ─────────────────────────────────────────────
// SYMBOL AS OBJECT KEY (unique, hidden key)
// ─────────────────────────────────────────────
console.log("--- Symbol Key ---");

/*
Syntax:
  const sym = Symbol("description");
  let obj = { [sym]: value };
*/
const productId = Symbol("id");
let product = {
  name: "Laptop",
  [productId]: 1001
};
console.log(product[productId]); // 1001
console.log(product.name);       // Laptop
console.log(Object.keys(product)); // ['name']  — Symbol key hidden


// ─────────────────────────────────────────────
// JSON CONVERSION
// ─────────────────────────────────────────────
console.log("--- JSON Conversion ---");

let objData = { name: "Vel", age: 21, active: true };

// Object → JSON string
/*
Syntax:
  JSON.stringify(objName)
  JSON.stringify(objName, null, spaces)  // pretty print
*/
let jsonStr = JSON.stringify(objData);
console.log(jsonStr); // {"name":"Vel","age":21,"active":true}

let prettyJson = JSON.stringify(objData, null, 2);
console.log(prettyJson);
// {
//   "name": "Vel",
//   "age": 21,
//   "active": true
// }

// JSON string → Object
/*
Syntax:
  JSON.parse(jsonString)
*/
let parsedObj = JSON.parse(jsonStr);
console.log(parsedObj.name);   // Vel
console.log(typeof parsedObj); // object


// ============================================================
// QUICK REFERENCE SUMMARY
// ============================================================
/*
┌────────────────────────────┬────────────────────────────────────────┐
│ Task                       │ Syntax                                 │
├────────────────────────────┼────────────────────────────────────────┤
│ Create (literal)           │ let obj = { key: value }               │
│ Create (constructor fn)    │ new FunctionName()                     │
│ Create (class)             │ new ClassName()                        │
│ Create (factory fn)        │ function fn() { return { key: val } }  │
│ Dot access                 │ obj.key                                │
│ Bracket access             │ obj["key"]                             │
│ Dynamic access             │ obj[variable]                          │
│ Add / Update property      │ obj.key = value                        │
│ Delete property            │ delete obj.key                         │
│ Check existence (in)       │ "key" in obj                           │
│ hasOwnProperty             │ obj.hasOwnProperty("key")              │
│ Iterate keys               │ for (let k in obj)                     │
│ Get all keys               │ Object.keys(obj)                       │
│ Get all values             │ Object.values(obj)                     │
│ Get all [key,val] pairs    │ Object.entries(obj)                    │
│ Array of pairs → Object    │ Object.fromEntries(arr)                │
│ Shallow copy               │ { ...obj }                             │
│ Shallow copy (assign)      │ Object.assign({}, obj)                 │
│ Deep copy                  │ JSON.parse(JSON.stringify(obj))        │
│ Merge objects              │ { ...obj1, ...obj2 }                   │
│ Freeze (no changes)        │ Object.freeze(obj)                     │
│ Seal (update only)         │ Object.seal(obj)                       │
│ Object → JSON string       │ JSON.stringify(obj)                    │
│ JSON string → Object       │ JSON.parse(jsonStr)                    │
│ Optional chaining          │ obj?.key?.nested                       │
│ Nullish coalescing         │ obj.key ?? "default"                   │
│ Shorthand property         │ { name }  same as { name: name }       │
│ Computed key               │ { [expression]: value }                │
│ Destructure                │ let { key } = obj                      │
│ Rename in destructure      │ let { key: newName } = obj             │
│ Default in destructure     │ let { key = "default" } = obj          │
│ Getter                     │ get propName() { return ... }          │
│ Setter                     │ set propName(val) { ... }              │
└────────────────────────────┴────────────────────────────────────────┘
*/