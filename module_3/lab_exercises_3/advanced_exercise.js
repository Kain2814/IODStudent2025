// // // ------------------------------- Question 1 -----------------------------------------------------------------------------------------------------------------------------------------------
// // // ---------------- makeCounter below is a decorator function-----------------------------------------------------------------------------------------------------------------------------------------
// // // ---------- which creates and returns a function that increments a counter.---------------------------------------------------------------------------------------------------------------------------

// // // function makeCounter() {
// // //   let currentCount = 0;
// // //   return function () {
// // //     currentCount++;
// // //     console.log(currentCount);
// // //     return currentCount;
// // //   };
// // // }

// // // let counter1 = makeCounter();

// // // counter1(); // 1 (this is going to be seperate ro independent from counter2)
// // // counter1(); // 2

// // // // a.) Create a second counter "counter2" using the makeCounter function
// // // // ----- and test to see if it remains independent to "counter1"

// // // let counter2 = makeCounter(); // just making another element that calls on makeCounter function again (hopefully)

// // // counter2(); // this should be 1 (since its seperate from counter1)
// // // counter2(); // 2
// // // counter2(); // 3
// // // counter2(); // 4

// // // b.) Modify makeCounter so that it takes an argumnent (startFrom) specifying where
// // // ----- the counter starts from (instead of always starting from 0)

// // // function makeCounter(startFrom) {
// // //     let currentCount = startFrom;

// // //     return function() {
// // //         currentCount++;
// // //         console.log(currentCount)
// // //         return currentCount;
// // //     };
// // // }
// // // console.log("Creating a counter that starts from 4:");
// // // let myCounter = makeCounter(4);
// // // myCounter() // should be 5
// // // myCounter() // 6
// // // myCounter() // 7

// // // c.) Modify makeCounter to make another argument (incrementBy),
// // // ----- which specifies how much each call to counter() should increase the counter value by.

// // // function makeCounter(startFrom, incrementBy = 1) {
// // //     let currentCount = startFrom;

// // //     return function() {
// // //         currentCount += incrementBy; // i think we need to change currentCount++ into this
// // //         console.log(currentCount)
// // //         return currentCount;
// // //     };
// // // }
// // // // console log will have to be structured differently

// // // console.log("counter should start at = 1, and increase the incremement by + 2")
// // // let incremementCounter = makeCounter(1, 2);
// // // incremementCounter() // should be 3??

// // // ------------------------------- Question 2 -----------------------------------------------------------------------------------------------------------------------------------------------
// // // ----------------The following delayMsg function is intended to be used  ---------------------------------------------------------------------------------------------------------------
// // // ---------------------to delay printing a message until some time has passed. --------------------------------------------------------------------------------------------------

// // // a.) What order will the four tests below print in? Why?

// // // function delayMsg(msg)
// // // {
// // // console.log(`This message will be printed after a delay: ${msg}`)
// // // }
// // // setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// // // setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// // // setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// // // delayMsg('#4: Not delayed at all')

// // // Answer: The order will be: 4, 3, 2, 1
// // // Explanation: The first message is printed immediately because it is not delayed.
// // // The second message is printed after 0 milliseconds, which means it will be executed as soon as the current call stack is clear.
// // // The third message is printed after 20 milliseconds, and the fourth message is printed after 100 milliseconds.
// // // Therefore, the order of execution is determined by the delay times specified in the setTimeout function calls.

// // // b.) Rewrite delayMsg as an arrow function

// // // const delayMsgArrow = (msg) => {
// // //     console.log(`This message will be printed after a delay: ${msg}`)
// // // }
// // // setTimeout(delayMsgArrow, 100, '#1: Delayed by 100ms');
// // // setTimeout(delayMsgArrow, 20, '#2: Delayed by 20ms');
// // // setTimeout(delayMsgArrow, 0, '#3: Delayed by 0ms');
// // // delayMsgArrow('#4: Not delayed at all')

// // // // c.) Add a fifth test which uses a large delay time (greater than 10 seconds)

// // // setTimeout(delayMsgArrow, 12000, '#5: Delayed by 12 seconds');

// // // // d.) Use clearTimeout to prevent the fifth test from printing at all.

// // // let timeoutId = setTimeout(delayMsgArrow, 12000, '#5: Delayed by 12 seconds');
// // // clearTimeout(timeoutId);

