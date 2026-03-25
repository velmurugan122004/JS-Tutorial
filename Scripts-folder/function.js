// ============================================================
//          JAVASCRIPT FUNCTIONS 
// ============================================================
console.log("Function Concept");
// ─────────────────────────────────────────────
// CREATION OF FUNCTION
// ─────────────────────────────────────────────

// Method 1:- Function Declaration
/*
Syntax:
  function functionName(param1, param2) {
    // body
    return value;
  }
*/
function greet1(name) {
  return `Hello ${name}!`;
}
console.log(greet1("Vel")); // Hello Vel!

// Method 2:- Function Expression
/*
Syntax:
  let fnName = function(param1, param2) {
    return value;
  };
*/
let greet2 = function(name) {
  return `Hi ${name}!`;
};
console.log(greet2("Vel")); // Hi Vel!

// Method 3:- Arrow Function (ES6)
/*
Syntax:
  let fnName = (param1, param2) => expression;
  let fnName = (param1, param2) => {
    return value;
  };
*/
let greet3 = (name) => `Hey ${name}!`;
console.log(greet3("Vel")); // Hey Vel!

// Method 4:- Named Function Expression
/*
Syntax:
  let fnName = function innerName(param) {
    return value;
  };
*/
let factExpr = function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1); // innerName used for recursion
};
console.log(factExpr(5)); // 120

// Method 5:- Immediately Invoked Function Expression (IIFE)
/*
Syntax:
  (function() {
    // runs immediately
  })();
*/
(function() {
  console.log("IIFE runs immediately!");
})();

// IIFE with arrow function
(() => {
  console.log("Arrow IIFE!");
})();

// Method 6:- Constructor Function (new Function)
/*
Syntax:
  let fnName = new Function("param1", "param2", "return param1 + param2");
*/
let addConstructor = new Function("a", "b", "return a + b");
console.log(addConstructor(3, 4)); // 7


// ─────────────────────────────────────────────
// FUNCTION PARAMETERS
// ─────────────────────────────────────────────
console.log("--- Parameters ---");

// Method 1:- Default Parameters
/*
Syntax:
  function fnName(param = defaultValue) { }
*/
function multiply(a, b = 2) {
  return a * b;
}
console.log(multiply(5));    // 10  (b uses default 2)
console.log(multiply(5, 3)); // 15  (b = 3)

