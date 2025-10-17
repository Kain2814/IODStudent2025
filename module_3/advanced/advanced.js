// Advanced Notes - Slides (2 - ???)

// Variable Scope - Lexical Environment (Slide 3)
// In JS, every FUNCTION and CODE BLOCK {...} has its own SCOPE
// and can define its own LEXICAL(wich means local) ENVIRONMENT with its own 
// --- variables (if declared with LET or CONST). 
// ----> This environment is stored as a hidden object <----

// Example of Vairable in Lexical Environment: 

//  let globalVariableCat = 'cat';
//  function myFunction() {
//     let localVariableDog = 'dog'
//     return 'global function with local scope variable' +localVariableDog;
//  }
//  console.log(localVariableDog) // this is going to error because localVariableDog is not defined
// ------------------ Variable Scope - Closures ( Slide 5 -6 )-----------------------------------------------

//  function makeAdder(x) {
//     return function adder(y) {
//         return x + y;
//     }
//  }
 
//  const add5 = makeAdder(5)

//  console.log( add5(10))
// Closures are useful because we can associate the current data from the lexical environment
// ------ with a function that uses that data. 
// Closures are created every time a function is created, at function creation time.

// function makeHeading(hTag) { // every call to makeHeading could have different values for hTag
//     return function(title) {    // // unnamed closure function, can access value of hTag when created
//         return `<${hTag}>${title}</${hTag}>`
//     }
// }

// const getH1 = makeHeading('h1') // sets hTag to h1, creates new instance of closure in getH1
// const getH2 = makeHeading('h2') // sets hTag to h2, creates separate instance of closure in getH2

// console.log( getH1('Heading 1')) // sets title to Heading 1 inside <h1>: <h1>Heading 1</h1>
// console.log(getH2 ('Heading 2')) // sets title to Heading 2 inside <h2>: <h2>Heading 2</h2>

// -------------------------------> Function Object (Slides 7 - 9) <---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// In JS, functions are objects (callable "action objects").
// ----- we can not only call them, but also treat them as objects, e.g.
// add/remove properties, pass by reference, etc. 

// -------------> name Property (slide 7) <-----------------
// In the specification, this feature is called a "contextual name". If the function does not provide one, then in an assignment it is figured out from the context.

// Example:


// function sayHiDefn() { console.log('Hi (function definition)'); } // named function
// const sayHiExpn = function() { console.log('Hi (function expression)'); } // named variable
// const sayHiArrow = () => console.log('Hi (arrow function)'); // named variable

// //.name property exists as a built-in default property for all functions
// console.log(sayHiDefn.name) // sayHiDefn - uses explicit function name
// console.log(sayHiExpn.name) // sayHiExpn - figures out name from context
// console.log(sayHiArrow.name) // sayHiArrow - figures out name from context

// --------------> length Property (Slide 8) <--------------------------------------------------

// function oneParam(a) {
//     console.log(`This function has a single parameter: ` +a)
// }
// function twoParams(a, b) {
//     console.log(`This function has two parameters: ${a} and ${b}`)
// }
// function manyParams(a, b, ...extras) {
//     console.log(`This function has unlimited parameters: ${a} and ${b} and ${extras}`)
// }

// console.log(oneParam.length)
// console.log(twoParams.length)
// console.log(manyParams.length)

// -------------> custom Properties (slid 9) <--------------------------------------------------------------------------------------

// function sayHi() {
//     console.log('Hi');
//     sayHi.counter++; // increment the custom counter property every time the function is called
// }
// sayHi.counter = 0  // initialize the counter to 0 before calling it

// sayHi() // Hi - calls the function and increments the counter
// sayHi() // Hi - calls the function and increments the counter again
// console.log(`Called ${sayHi.name} ${sayHi.counter} times`) // = Called sayHi 2 times


// ------------------> didnt take notes from (slide 10 - 16) < ---------------------------------------------


// ------------------------------> Decorators and forwarding <-----------------------------------------------------------------------------------------

// Use case: adding logging/timing information

// function printGreeting(name) { // this is an undecorated function
//     console.log('Hello,' + name);
// }
// printGreeting('Undecorated');