// // // ------------------------------- Question 3 -----------------------------------------------------------------------------------------------------------------------------------------------
// // // ---------------- Using the following code to test and start with ------------------------------------------------------------------------------------------------------------------

// // function printMe() {
// // console.log('printing debounced message')
// // }
// // printMe = debounce(printMe); //create this debounce function for a)
// // //fire off 3 calls to printMe within 300ms - only the LAST one should print, after
// // 1000ms of no calls
// // setTimeout( printMe, 100);
// // setTimeout( printMe, 200);
// // setTimeout( printMe, 300);

// // // // a.) Create a debounce(func) decorator, which is a wrapper that takes a function func and
// // // suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
// // // pause, the most recent call to func should be executed and any others ignored.

// // function debounce(func) {
// //     let timeoutId;
// //     return function(...args) {
// //         clearTimeout(timeoutId);
// //         timeoutId = setTimeout(() => {
// //             func.apply(this, args);
// //         }, 1000);
// //     };
// // }

// // // b.) Extend the debounce decorator function to take a second argument ms,
// // // which defines the length of the period of inactivity instead of hardcoding to 1000ms

// // function debounce(func, ms = 1000) {
// //     let timeoutId;
// //     return function(...args) {
// //         clearTimeout(timeoutId);
// //         timeoutId = setTimeout(() => {
// //             func.apply(this, args);
// //         }
// // , ms);
// //     };
// // }

// // // c.) Extend debounce to allow the original debounced function printMe to take an argument
// // // ----- msg which is included in the console.log statement.

// // function debounce(func, ms = 1000) {
// //     let timeoutId;
// //     return function(...args) {
// //         clearTimeout(timeoutId);
// //         timeoutId = setTimeout(() => {
// //             func.apply(this, args);
// //         }, ms);
// //     };
// // }
// // function printMe(msg) {
// //     console.log(`printing debounced message: ${msg}`);
// // }
// // printMe = debounce(printMe, 1000);

// // // ------------------------------------- Question 4 -----------------------------------------------------------------------------------------------------------------------------------------------
// // // ------- The Fibonacci sequence of numbers is a famous pattern where the next number in the
// // // ----------------------- sequence is the sum of the previous 2. --------------------------------------------------------------------------------------------------------------
// // //                 (example: e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.)

// // // a.) Write a function printFibonacci() using setInterval that outputs a number in
// // // ----------------- the Fibonacci sequence every second.

// // function printFibonacci() {
// //     let a = 0, b = 1;
// //     console.log(b);
// //     setInterval(() => {
// //         let next = a + b;
// //         console.log(next);
// //         a = b;
// //         b = next;
// //     }, 1000);
// // }

// // // b.) Write a new version printFibonacciTimeouts() that uses nested setTimeout
// // // --------------------------- calls to do the same thing

// // function printFibonacciTimeouts() {
// //     let a = 0, b = 1;
// //     console.log(b);
// //     function printNext() {
// //         let next = a + b;
// //         console.log(next);
// //         a = b;
// //         b = next;
// //         setTimeout(printNext, 1000);
// //     }
// //     setTimeout(printNext, 1000);
// // }

// // // c.) Extend one of the above functions to accept a limit argument, which tells it how many numbers to print before stopping.

// // function printFibonacciWithLimit(limit) {
// //     let a = 0, b = 1;
// //     let count = 1;
// //     console.log(b);
// //     let intervalId = setInterval(() => {
// //         if (count >= limit) {
// //             clearInterval(intervalId);
// //             return;
// //         }
// //         let next = a + b;
// //         console.log(next);
// //         a = b;
// //         b = next;
// //         count++;
// //     }, 1000);
// // }

// // // ------------------------------------- Question 5 -----------------------------------------------------------------------------------------------------------------------------------------------
// // // ------- The following car object has several properties and a method which uses them to print a -----------------------------------------------
// // // ------------------- description. When calling the function normally this works as expected, but using it from -----------------------------------------------
// // // ------------------------------- within setTimeout fails. Why? -------------------------------------------------------------------------------------------------

// // let car = {
// //     make: "Porsche",
// //     model: '911',
// //     year: 1964,
// //     description() {
// //         console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
// //     }
// // };
// // console.log(car)

// // car.description(); // works

// // // preserve `this` when calling later via setTimeout
// // setTimeout(() => car.description(), 200); // works