// Method 2:- Rest Parameters (...args) — collect multiple values
/*
Syntax:
  function fnName(...args) {
    // args is an array
  }
*/
function addAll(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log(addAll(1, 2, 3, 4)); // 10
console.log(addAll(10, 20));     // 30

// Rest with normal params
function introduce1(greeting, ...names) {
  return `${greeting}: ${names.join(", ")}`;
}
console.log(introduce1("Hello", "Vel", "Ram", "Kumar")); // Hello: Vel, Ram, Kumar

// Method 3:- Arguments Object (only in regular functions, not arrow)
/*
Syntax:
  function fnName() {
    console.log(arguments); // array-like object
  }
*/
function showArgs() {
  console.log(arguments[0]);    // first argument
  console.log(arguments.length); // count of args
}
showArgs("Vel", 21, "Chennai"); // Vel then 3

// Method 4:- Destructured Parameters
/*
Syntax:
  function fnName({ key1, key2 }) { }   // object destructure
  function fnName([val1, val2]) { }     // array destructure
*/
function displayUser({ name, age, city = "Unknown" }) {
  return `${name}, ${age}, ${city}`;
}
console.log(displayUser({ name: "Vel", age: 21, city: "Chennai" })); // Vel, 21, Chennai
console.log(displayUser({ name: "Ram", age: 22 }));                  // Ram, 22, Unknown

function sumFirst([first, second]) {
  return first + second;
}
console.log(sumFirst([10, 20, 30])); // 30


// ─────────────────────────────────────────────
// RETURN STATEMENT
// ─────────────────────────────────────────────
console.log("--- Return ---");

// Single return value
function square1(n) {
  return n * n;
}
console.log(square1(5)); // 25

// Return object
function createProfile(name, age) {
  return { name, age }; // shorthand
}
console.log(createProfile("Vel", 21)); // { name: 'Vel', age: 21 }

// Return array
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
let [minVal, maxVal] = minMax([3, 1, 7, 2, 9]);
console.log(minVal, maxVal); // 1 9

// Early return (guard clause)
function divide(a, b) {
  if (b === 0) return "Cannot divide by zero";
  return a / b;
}
console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // Cannot divide by zero

// Function with no return → returns undefined
function sayHi1(name) {
  console.log(`Hi ${name}`);
}
let noReturnOutput = sayHi1("Vel"); // Hi Vel
console.log(noReturnOutput);        // undefined


// ─────────────────────────────────────────────
// ARROW FUNCTIONS — DEEP DIVE
// ─────────────────────────────────────────────
console.log("--- Arrow Functions ---");

// No params → use ()
let sayHello = () => "Hello World";
console.log(sayHello()); // Hello World

// One param → () optional
let doubleNum = n => n * 2;
console.log(doubleNum(5)); // 10

// Multiple params → need ()
let addNums = (a, b) => a + b;
console.log(addNums(3, 4)); // 7

// Multi-line → use {} and return
let calcArea = (length, breadth) => {
  let area = length * breadth;
  return area;
};
console.log(calcArea(5, 3)); // 15

// Return object → wrap in ()
let makeObj = (name, age) => ({ name, age });
console.log(makeObj("Vel", 21)); // { name: 'Vel', age: 21 }

// Arrow function has NO own 'this' — inherits from outer scope
let timerObj = {
  count: 0,
  start() {
    let tick = () => {
      this.count++; // 'this' refers to timerObj ✅
    };
    tick();
    tick();
    console.log(this.count); // 2
  }
};
timerObj.start();


// ─────────────────────────────────────────────
// HIGHER ORDER FUNCTIONS
// ─────────────────────────────────────────────
console.log("--- Higher Order Functions ---");

// Function that TAKES another function as argument
/*
Syntax:
  function higherFn(callback) {
    callback();
  }
*/
function applyOperation(a, b, operation) {
  return operation(a, b);
}
console.log(applyOperation(10, 5, (x, y) => x + y)); // 15
console.log(applyOperation(10, 5, (x, y) => x * y)); // 50

// Function that RETURNS another function
/*
Syntax:
  function outerFn(param) {
    return function innerFn() { };
  }
*/
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
let doubleIt = multiplier(2);
let tripleIt = multiplier(3);
console.log(doubleIt(5));  // 10
console.log(tripleIt(5));  // 15


// ─────────────────────────────────────────────
// CALLBACK FUNCTIONS
// ─────────────────────────────────────────────
console.log("--- Callback Functions ---");

/*
Syntax:
  function mainFn(callback) {
    callback();
  }
  mainFn(function() { });
  mainFn(() => { });
*/

// Basic callback
function processData(data, callback) {
  let processed = data.toUpperCase();
  callback(processed);
}
processData("hello vel", function(result) {
  console.log(result); // HELLO VEL
});

// Callbacks with array methods
let numArr = [1, 2, 3, 4, 5];

let evenNums = numArr.filter(n => n % 2 === 0);
console.log(evenNums); // [2, 4]

let squaredNums = numArr.map(n => n * n);
console.log(squaredNums); // [1, 4, 9, 16, 25]

let totalSum = numArr.reduce((acc, n) => acc + n, 0);
console.log(totalSum); // 15

// setTimeout callback
setTimeout(() => {
  console.log("Runs after 0ms delay");
}, 0);


// ─────────────────────────────────────────────
// CLOSURES
// ─────────────────────────────────────────────
console.log("--- Closures ---");

/*
  A closure is when an inner function remembers
  variables from its outer function even after
  the outer function has finished executing.

Syntax:
  function outer() {
    let variable = value;
    return function inner() {
      return variable; // remembers outer variable
    };
  }
*/

// Basic closure
function outerCounter() {
  let count = 0; // private variable
  return function() {
    count++;
    return count;
  };
}
let counter1 = outerCounter();
let counter2 = outerCounter(); // independent closure
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3
console.log(counter2()); // 1  (separate, not affected)

// Closure for data privacy (like private variable)
function bankAccount(initialBalance) {
  let balance = initialBalance; // private — not accessible outside
  return {
    deposit(amount) {
      balance += amount;
      return `Deposited ${amount}. Balance: ${balance}`;
    },
    withdraw(amount) {
      if (amount > balance) return "Insufficient funds";
      balance -= amount;
      return `Withdrew ${amount}. Balance: ${balance}`;
    },
    getBalance() {
      return balance;
    }
  };
}
let myAccount = bankAccount(1000);
console.log(myAccount.deposit(500));  // Deposited 500. Balance: 1500
console.log(myAccount.withdraw(200)); // Withdrew 200. Balance: 1300
console.log(myAccount.getBalance());  // 1300


// ─────────────────────────────────────────────
// RECURSION
// ─────────────────────────────────────────────
console.log("--- Recursion ---");

/*
  A function that calls itself.
  Must have:
  1. Base case     → stops recursion
  2. Recursive case → calls itself with smaller input

Syntax:
  function fn(n) {
    if (baseCase) return value;    // stop
    return fn(smallerInput);       // recurse
  }
*/

// Factorial
function factCalc(n) {
  if (n <= 1) return 1;         // base case
  return n * factCalc(n - 1);  // recursive case
}
console.log(factCalc(5)); // 120 → 5*4*3*2*1

// Sum of digits
function sumDigits(n) {
  if (n < 10) return n;
  return (n % 10) + sumDigits(Math.floor(n / 10));
}
console.log(sumDigits(1234)); // 10 → 1+2+3+4

// Power
function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}
console.log(power(2, 8)); // 256