// function loggingTimingDecorator(originalFunction) { // decorator takes a function as parameter
//     return function (name) { // and returns that function with extra bits - timing/logging
//         console.time('Function timer'); // start a timer
//         console.log(`\nExecuting function ...`) // log a message
//         const result = originalFunction(name); // execute the original function and store result
//         console.timeEnd('Function timer'); // stop the timer
//         return result; // return the result of running the original function
//     }
// }

// // returns the orignal function WITH the timing/logging features included
// const decoratedPrintGreeting = loggingTimingDecorator(printGreeting);
// decoratedPrintGreeting('Decorated') // we can still call the decorated version in the same way

// // -caching (slide 18) notes

// function slow(x) {
//     // there can be a time-consuming job here, like adding up to a large number
//     let random = 0, goal = Math.floor(Math.random() * x * 1_000_000); // random large number
//     console.log(`slow(${x}): randomly generated goal for ${x * 1_000_000} is ${goal}`);
//     for (let i = 0; i < goal; i++) random++;
//     return random; // return large number after counting to it
// }
// function cachingDecorator(originalFunction) { // decorator takes a function as parameter
//     const cache = new Map(); // can also include outer environment variables via a closure

//     return function(x) { // decorator returns same function with extra bits - caching
//         if (cache.has(x)) { // if the key exists in the cache, 
//             console.log('returned cached value for' + x); return cache.get(x); // read and return the result from it
//         }
//         let result = originalFunction(x) // otherwise, call the original function and store the result
//         cache.set(x, result); // then cache (remember) the result for next time
//         return result;
//     };
// }
// const fast = cachingDecorator(slow) // we can decorate the original slow function to use caching and make it fast
// const fastTimed = loggingTimingDecorator(fast) // we can decorate the fast version to include timing for testing
// fastTimed(8) // first time will be slow because its uncached (new so it cant remember yet)
// fastTimed(8) // but every time after this will be much faster because result is then cached.


// -------------------- did not take notes from (Slides 19 - 25) -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function Product(name, price) {
// this.name = name;
// this.price = price;
// this.salePrice = price * .9; // 10% off
// }

// function Food(name, price) {
// Product.call(this, name, price); // inherits from Product with custom context
// this.category = 'food';
// }

// const cheese = new Food('cheese', 5);
// console.log(`${cheese.name} is a ${cheese.category} and costs $${cheese.price} ($${cheese.salePrice} on sale)`);


// Function binding (Issue of losing "this") (Slide 25)
// ------ if a function relies on context (this) and is passed as a reference
// instead of being CALLED directly, its context is lost

// const user = {
//     name: 'John', 
//     sayHi() {
//         console.log(`Hi, ${this.name}`)
//     }
// }
// user.sayHi() // when called directly, works! = Hi, John
// setTimeout(user.sayHi, 1000) // when passed as a reference, this FAILS = Hi, Undefined


// Function binding (Solution 1 for missing "this") (slde 26)
// ---- We can (wrap) it (inside) a function.
// This allows the context to come from BEFORE THE DOT and references to this work as expected

// const user = {
//     name: 'John', 
//     sayHi() {
//         console.log(`Hi, ${this.name}`)
//     }
// }

// // setTimeout( function() { user.sayHi(); }, 1000 ) // this works! 
// // setTimeout ( () => user.sayHi(), 1000 ) // using arrow function (preferred)



// Function binding  (Solution 2 for missing "this") (slide 27)
// ------ we can explicitly bind the right "context" into the (function) reference

// -----basic syntax------> const boundFunc = func.bind(context);

// const user = {
//     name: 'John', 
//     sayHi() {
//         console.log(`Hi, ${this.name}`)
//     }
// }

// const boundSayHi = user.sayHi.bind(user)
// setTimeout( boundSayHi, 1000)


// (skipped slide 28)


// Prototypal inheritance [[Prototype]] property (slide 30)
// ---- In JS, objects inherit properties and functions from a prototype stored in a special hidden property
// [[Prototype]], that is either NULL or REFERENCES another object (such as Object)
// ---- It can be accessed in a few ways. Object.getPrototypeof is the most reliable:

// let animal = {eats: true, sleeps: true, legs: 4, mammal: true}; // inherist from Object prototype

// let animalPrototype = Object.getPrototypeOf(animal); // this is the recommended way to get prototype

// console.log(animalPrototype); // BUT printing it via console.log is incomplete

// console.log.apply(Object.getOwnPropertyNames(animalPrototype)) // prints all prototype (Object) properties

// -------------------------- Recommended ways to SET a prototype --------------------------------------------

// let rabbit1 = { jumps: true };
// Object.setPrototypeOf(rabbit1, animal); // NEW recommended way, uses default property descriptor settings

// let rabbit2 = Object.create(animal, { // creates a new object from prototype, with custom properties
// jumps: { // name of custom 'own' property for rabbit object
// value: true, // property descriptor to set the property value
// enumerable: true // property descriptor to make this enumerable - otherwise jumps won’t be in for...in
// }
// });
// console.log(rabbit1, rabbit2); // { jumps: true } - only prints 'own' properties, not inherited ones
// console.log(rabbit1.legs, rabbit2.legs); // 4 - inherited properties do exist
// for (let prop in rabbit1) console.log(`${prop} is ${rabbit1[prop]}`) // own properties, then inherited ones
// for (let prop in rabbit2) console.log(`${prop} is ${rabbit2[prop]}`) // own properties, then inherited ones

// -------------------------- Constructor Function Prototypes -------------------------------------------------------------------------------------------------------------------------------------------------------
// Constructor functions can also use prototypal inheritance, using a syntax called F.prototype.
// This is a regular property names prototype on F, which is a constructor function with the first letter capitalized. 

// function Rabbit(name) { // <---- constructor function, first letter capitalized by convention
//     this.jumps = true;
//     this.name = name;
// }
// Rabbit.prototype = animal; // sets the prototype to inherit from (same animal object as previous)

// let whiteRabbit = new Rabbit('White Rabbit');
// console.log(whiteRabbit); // { jumps: true, name: 'White Rabbit'} - own properties
// for(let prop in whiteRabbit) console.log(`${prop} is ${whiteRabbit[prop]}`);


// ------------------ Native Prototypes (Slides 33 - 35) -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// The [prototype] property is widely used by the core of JS itself. 
// ------- ALL built-in constructor functions (like Array, Object, Date, String, etc.) use it

// const obj ={} // empty object
// console.log(Object.getPrototypeOf(obj) === Object.prototype ) // true: its prototype is Object prototype
// console.log( Object.getOwnPropertyNames(Object.getPrototypeOf(obj)) ) // inherited properties from prototype



// ------------------ Changing native prototypes (Slide 34) -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Native prototypes can be modified. BUT,BUT,BUT it is NOT recommended to do so unless it is polyfilling. 
// ------ Polyfilling is a piece of code used to provide modern JS functionality on older browser on older browsers that do not natively support it.

// String.prototype.show = function() {
//     console.log(this);
// };
// "BOOM!".show; // BOOM! - we can now call .show() on any string, since they all inherit from the prototype

// // polyfilling for String.prototype
// if(!String.prototype.repeat) { // if there's no such function in the prototype already
//     String.prototype.repeat = function(n) { // define a repeat function to repeat the string n times
//         return new Array(n).join(this); // this uses the string ('this') as glue to join n empty array items
//     };
// }
// console.log("La".repeat(3) ); // this should be LaLaLa

// ------------------ Borrowing from prototypes (slide 35) ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Some methods of native prototypes are often borrowed, to provide the same functionality on a different type of variable.

// define our own join() function for objects
// const obj = {
//     0: "Hello",
//     1: "World",
//     length: 2, // neeeded for join to work
// };

// obj.join = Array.prototype.join; // this adds a join function to THIS object that uses Array.join()
// Object.prototype.join = Array.prototype.join; // adds a join functoin to ALL objects

// console.log(obj.join(',')); // = Hello, World