// // // Answer: The reason the description method fails when called from within  ------------------------------------------------------------------------------------------------------------------
// // // ---------- setTimeout is because the value of this inside the method is not bound to the car object. ---------------------------------------------------------------------------

// // // a.) Fix the setTimeout call by wrapping the call to car.description() inside a function.

// // setTimeout(() => car.description(), 200); // works

// // // b) Change the year for the car by creating a clone of the original and overriding it

// // let newCar = { ...car, year: 2020 };

// // newCar.description(); // This car is a Porsche 911 from 2020

// // // c.) Does the delayed description() call use the original values or the new values from
// // // ----b. Why?

// // // The delayed description() call uses the original values from the car object.
// // // This is because the setTimeout function was set up to call car.description(),
// // // which references the original car object. The newCar object is a separate clone
// // // and does not affect the original car object or its methods.

// // // d.) Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function.

// // setTimeout(car.description.bind(car), 200); // this should work now

// // // e.) Change another property of the car by creating a clone and overriding it, and test that setTimeout still uses the bound value from d.)

// // let anotherCar = { ...car, model: 'Cayenne' };

// // setTimeout(anotherCar.description.bind(anotherCar), 200); // it works!!

// // // ------------------------------------- Question 6 -----------------------------------------------------------------------------------------------------------------------------------------------
// // // ------- Use the Function prototype to add a new delay(ms) function to all functions, which can- -----------------------------------------------
// // // --------------------- be used to delay the call to that function by ms milliseconds. -------------------------------------------------------------------------------------------------

// // function multiply(a, b) {
// // console.log( a * b );
// // }
// // multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

// // // my answer:
// // Function.prototype.delay = function(ms) {
// //     const func = this;
// //     return function(...args) {
// //         const ctx = this;
// //         setTimeout(func.bind(ctx, ...args), ms); // binding the context and arguments worked here
// //     };
// // };

// // // a.) Use the example multiply function below to test it with, as above, and assume that all
// // // ----- delayed functions will take two parameters

// // function multiply(a, b) {
// //     console.log( a * b ); // this is what the question is asking right?
// // }

// // // b.) Use apply to improve your solution so that delayed functions can take any number of parameters

// // Function.prototype.delay = function(ms) {
// //     let func = this;
// //     return function(...args) {
// //         setTimeout(() => {
// //             func.apply(this, args);
// //         }, ms);
// //     };
// // }

// // // c.) Modify multiply to take 4 parameters and multiply all of them, and test that your
// // // ------------ delay prototype function still works.

// // function multiply(a, b, c, d) {
// //     console.log( a * b * c * d );
// // }
// // multiply.delay(500)(2, 3, 4, 5); // should print 120 after 500 milliseconds

// // // ---------------------------------------------------------- Question 7 -----------------------------------------------------------------------------------------------------------------------------------------------
// // // ---------------------------- The following DigitalClock class uses an interval to print the time every second once started, until stopped -----------------------------------------------------------------------------

// // class DigitalClock {
// // constructor(prefix) {
// // this.prefix = prefix;
// // }
// // display() {
// //     let date = new Date();
// // //create 3 variables in one go using array destructuring
// //     let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];

// //     if (hours < 10) hours = '0' + hours;
// //     if (mins < 10) mins = '0' + mins;
// //     if (secs < 10) secs = '0' + secs;
// //     console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
// // }

// // stop() {
// // clearInterval(this.timer);
// // }

// // start() {
// //     this.display();
// //     this.timer = setInterval(() => this.display(), 1000);
// //     }
// // }
// // const myClock = new DigitalClock('my clock:')
// // myClock.start()

// // // a.) Create a new class PrecisionClock that inherits from DigitalClock and adds the
// // // ---- parameter precision – the number of ms between 'ticks'.
// // // This precision parameter should default to 1 second if not supplied.

// // class PrecisionClock extends DigitalClock {
// //     constructor(prefix, precision = 1000) {
// //         super(prefix);
// //         this.precision = precision;
// //     }
// //     start() {
// //         this.display();
// //         this.timer = setInterval(() => this.display(), this.precision);
// //     }
// // }

// // // b.) Create a new class AlarmClock that inherits from DigitalClock and adds the
// // // ----- parameter wakeupTime in the format hh:mm.
// // // When the clock reaches this time, it should print a "Wake Up" message and stop ticking.
// // // This wakeupTime parameter should default to '07:00' if not supplied.