// Flatten nested array using recursion
function flattenArr(arr) {
  let flatResult = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      flatResult = flatResult.concat(flattenArr(item)); // recurse
    } else {
      flatResult.push(item);
    }
  }
  return flatResult;
}
console.log(flattenArr([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]


// ─────────────────────────────────────────────
// PURE FUNCTIONS
// ─────────────────────────────────────────────
console.log("--- Pure Functions ---");

/*
  Pure function:
  1. Same input → always same output
  2. No side effects (does not modify outside variables)
*/

// Pure function ✅
function addPure(a, b) {
  return a + b; // no side effects
}
console.log(addPure(3, 4)); // always 7

// Impure function ❌ (modifies external state)
let globalCount = 0;
function addImpure(a, b) {
  globalCount++; // side effect — modifies outer variable!
  return a + b;
}
console.log(addImpure(3, 4)); // 7
console.log(globalCount);     // 1 (changed!)


// ─────────────────────────────────────────────
// FUNCTION SCOPE
// ─────────────────────────────────────────────
console.log("--- Scope ---");

/*
  Variables declared inside a function
  are NOT accessible outside it.
*/
let globalVar = "I am global";

function scopeDemo() {
  let localVar = "I am local";
  console.log(globalVar); // accessible ✅
  console.log(localVar);  // accessible ✅
}
scopeDemo();
// console.log(localVar); // ❌ ReferenceError if uncommented

// Block scope with let/const vs var
function blockScopeDemo() {
  if (true) {
    let blockLet   = "block scoped";
    const blockConst = "also block scoped";
    var funcVar    = "function scoped"; // var leaks out of block!
    console.log(blockLet);   // block scoped
    console.log(blockConst); // also block scoped
  }
  // console.log(blockLet); // ❌ ReferenceError
  console.log(funcVar); // ✅ function scoped (var leaks)
}
blockScopeDemo();


// ─────────────────────────────────────────────
// HOISTING
// ─────────────────────────────────────────────
console.log("--- Hoisting ---");

/*
  Function Declarations are hoisted fully.
  → Can call BEFORE they are defined.

  Function Expressions and Arrow Functions
  are NOT hoisted.
  → Calling before declaration = Error.
*/

// Declaration → hoisted ✅
console.log(hoistedFn()); // Works fine!
function hoistedFn() {
  return "I am hoisted!";
}

// Expression → NOT hoisted ❌
// console.log(notHoisted()); // TypeError if uncommented
let notHoisted = function() {
  return "I am NOT hoisted";
};
console.log(notHoisted()); // Works only after declaration


// ─────────────────────────────────────────────
// CURRYING
// ─────────────────────────────────────────────
console.log("--- Currying ---");

/*
  Currying transforms a function with multiple arguments
  into a chain of functions each taking one argument.

Syntax:
  function curried(a) {
    return function(b) {
      return function(c) {
        return a + b + c;
      };
    };
  }
  curried(1)(2)(3);
*/

// Normal multi-arg function
function normalAdd(a, b, c) {
  return a + b + c;
}
console.log(normalAdd(1, 2, 3)); // 6

// Curried version
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
console.log(curriedAdd(1)(2)(3)); // 6

// Arrow function curried version (compact)
let curriedArrow = a => b => c => a + b + c;
console.log(curriedArrow(1)(2)(3)); // 6

// Practical use: pre-configured functions
let addTen    = curriedArrow(10);
let addTenFive = addTen(5);
console.log(addTenFive(3)); // 18 → 10+5+3


// ─────────────────────────────────────────────
// MEMOIZATION
// ─────────────────────────────────────────────
console.log("--- Memoization ---");

/*
  Memoization caches the result of expensive calls.
  Same input again → returns cached result (faster).
*/

function memoize(fn) {
  let cache = {};
  return function(...args) {
    let cacheKey = JSON.stringify(args);
    if (cache[cacheKey] !== undefined) {
      console.log(`Cache hit for ${cacheKey}`);
      return cache[cacheKey];
    }
    cache[cacheKey] = fn(...args);
    return cache[cacheKey];
  };
}

function slowSquare(n) {
  return n * n; // imagine this is expensive
}

let fastSquare = memoize(slowSquare);
console.log(fastSquare(5)); // 25 (calculated)
console.log(fastSquare(5)); // 25 (Cache hit!)
console.log(fastSquare(6)); // 36 (calculated)
console.log(fastSquare(6)); // 36 (Cache hit!)


// ─────────────────────────────────────────────
// FUNCTION METHODS: call, apply, bind
// ─────────────────────────────────────────────
console.log("--- call / apply / bind ---");

let personObj = { name: "Vel", city: "Chennai" };

function introduce2(greeting, punctuation) {
  return `${greeting}, I am ${this.name} from ${this.city}${punctuation}`;
}

// call() → pass args one by one
/*
Syntax:
  fn.call(thisArg, arg1, arg2)
*/
console.log(introduce2.call(personObj, "Hello", "!")); // Hello, I am Vel from Chennai!

// apply() → pass args as array
/*
Syntax:
  fn.apply(thisArg, [arg1, arg2])
*/
console.log(introduce2.apply(personObj, ["Hi", "..."])); // Hi, I am Vel from Chennai...

// bind() → returns new function with fixed 'this'
/*
Syntax:
  let boundFn = fn.bind(thisArg, arg1)
*/
let boundIntro = introduce2.bind(personObj, "Hey");
console.log(boundIntro("?")); // Hey, I am Vel from Chennai?

// Practical bind: borrowing method for another object
let student2 = { name: "Ram", city: "Madurai" };
let studentIntro = introduce2.bind(student2, "Greetings");
console.log(studentIntro(".")); // Greetings, I am Ram from Madurai.


// ─────────────────────────────────────────────
// GENERATOR FUNCTIONS
// ─────────────────────────────────────────────
console.log("--- Generator Functions ---");

/*
  Generator functions can pause and resume execution.
  Use function* and yield keyword.

Syntax:
  function* genName() {
    yield value1;
    yield value2;
  }
  let gen = genName();
  gen.next(); // { value: value1, done: false }
*/

function* countUp() {
  yield 1;
  yield 2;
  yield 3;
}
let genCounter = countUp();
console.log(genCounter.next()); // { value: 1, done: false }
console.log(genCounter.next()); // { value: 2, done: false }
console.log(genCounter.next()); // { value: 3, done: false }
console.log(genCounter.next()); // { value: undefined, done: true }

// Infinite generator (generates IDs on demand)
function* idGenerator() {
  let genId = 1;
  while (true) {
    yield genId++;
  }
}
let getId = idGenerator();
console.log(getId.next().value); // 1
console.log(getId.next().value); // 2
console.log(getId.next().value); // 3


// ─────────────────────────────────────────────
// ASYNC FUNCTIONS (async / await)
// ─────────────────────────────────────────────
console.log("--- Async / Await ---");

/*
  async function always returns a Promise.
  await pauses execution until Promise resolves.

Syntax:
  async function fnName() {
    let result = await somePromise;
    return result;
  }
*/

// Simulate async operation
function fetchUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "Vel" });
    }, 100);
  });
}

