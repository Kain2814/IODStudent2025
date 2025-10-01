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

function printGreeting(name) { // this is an undecorated function
    console.log('Hello,' + name);
}
printGreeting('Undecorated');

function loggingTimingDecorator(originalFunction) { // decorator takes a function as parameter
    return function (name) { // and returns that function with extra bits - timing/logging
        console.time('Function timer'); // start a timer
        console.log(`\nExecuting function ...`) // log a message
        const result = originalFunction(name); // execute the original function and store result
        console.timeEnd('Function timer'); // stop the timer
        return result; // return the result of running the original function
    }
}

// // returns the orignal function WITH the timing/logging features included
const decoratedPrintGreeting = loggingTimingDecorator(printGreeting);
decoratedPrintGreeting('Decorated') // we can still call the decorated version in the same way

// -caching (slide 18) notes

function slow(x) {
    // there can be a time-consuming job here, like adding up to a large number
    let random = 0, goal = Math.floor(Math.random() * x * 1_000_000); // random large number
    console.log(`slow(${x}): randomly generated goal for ${x * 1_000_000} is ${goal}`);
    for (let i = 0; i < goal; i++) random++;
    return random; // return large number after counting to it
}
function cachingDecorator(originalFunction) { // decorator takes a function as parameter
    const cache = new Map(); // can also include outer environment variables via a closure

    return function(x) { // decorator returns same function with extra bits - caching
        if (cache.has(x)) { // if the key exists in the cache, 
            console.log('returned cached value for' + x); return cache.get(x); // read and return the result from it
        }
        let result = originalFunction(x) // otherwise, call the original function and store the result
        cache.set(x, result); // then cache (remember) the result for next time
        return result;
    };
}
const fast = cachingDecorator(slow) // we can decorate the original slow function to use caching and make it fast
const fastTimed = loggingTimingDecorator(fast) // we can decorate the fast version to include timing for testing
fastTimed(8) // first time will be slow because its uncached (new so it cant remember yet)
fastTimed(8) // but every time after this will be much faster because result is then cached.