// // class AlarmClock extends DigitalClock {
// //     constructor(prefix, wakeupTime = '07:00') {
// //         super(prefix);
// //         this.wakeupTime = wakeupTime;
// //     }
// //     start() {
// //         this.display();
// //         this.timer = setInterval(() => {
// //             this.display();
// //             let date = new Date();
// //             let [hours, mins] = [date.getHours(), date.getMinutes()];
// //             let currentTime = `${hours < 10 ? '0' + hours : hours}:${mins < 10 ? '0' + mins : mins}`;
// //             if (currentTime === this.wakeupTime) {
// //                 console.log("Wake Up");
// //                 this.stop();
// //             }
// //         }, 1000);
// //     }
// // }

// // ------------------------------------------------------ Question 8 -----------------------------------------------------------------------------------------------------------------------------------------------
// // Using the following starter code:

// // function orderItems(itemName) {
// //     return `Order placed for: ${itemName}`;
// // }
// // // create a decorated version of the original function
// // const validatedOrderItem = validateStringArg(orderItems);
// // console.log(validatedOrderItem("Apple Watch")); // should run the function
// // console.log(validatedOrderItem(123)); // should throw an error

// // // a.) Create a decorator function validateStringArg(fn) which will validate an argument passed to fn
// // // ----- to ensure that it is a string, throwing an error if not.

// // function validateStringArg(func) {
// //     return function(arg) {
// //         if (typeof arg !== 'string') {
// //             throw new Error('Invalid argument: argument must be a string');
// //         }
// //         return func(arg);
// //     };
// // }

// // // should throw an error
// // try {
// //     console.log(validatedOrderItem(123));
// // } catch (e) {
// //     console.log("Caught expected error: " + e.message);
// // }

// // // b) Extend orderItems to use the ... rest operator, allowing multiple item name
// // // ----- arguments, and include them all in the returned string

// // function orderItemsMultiple(...itemNames) {
// //     return `Order placed for: ${itemNames.join(', ')}`;
// // }
// // const validatedOrderItemsMultiple = validateStringArgs(orderItemsMultiple);
// // console.log(validatedOrderItemsMultiple("iPhone", "iPad", "MacBook"));

// // // c.) Extend the decorator function to validate as strings all arguments passed to fn

// // function orderItems(...items) {
// //   return `Order placed for: ${items.join(', ')}`;
// // }

// // function validateStringArg(func) {
// //   return function(...args) {
// //     for (const arg of args) {
// //       if (typeof arg !== 'string') {
// //         throw new Error('Invalid argument: all arguments must be strings');
// //       }
// //     }
// //     return func(...args);
// //   };
// // }

// // const validatedOrderItem = validateStringArg(orderItems);

// // console.log(validatedOrderItem('Keyboard', 'Mouse', 'Monitor'));

// // try {
// //   console.log(validatedOrderItem('Book', 42, 'Pen'));
// // } catch (e) {
// //   console.log('Caught expected error: ' + e.message);
// // }

// // // d.) When testing the decorated function, use try-catch blocks to handle errors thrown for
// // // ------ non-string arguments

// // console.log("Running a valid test...");
// // console.log(validatedOrderItem('Keyboard', 'Mouse', 'Monitor'));
// // console.log("--------------------");

// // console.log("Running an invalid test with try...catch...");
// // try {
// //   validatedOrderItem('Book', 123, 'Pen');
// // } catch (error) {
// //   console.log("Successfully caught the expected error!");
// //   console.log(error.message);
// // }

// // -------------------------------------- Question 9 -----------------------------------------------------------------------------------------------------------------------------------------------
// // We can delay execution of a function using setTimeout, where we need to provide both
// // the callback function and the delay after which it should execute.

// // function randomDelay() {
// //   // Generate a random delay between 1000ms (1s) and 20000ms (20s)
// //   const delay = Math.floor(Math.random() * 19001) + 1000;

// //   return new Promise((resolve) => setTimeout(resolve, delay));
// // }

// // // b) If the random delay is even, consider this a successful delay and resolve the promise,
// // // ----- and if the random number is odd, consider this a failure and reject it.

// // function randomDelay() {
// //   const delay = Math.floor(Math.random() * 19001) + 1000;

// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       // Check if the delay (in milliseconds) is an even number
// //       if (delay % 2 === 0) {
// //         // If it's even, resolve the promise (success)
// //         resolve();
// //       } else {
// //         // If it's odd, reject the promise (failure)
// //         reject();
// //       }
// //     }, delay);
// //   });
// // }