async function loadUser() {
  let fetchedUser = await fetchUser(1);
  console.log(fetchedUser); // { id: 1, name: 'Vel' }
}
loadUser();

// async with try/catch for error handling
async function loadUserSafe(userId) {
  try {
    let fetchedUser2 = await fetchUser(userId);
    console.log(`Loaded: ${fetchedUser2.name}`); // Loaded: Vel
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}
loadUserSafe(1);


// ─────────────────────────────────────────────
// FUNCTION COMPOSITION
// ─────────────────────────────────────────────
console.log("--- Function Composition ---");

/*
  Combining multiple functions where output of
  one function becomes input of the next.
*/

const doubleVal = x => x * 2;
const addOne    = x => x + 1;
const squareVal = x => x * x;

// Manual composition
let manualCompose = x => squareVal(addOne(doubleVal(x)));
console.log(manualCompose(3)); // doubleVal(3)=6 → addOne(6)=7 → squareVal(7)=49

// compose utility (right to left execution)
function compose(...fns) {
  return function(x) {
    return fns.reduceRight((acc, fn) => fn(acc), x);
  };
}
let transformCompose = compose(squareVal, addOne, doubleVal);
console.log(transformCompose(3)); // 49

// pipe utility (left to right execution)
function pipe(...fns) {
  return function(x) {
    return fns.reduce((acc, fn) => fn(acc), x);
  };
}
let transformPipe = pipe(doubleVal, addOne, squareVal);
console.log(transformPipe(3)); // 49


// ─────────────────────────────────────────────
// SPREAD IN FUNCTION CALLS
// ─────────────────────────────────────────────
console.log("--- Spread in Function Calls ---");

/*
Syntax:
  fn(...array)  // spreads array as individual arguments
*/
function sumThree(a, b, c) {
  return a + b + c;
}
let spreadNums = [1, 2, 3];
console.log(sumThree(...spreadNums)); // 6

// Math functions with spread
let numList = [5, 2, 9, 1, 7];
console.log(Math.max(...numList)); // 9
console.log(Math.min(...numList)); // 1


// ─────────────────────────────────────────────
// DECLARATION vs EXPRESSION vs ARROW
// ─────────────────────────────────────────────
console.log("--- Comparison ---");

/*
┌───────────────────┬────────────┬────────────┬──────────────┐
│ Feature           │ Declaration│ Expression │ Arrow        │
├───────────────────┼────────────┼────────────┼──────────────┤
│ Hoisted           │ ✅ Yes     │ ❌ No      │ ❌ No        │
│ Own 'this'        │ ✅ Yes     │ ✅ Yes     │ ❌ No        │
│ arguments object  │ ✅ Yes     │ ✅ Yes     │ ❌ No        │
│ Used as method    │ ✅ Yes     │ ✅ Yes     │ ⚠  Avoid     │
│ Shorter syntax    │ ❌ No      │ ❌ No      │ ✅ Yes       │
│ Can be named      │ ✅ Yes     │ ✅ Yes     │ ❌ No        │
└───────────────────┴────────────┴────────────┴──────────────┘
*/

function declaredFn(x) { return x * 2; }
let expressedFn = function(x) { return x * 2; };
let arrowFn     = x => x * 2;

console.log(declaredFn(5));  // 10
console.log(expressedFn(5)); // 10
console.log(arrowFn(5));     // 10


// ============================================================
// QUICK REFERENCE SUMMARY
// ============================================================
/*
┌──────────────────────────────┬──────────────────────────────────────────┐
│ Task                         │ Syntax                                   │
├──────────────────────────────┼──────────────────────────────────────────┤
│ Function declaration         │ function fn(p) { return p; }             │
│ Function expression          │ let fn = function(p) { return p; };      │
│ Arrow (single line)          │ let fn = (p) => p;                       │
│ Arrow (multi-line)           │ let fn = (p) => { return p; };           │
│ Arrow (return object)        │ let fn = (p) => ({ key: p });            │
│ Default parameter            │ function fn(p = "default") { }           │
│ Rest parameter               │ function fn(...args) { }                 │
│ Destructured param (object)  │ function fn({ key1, key2 }) { }          │
│ Destructured param (array)   │ function fn([v1, v2]) { }                │
│ IIFE                         │ (function() { })()                       │
│ Arrow IIFE                   │ (() => { })()                            │
│ Callback                     │ fn(anotherFn)                            │
│ Higher order (takes fn)      │ function hof(cb) { cb(); }               │
│ Higher order (returns fn)    │ function outer() { return () => {}; }    │
│ Closure                      │ inner fn accessing outer fn's variable   │
│ Recursion                    │ function fn(n) { return fn(n-1); }       │
│ call()                       │ fn.call(thisArg, arg1, arg2)             │
│ apply()                      │ fn.apply(thisArg, [arg1, arg2])          │
│ bind()                       │ let bound = fn.bind(thisArg, arg1)       │
│ Generator                    │ function* gen() { yield value; }         │
│ Async/await                  │ async function fn() { await promise; }   │
│ Spread in call               │ fn(...array)                             │
│ Currying                     │ let fn = a => b => c => a + b + c       │
│ Compose (right to left)      │ compose(f, g, h)(x) = f(g(h(x)))        │
│ Pipe (left to right)         │ pipe(f, g, h)(x) = h(g(f(x)))           │
│ Memoize                      │ cache result by JSON.stringify(args)     │
└──────────────────────────────┴──────────────────────────────────────────┘
*/