// ---------------------------- Classes - Slides (36 - 46) -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// In modern JS, we can use classes as a template for creating objects and encapsulating data and functions.
// ---- These are built on prototypes but with extra syntax and features which are useful for OBJECT-ORIENTED programming.

// a class is like a template or blueprint
// class ExampleClass {
//     // each instance of the class will have any properties
//     prop1 = 'value1';
//     prop2 = 'value2';

//     constructor() {
//         // constructor functoin created a new instance of this class
//     }

//     method1() {
//         // methods are functions of the class
//     }
// }

// ------------------------ Object Oriented vs. Functional (Slide 37) -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Object-Oriented Programming (OOP) is a programming paradigm that organizes code into objects,
// ---- each representing an instance of a class with its own data and behavior.
// Objects can interact with each other through defined interfaces

// Functional Programming (FP) is a programming paradigm that organizes code into functions.
// ----- It emphasizes immutability, avoiding side effects, and the use of functions as first-class citizens.

// In simple terms, OOP is centered around objects with specific roles and behaviors
// ---- while FP focuses on functions and their interactions with data.

// Historically FP was the main way of programming.
// ------ Around the 90s OOP became popular with languages such as C++ and Java.
// Today FP has gained favor again and both are used.

// -------------------------- Classes: Inheritance (Slide 38) ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Classes can inherit from a parent class (prototype) via the extends keyword. 

// class Animal {
//     constructor(name) {
//         this.speed = 0; 
//         this.name = name;
//     }
// run(speed) {
// this.speed = speed;
// console.log(`${this.name} runs with speed ${this.speed} kph.`);
// }
// stop() {
// this.speed = 0;
// console.log(`${this.name} stands still.`);
// }
// }
// class Rabbit extends Animal {
// hide() { // custom function, also inherits from Animal
// console.log(`${this.name} hides!`);
// }
// }
// let bunny = new Rabbit('bunny'); // bunny contains properties and methods from Animal and Rabbit
// bunny.run(9); // bunny runs with speed 9 kph.
// bunny.hide(); // bunny hides!
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// class Animal {
//     constructor(name) {
//         this.speed = 0; 
//         this.name = name;
//     }
//     describe() {
//         console.log(`${this.name} is a ${this.type}`)
//     }
//     // .... previous Animal methods go here
// }
// class Rabbit extends Animal {
//     type = 'rabbit';
//     // .... previous Rabbit methods go here
// }

// new Rabbit('bunny').describe() // bunny is a rabbit
// new Animal('fuzzy wuzzy').describe() // fuzzy wuzzy is a animal


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------ Classes: Static methods and properties (slide 42) ---------------------------------------------------------------------------------------------------------------------

// We can assign methods and properties to the class itself, using the [static] keyword. 
// ----- These static methods/properties belong to the class,
// and are inherited by any child classes, but don't belong to any particular instance.

// class Person {
//     static latin = 'persona'; // static (class) property, belongs to class not any instance
//     constructor(name) {
//         this.name = name; // standard property, is unique to each instance of the class
//     }

//     getName() {  // standard method, belongs to each instance of the class
//         return this.name;
//     }

//     static createAnonymous() { // [static] class method, belongs to class not any instance
//         return new Person("Unnamed Person");
//     }
// }
// let jonas = new Person('Jonas')
// console.log( jonas.getName() ) // Jonas - name and getName() belong to an instance of Person
// console.log( jonas.latin ) // undefined - latin property doesn't belong to jonas
// console.log( Person.latin ) // persona - latin property belongs to Person class
// let anon = Person.createAnonymous() // use static (factory) method to create generic Person instance

// -------------------------------- Classes: Protected method & properties slide (43) ---------------------------------------------------------------------------------------------------------------------------------------------------

// class Laptop {
//     _harDiskType = 'HDD'; // protected property, meant to be internal
//     #numCPUFans = 1; // private property, CAN only be used internally by class methods