// // // c) Update the testing code to catch rejected promises and print a different message.

// // function randomDelay() {
// //   const delay = Math.floor(Math.random() * 19001) + 1000;
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       if (delay % 2 === 0) {
// //         resolve();
// //       } else {
// //         reject();
// //       }
// //     }, delay);
// //   });
// // }

// // randomDelay()
// //   .then(() => console.log("There appears to have been a successful delay."))
// //   .catch(() => console.log("The delay failed."));

// // // d) Try to update the then and catch messages to include the random delay value.

// // function randomDelay() {
// //   const delay = Math.floor(Math.random() * 19001) + 1000;
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       if (delay % 2 === 0) {
// //         // Pass the delay value when resolving
// //         resolve(delay);
// //       } else {
// //         // Pass the delay value when rejecting
// //         reject(delay);
// //       }
// //     }, delay);
// //   });
// // }

// // randomDelay()
// //   .then((delay) => console.log(`Success! The delay was ${delay}ms.`))
// //   .catch((delay) => console.log(`Failure. The delay was ${delay}ms.`));

// // -------------------------------------- Question 10 -----------------------------------------------------------------------------------------------------------------------------------------------
// // Fetch is a browser-based function to send a request and receive a response from a server,
// // ----- which uses promises to handle the asynchronous response.

// // The below fetchURLData uses fetch to check the response for a successful status
// // ----- code, and returns a promise containing the JSON sent by the remote server if successful
// // or an error if it failed.

// // run 'npm init' and accept all the defaults
// // run 'npm install node-fetch'
// // run 'npm pkg set type=module'

// import fetch from "node-fetch";
// globalThis.fetch = fetch;
// function fetchURLData(url) {
//   let fetchPromise = fetch(url).then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error(`Request failed with status ${response.status}`);
//     }
//   });
//   return fetchPromise;
// }


// // a) Write a new version of this function using async/await.

// async function fetchURLDataAsync(url) {
//   try {
//     const response = await fetch(url);
//     if (response.status === 200) {
//       const data = await response.json();
//       return data;
//     } else {
//       throw new Error(`Request failed with status ${response.status}`);
//     }
//   } catch (error) {
//     // This will catch network errors or errors from the 'throw' statement
//     console.error(error.message);
//   }
// }

// // b) Test both functions with valid and invalid URLs.

// console.log("--- Testing original fetchURLData ---");

// fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
//   .then(data => console.log('Valid URL Data:', data))
//   .catch(error => console.error(error.message));

// fetchURLData('https://jsonplaceholder.typicode.com/todos/9999')
//     .then(data => console.log('Invalid URL Data:', data))
//     .catch(error => console.error('Invalid URL Error:', error.message));

// console.log("\n--- Testing async/await fetchURLDataAsync ---");  
// fetchURLDataAsync('https://jsonplaceholder.typicode.com/todos/2')
//     .then(data => console.log('Async Valid URL Data:', data));
// // Invalid URL
// fetchURLDataAsync('https://invalid-url-that-does-not-exist.com')
//     .then(data => console.log('Async Invalid URL Data:', data));

// // c.) (Extension) Extend your new function to accept an array of URLs and fetch all of them, using Promise.all to combine the results.


// async function fetchMultipleURLs(urls) {
//   try {
//     // Create an array of fetch promises
//     const fetchPromises = urls.map(url => fetch(url));
    
//     // Wait for all promises to resolve
//     const responses = await Promise.all(fetchPromises);
    
//     // Check each response for success
//     const dataPromises = responses.map(response => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error(`Request failed for ${response.url} with status ${response.status}`);
//       }
//     });
    
//     // Wait for all the .json() promises to resolve
//     const results = await Promise.all(dataPromises);
//     return results;
    
//   } catch (error) {
//     console.error("One or more fetches failed:", error.message);
//   }
// }

// // --- Testing the multiple URL function ---
// const urlsToFetch = [
//   'https://jsonplaceholder.typicode.com/todos/3',
//   'https://jsonplaceholder.typicode.com/todos/4',
//   'https://jsonplaceholder.typicode.com/todos/5'
// ];

// fetchMultipleURLs(urlsToFetch)
//   .then(data => console.log('Multiple URL Data:', data));






















