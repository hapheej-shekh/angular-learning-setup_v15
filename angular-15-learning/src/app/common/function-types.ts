
/* We can access Hoisted function before their declaration
    
sayHello(); // ✅ Works because it's hoisted

function sayHello() {
  console.log('Hello!');
}


greet(); // ❌ Error: Cannot access 'greet' before initialization

const greet = function () {
  console.log('Hi');
};
*/


/*  ✅ 1. Function Declaration (Named Function)
    It is Hoisted, Has its own this, Can be recursive (function f() { f(); })
*/
function sayHello(name: string) {
  return `Hello, ${name}`;
}


/*  ✅ 2. Function Expression
    ❌ Not hoisted, Can be anonymous or named, Often used for assigning to variables or passing as arguments
*/
const greet = function(name: string) {
  return `Hello, ${name}`;
};


/*  ✅ 3. Arrow Function (ES6)
    ❌ Not hoisted, ❗ this is lexically bound (inherits from enclosing context),
    No arguments, super, or new.target, Great for callbacks, observables, and promises
*/
const arrowFun = (name: string) => {
    
    return `Hello, ${name}`;
}


/*  ✅ 4. Immediately Invoked Function Expression (IIFE)
    Executes as soon as it's defined, Often used for creating private scopes
*/
(function() {
  console.log('Runs immediately');
})();


/*  ✅ 5. Constructor Function (Before ES6 classes)
    Used with new, this refers to the created instance
*/
function Person(name: string) {
    return name;
}
const p = Person('Arham'); 
//const p = new Person('Arham'); for class


/*  ✅ 6. Generator Function
    Returns an iterator, Uses yield, Useful in complex async flows or data streaming
*/
function* numberGenerator() {
  yield 1;
  yield 2;
}
const gen = numberGenerator();


/*  ✅ 7. Async Function
    Always returns a Promise, Use await inside
*/
async function fetchData() {
  const res = await fetch('/api/data');
  return res.json();
}


/*  ✅ 8. Method Shorthand in Objects or Classes
    Compact syntax, Not an arrow function — has its own this
*/
const obj = {

  sayHi() {
    return 'Hi!';
  }
};

class MyClass {

  sayHi() {
    return 'Hi!';
  }
}