//     constructor(brand) {
//         this.brand = brand; // public property, can be used externally by instances
//     }
//     isGaming() { return false; } // public method
//     getHDiskType() { return this._harDiskType; } // public method to access protected property
//     _increaseCPUFans() { // protected method
//         if (this.isGaming()) this.#numCPUFans++ // can access private properties internally
//     }
// }
// const macbook = new Laptop('Macbook Pro');
// console.log(macbook.brand) // public property, accessed externally from any instance
// console.log(macbook._harDiskType) // works, not recommended as it violates encapsulation principles
// console.log(macbook.getHDiskType()) // recommended way to access protected property
// console.log(macbook.#numCPUFans) // error: private property is not accessible


// -------------------------------- Classes: private methods and properties (slide 44 and 45)-----------------------------------------------------------------------------------------------------------------------------------------------

// class GamingLaptop extends Laptop {

//     constructor(brand) {
//         super(brand);
//         this._harDiskType = 'SSD';
//         // this.#numCPUFans = 2;
//         this._increaseCPUFans();
//     }
//     isGaming() { return true; }
// }
// const alienware = new GamingLaptop('Alienware');
// //console.log(alienware.#numCPUFans)// error:
// console.log(alienware._harDiskType) // no error: but protected property SHOULD NOT be accessed
// console.log(alienware.getHDiskType()) // better: public method for accessing protected property

// ------------------------------- Classes Summary (Slide 46) -----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Classes are a template for creating objects. They encapsulate data with methods to work on that data.
// ---- Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.
// Key features of classes:
//
// Constructor (called when creating an object as an instance of the class with new)
// Instance methods and fields (defined in the class, belong to an object instance)
// Static methods and fields (defined in the class, belong to the class itself)
// Inheritance (via the extends keyword - children inherit/override methods and fields)
// Encapsulation (via _protected and #private methods/fields)

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------- Error Handling (Slides 47 - 50) -----------------------------------------------------------------------------------------------------------------------------

// ------------------------- try...catch syntax (slide 47)-------------------------------------------------------------------------------------------------
// We can define our own way of handling errors in JS before they crash our code.
// ---- The (try...catch) construct has two main blocks: try, and then catch

// try{
//     // code . . . 
// } catch (err) {
//     // code . . . 
// }

// // Only works for runtime errors, the code must be RUNNABLE as valid

// try{
//     const error = 'mismatched quotes'
// } catch (error) {
//     console.log('will not catch above error')
// }
// SyntaxError: Invalide or unexpected token - doesn't go to catch block

// Non- Syntactical errors can be CAUGHT and handled, allowing other code to run:

// try{
//     noSuchVariable
// } catch (e) { // error is just a variable name. 'error', 'err' or 'e' are all commonly used
//     console.log('caught an error:' + error.message) // all errors have a message property
// }
// // caught an error: noSuchVariable is not defined
// console.log('even though and error occured above, it was caught so code continues');

// // only synchronous errors can be caught; asynchronous errors still cause a crash: 

// try {
//     setTimeout ( () => noSuchVariable. 1000 );
// } catch (error) { // error is just a variable name. 'error', 'err' or 'e' are all commonly used
//     console.log('only synchronous errors!' + error.message)  // all errors have a message property
// }
// console.log('prints synchronous code then throws uncaught asynchronous error after 1 sec');


// --------------------------- Throw Operator (Slide 49) -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// The Throw operator can be used in the try or catch block to intentionally
// --- cause a new or existing error to crash the application for a specific reason:

// function checkJson(json) { // checks json argument for validity and ensures a name property
// try {
// const user = JSON.parse(json); // parse string into object
// if (!user.name) {
// throw new SyntaxError("Incomplete data: no name"); // we can throw our own custom errors
// }
// return true; // returns true (valid json) if no error was thrown above
// } catch (err) {
// if (err instanceof SyntaxError) { // once caught, we can do specific things based on error type
// console.log( "JSON Error: " + err.message );
// } else {
// throw err; // rethrow other non-syntax errors; invalid json will still cause a crash
// }
// }
// return false; // returns false if any error occurred
// }


// checkJson(hello)

// ------------------------- Promises: Chaining (slide 55)----------------------------------------------------------------------------------------------------------------------------------------------------------

// If we have a sequence of asynchronus taks to be performed one after another (as in the previous fetch example)
// ---- we can chain the .then() calls one after the other. Any value returned from .then() is itself a promise:

// let start = 10;
// new Promise((resolve, reject) => {
// resolve(start); // resolve promise successfully with value of 10
// }).then((result) => { // when resolve is called, it triggers .then()
// console.log(result); return result + start; // values returned from .then() are also promises
// }).then((result) => { // so we can chain them together
// console.log(result); return result + start; // increasing result by 10 each time
// }).then((result) => { // we can continue to chain them together
// console.log(result); return result + start; // increasing result by 10 each time
// });
// // prints 10, 20, 30





// ------------------------ Promises: returning promises (slide 56)--------------------------------------------------------------------------------------------------------------------------------------------------------------------



// let start = 1000;
// new Promise( resolve => setTimeout(() => resolve(start), start * 10)
// ).then(result => { // promise handler function inside .then()
// console.log(result); let next = result + start;
// return new Promise( resolve => setTimeout(() => resolve(next), next * 10) );
// }).then(result => { // can explicitly return new promises
// console.log(result); let next = result + start;
// return new Promise( resolve => setTimeout(() => resolve(next), next * 10) );
// }).then(result => { // which use the results of previously resolved promises in the chain
// console.log(result); let next = result + start;
// return new Promise( resolve => setTimeout(() => resolve(next), next * 10) );
// });
// prints 10, 20, 30, but with 100, 200 and 300ms delays in between


// ------------------------ Promises: returning promises (slide 57)------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Promise.all(promises): accepts an iterable of promises, waits for all promises to resolve and returns an array of their
// results. If any of the given promises rejects, it becomes the error of Promise.all, and all other results are ignored.
// Promise.allSettled(promises): accepts an iterable of promises, waits for all promises to settle (either success or failure) and
// returns their results as an array of objects with:

// Promise.race(promises): accepts an iterable of promises, waits for the first promise to settle, and its result/error becomes
// the outcome.
// Promise.any(promises): waits for the first promise to fulfil, and its result becomes the outcome. If all of the given promises
// are rejected, AggregateError becomes the error of Promise.any.
// Promise.resolve(value): makes a resolved promise with the given value.
// Promise.reject(error): makes a rejected promise with the given error.

// ------------------------------------ Promises: aync/await (slide 58)-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// async and await are two important keywords that go hand in hand, and can be used to force promises to behave
// ----- synchronously - ie to wait until the promise resolve before executing the rest of the code body.
// They replce the .then() and .catch() syntax of asynchronously processed promises.


// const promise = new Promise((resolve) => {
// setTimeout( () => resolve('Simple successful promise'), 250 )
// });

// using .then to process asynchronously:
// promise.then(msg => console.log(msg));

// using await to process synchronously (if using await in a function it needs to be async):
// let msg = await promise;
// console.log(msg);


// ------------------------------------------ async function (slide 59)-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// The word async before a function means a function always returns a promise.
// ----- It is required when the funciton body includes an await statement.
// The async and await keywords enable asynchronous, promise-based behavior to be written mroe concisely using synchronous style code.


// async function asyncFunctionDeclaration() { ... } // function declaration syntax

// const asyncFunctionExpression = async function() { ... } // function expression syntax

// const asyncFunctionArrow = async () => { ... } // arrow function syntax

// ----------------------------------------------- await keyword (Slide 60)----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Must be used inside an async function. It makes JavaScript wait until that promise settles and returns its result. Any errors
// --- can be caught with a try...catch.

// async function waitForPromise() { // async function allows synchronous promise handling internally
// // since we have synchronous code and no .catch(), we use try ... catch for errors
// try {
// let promiseResult = await promise; // waits here as long as promise needs to resolve
// console.log(`Success: ${promiseResult}`) // then continues executing other code
// return true;
// } catch(error) {
// console.error(`Failure: ${error.message}`)
// }
// //only gets here if return true above did NOT happen, ie. there was an error
// return false;
// }

// -------------------------------------- Promises: Summary (Slide 61) --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Promises are a way to handle asynchronous operations in JavaScript, allowing you to work with code that will complete in the
// ---- future. Promises can be in one of three states: pending, fulfilled, or rejected.
// Key features of promises:
// Creation: A promise is created using the Promise constructor, which takes a function with resolve and reject parameters,
// ----- which themselves are functions.
// Then and Catch: .then() handles the result when a promise is fulfilled (resolved), and .catch() handles errors when a
// ----- promise is rejected.
// Async/Await: Keywords to handle promises in a cleaner, more intuitive way that resembles synchronous code
// Error Handling: Errors are propagated down the chain, making it easy to manage failures.
// Parallel Execution: Multiple promises can run in parallel using Promise.all() or Promise.race().

// ================================================= End of Module 3 Advanced =============================================================================================================================================================================================================================================================

// ---------------------------------------------------------- Class activity -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Task 1 

// // Function Declaration
// function startPreparing() {
//     console.log("Started preparing the pizza...")
// }

// // Function Expression
// const makeBase = function() {
//     console.log("Made the base")
// }

// //arrow functions being used
// const addSauceAndCheese = () => console.log("Added the sauce and cheese")
// const addToppings = () => console.log("Added the pizza toppings")
// const cookPizza = () => console.log("Cooked the pizza")
// const pizzaReady = () => console.log("pizza is ready!")

// startPreparing()
// makeBase()
// addSauceAndCheese()
// addToppings()
// cookPizza()
// pizzaReady()

// Task 2

// function startPreparing() {
//     setTimeout(() => {
//      console.log("Started preparing the pizza...")
//      makeBase()
//     }, 1000)
// }

// const makeBase = function() {
//     setTimeout(() => {
//      console.log("Made the base")
//      addSauceAndCheese()
//     }, 800)
// } 

// const addSauceAndCheese = () => {
//     setTimeout(() => {
//     console.log("Added the sauce and cheese")
//     addToppings()
//     }, 700)
// } 

// const addToppings = () => {
//     setTimeout(() => {
//     console.log("Toppings have been added")
//     cookPizza()
//     }, 600)
// } 

// const cookPizza = () => {
//     setTimeout(() => {
//     console.log("Cooked the pizza")
//     pizzaReady()
//     }, 1200)
// } 

// const pizzaReady = () => {
//         setTimeout(() => {
//     console.log("Pizza is ready!")
//     },1300)
// } 


// startPreparing()


// Task 3

// function startPreparing () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Started preparing pizza...")
//             resolve()
//         },1000)
//     })
// }

// const makeBase = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Made the base")
//             resolve()
//         },900)
//     })
// }

// const addSauceAndCheese = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Added the sauce and cheese")
//             resolve()
//         },800)
//     })
// }

// const addToppings = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Pizza toppings have been added")
//             resolve()
//         },700)
//     })
// }

// const cookPizza = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Cooked the pizza")
//             resolve()
//         },600)
//     })
// }

// const pizzaReady = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Pizza is ready!")
//             resolve()
//         },500)
//     })
// }

// startPreparing()
// .then(makeBase)
// .then(addSauceAndCheese)
// .then(addToppings)
// .then(cookPizza)
// .then(pizzaReady)
// .then(() => console.log("All steps completed successfully"))

// Task 4

// function startPreparing () {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Started preparing pizza...")
//             resolve()
//         },1000)
//     })
// }

// const makeBase = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Made the base")
//             resolve()
//         },900)
//     })
// }

// const addSauceAndCheese = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Added the sauce and cheese")
//             resolve()
//         },800)
//     })
// }

// const addToppings = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Pizza toppings have been added")
//             resolve()
//         },700)
//     })
// }

// const cookPizza = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Cooked the pizza")
//             resolve()
//         },600)
//     })
// }

// const pizzaReady = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Pizza is ready!")
//             resolve()
//         },500)
//     })
// }

// async function makePizza() {
//     try {
//         await startPreparing()
//         await makeBase()
//         await addSauceAndCheese()
//         await addToppings()
//         await cookPizza()
//         await pizzaReady()
//         console.log("All steps complete")       
//     } catch (e) {
//         console.error("something went wrong")
//     }
// }

// makePizza()

// ============================================= DONE ==================================================================================================================




















