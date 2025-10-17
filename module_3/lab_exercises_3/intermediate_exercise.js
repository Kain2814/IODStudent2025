

// ===========================================Question 1======================================================================================================================

// function ucFirstLetters(str) {
//     const words = str.split (' ')
//     const capitalizedWords = words.map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//     return capitalizedWords.join(' ');
// }
// console.log(ucFirstLetters("san antonio"))
// console.log(ucFirstLetters("los angeles") ) //Los Angeles

// was trying to figure out how to shortand this using arrow function but couldnt get it

// function ucFirstLetters = str =>
//     const str = str.split(' ')
//                 .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//                 .join(' ');

// console.log(ucFirstLetters('austin')) // SyntaxError Unexpected Token '=' str 

// ------------------------------------------Question 2----------------------------------------------------------------------------------------------------------------------------

// First part

// Create a function truncate(str, max) that truncates a given string of text if its total
// ----- length is greater than the max length.
// It should return either the truncated text, with an
// ----- ellipsis (...) added to the end if it was too long, or the original text otherwise.

// function truncate(str, max) { 
//     if (str.length > max) { 
//         return str.slice(0, max) + '...';
//     } else {
//         return str;
//     }
// }


// console.log(truncate('This text will be truncated if it is too long', 25))
// // This text will be truncat...

// // futher testing (just playing around with it)
// console.log(truncate('more than 25 characters', 26));
// console.log(truncate('1234567890', 10)); // trying to not trigger truncat message


// Part 2

// function truncate(str,max) {
//     return str.length > max ? str.slice(0, max) + '...' : str; // ternary operator uses this set up
// }

// console.log(truncate('too many characters', 25))
// console.log(truncate('Hello', 10))


//---------------------------------------------- Question 3---------------------------------------------------------------------------------------------------------------------------------------------



// const animals = ['Tigers', 'Lions'];{
//     animals.push('Bears', 'Oh My');{
//         console.log('Push:', animals)
//     }
//     animals.unshift('Scarecrow', 'Tin-man'); {
//         console.log('Unshift:', animals)
//     }
//     animals.sort(); {
//         console.log('Sorted:', animals)
//     }
// }

// function replaceMiddleAnimal(newValue) {
//     const middleIndex = Math.floor(animals.lenght / 2);
//     animals[middleIndex] = newValue;
//     console.log('After replacing middle animal:', animals);
// }

// replaceMiddleAnimal('Panda');

// function findMatchingAnimals(beginsWith) {
//     return animals.filter(animal =>
//         animal.toLowerCase().startsWith(beginsWith.toLowerCase())
//     );
// }


// console.log('Find matching "L":', findMatchingAnimals('L'));
// console.log('Find matching "t":', findMatchingAnimals('t')); // good enough i guess







// ------------------------------------------- Question 4-------------------------------------------------------------------------------------------------------------------------------------------------------------------


// function camelCase(cssProp) {
//   const parts = cssProp.split('-');
//   for (let i = 1; i < parts.length; i++) {
//     parts[i] = parts[i][0].toUpperCase() + parts[i].slice(1);
//   }
//   return parts.join('');
// }


// function camelCaseForOf(cssProp) {
//   const parts = cssProp.split('-');
//   let result = parts[0];
//   let index = 0;
//   for (const part of parts) {
//     if (index > 0) {
//       result += part[0].toUpperCase() + part.slice(1);
//     }
//     index++;
//   }
//   return result;
// }

// console.log(camelCase('margin-left'));          
// console.log(camelCaseForOf('background-image')); 


// ------------------------------------------------- Question 5 ----------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------ Explain why the below code returns the wrong answer -------------------------------------------------------------------------------------------------------------------------------------

// let fixedTwenty = twentyCents.toFixed(2);
// let fixedTen = tenCents.toFixed(2);
// console.log(fixedTwenty + fixedTen) //why is this not working?

// toFixed() doesnt return a number; it returns a formatted string

// (this is more for my understanding the more I type it out the more it sticks)

// toFixed() when called liks above twentyCents.toFixed(2) I am asking JS to give a
// ----- string representation of that number, rounded to two decimal places.

// the (+) in the console.log is calling for concatenation because were using it (in this case)
// ----- with two strings instead of numbers

// ------------------------------------------- Create a function currencyAddition(float1, float2) which safely adds the two --------------------------------------------------------------------------------------------------------------------------------
//------------------------ decimal numbers float1 and float2 and returns the correct float result. ------------------------------------------------------------------------------------------------------------------------------------------

// (google has advised to use the integer match approach as this is more robust and safer)

// Safely adds two decimal numbers by converting them to inegers first.
// This avoids floating-point precision error common in currency calculations.

/**
param {number} float1 // - The first decimal number. 
param {number} float2 // - The second decimal number.
returns {number} // - The correctly added float result
*/

// function currencyAddition(float1, float2) {
// // --- We multiply by 100 to work with cents instead of dollars.
// // --- Integer arithmetic is precise and doesn't have floating-point issues
//     const int1 = float1 * 100;
//     const int2 = float2 * 100; 

//     const sum = int1 + int2;
// // --- We divide by 100 to convert the result back to dollars (per google I couldnt find this in the slides)
//     return sum / 100;
// }

// (test)

// let twentyCents = 0.20;
// let tenCents = 0.10;

// let total = currencyAddition(twentyCents, tenCents);
// console.log(total); // should output: 0.3 (a clean number)

// let anotherTotal = currencyAddtion(0.2, 0.1);
// console.log(anotherTotal); // Also outputs: 0.3


// ----------------------- Create a function currencyOperation(float1, float2, operation) ------------------------------------------------------------------------------------------------------------------------------------------------------
// -------- which safely performs the given operation (either+,-,/ or *) on the two numbers and returns the correct float result ------------------------------------------------------------------------------------------------------------

// /**
//  * Safely performs a mathematical operation (+, -, *, /) on two decimal numbers.
//  * @param {number} float1 - The first decimal number.
//  * @param {number} float2 - The second decimal number.
//  * @param {string} operation - The operation to perform ('+', '-', '*', or '/').
//  * @returns {number} The result of the operation.
//  * @throws {Error} If an invalid operation is provided.
//  */

// function currencyOperation(float1, float2, operation) {
//     switch (operation) {
//         case '+':
//             //Using the integer method for addition
//             return ((float1 * 100) + (float2 * 100)) / 100;
//         case '-':
//             // Use the integer method for subtraction
//             return ((float1 * 100) - (float2 * 100)) / 100;
//         case '*':
//             // for multiplication we should perform the operation and then round
//             // to a reasonable number of decimal places to clean up any "floating point stragglers"
//             // We use a parseFloat to convert the string from toFixed() back to a number.
//             // We round to 4 places here to be safe with currency (i.e. 5.1234)
//             return parseFloat((float1 * float2).toFixed(4));
//         case '/':
//             // Division can also create long decimal results; so we do the same type of "cleanup"
//             // remember to handle division by 0!
//             if (float2 === 0) {
//                 throw new Error("Division by zero is not allowed");
//             }
//             return parseFloat((float1 / float2).toFixed(4));
//         default:
//             // If the operation is not one of the above, throw an error.
//             // This makes our function "fail loudly" so developers know they used it wrong.
//             throw new Error(`Invalid operation: '${operation}'. Please use '+', '-', '*', or '/'.`)
//     }
// }

// // --- Testing everything ---
// console.log(`0.2 + 0.1 = ${currencyOperation(0.2, 0.1, '+')}`); // should be 0.3
// console.log(`0.3 - 0.1 = ${currencyOperation(0.3, 0.1, '-')}`); // should be 0.2
// console.log(`0.6 * 0.3 = ${currencyOperation(0.6, 0.3, '*')}`); // should be 0.18 (actually 0.179999etc.... but because of our cleanup above)
// console.log(`0.3 / 0.2 = ${currencyOperation(0.3, 0.2, '/')}`); // should be 1.5 

// // error handling
// try {
//     currencyOperation(5, 1, 'x'); // Using 'x' instead of '*'
// } catch (error) {
//     console.error(error.message); // Should say "Invalid operation: 'x'. Please use +-*/"
// }

// -------------------------------------------- (Extension) Extend the above function to include a fourth argument numDecimals -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------- which allows the operation to support different amounts of decimal places from 1 to 10. ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// /**
//  * Safely performs a mathematical operation (+, -, *, /) on two decimal numbers.
//  * @param {number} float1 - The first decimal number.
//  * @param {number} float2 - The second decimal number.
//  * @param {string} operation - The operation to perform ('+', '-', '*', or '/').
//  * @param {number} [numDecimals=2] - The number of decimal places for precision. Default = 2
//  * @returns {number} The result of the operation.
//  * @throws {Error} If an invalid operation is provided.
//  */

// function currencyOperation(float1, float2, operation, numDecimals = 2) {
//   const factor = 10 ** numDecimals;

//   switch (operation) {
//     case '+':
//       return ((float1 * factor) + (float2 * factor)) / factor;
    
//     case '-':
//       return ((float1 * factor) - (float2 * factor)) / factor;

//     case '*':
//       // For multiplication, direct multiplication is less prone to the 0.1+0.2 error.
//       // The function will return the most precise result possible,
//       // and the person calling the function can format it later if needed.
//       return float1 * float2;

//     case '/':
//       if (float2 === 0) {
//         throw new Error("Division by zero is not allowed.");
//       }
//       // Like multiplication, we return the precise result and let the caller format it.
//       return float1 / float2;
    
//     default:
//       throw new Error(`Invalid operation: '${operation}'. Please use '+', '-', '*', or '/'.`);
//   }
// }

// // --- Testing the specific cases from your worksheet ---
// console.log("--- Worksheet Tests ---");
// console.log(`0.3 == currencyOperation(0.1, 0.2, '+') -> ${0.3 == currencyOperation(0.1, 0.2, '+')}`); // true

// // --- Testing our new functionality ---
// console.log("\n--- Extended Functionality Tests ---");

// // Test with 3 decimal places
// let num1 = 0.123;
// let num2 = 0.456;
// console.log(`Addition (3 decimals): ${currencyOperation(num1, num2, '+', 3)}`); // Expected: 0.579

// // Test with 1 decimal place
// let num3 = 1.5;
// let num4 = 2.2;
// console.log(`Subtraction (1 decimal): ${currencyOperation(num3, num4, '-', 1)}`); // Expected: -0.7

// // Test multiplication (returns a precise float)
// console.log(`Multiplication: ${currencyOperation(1.25, 2.5, '*')}`); // Expected: 3.125

// // Test division (returns a precise float)
// console.log(`Division: ${currencyOperation(5, 2, '/')}`); // Expected: 2.5

// -------------------------------------- Question 6 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------ Create a function unique(duplicatesArray) which takes an array parameter that may -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// --------- include duplicates. -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// --------- Your function should return an array containing only the unique values from duplicatesArray ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// function unique(duplicatesArray) {
//   return [...new Set(duplicatesArray)];
// }

// // Provided test cases
// const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

// // My test case
// const studentIds = [101, 102, 105, 101, 103, 102, 104, 105];

// console.log(unique(colors));
// console.log(unique(testScores));
// console.log(unique(studentIds));


// -------------------------------------- Question 7 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const books = [
//   { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
//   { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
//   { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
//   { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
//   { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
// ];

// // a.) Write a function getBookTitle(bookId) that uses the find function to return the
// // ----- title of the book object with the matching id.

// function getBookTitle(bookId) {
//   const book = books.find(book => book.id === bookId);
//   return book.title;
// }

// console.log(getBookTitle(3)); // 1984

// // b.) Write a function getOldBooks() that uses the filter function to return all book
// // ----- objects written before 1950.
// function getOldBooks() {
//   return books.filter(book => book.year < 1950);
// }

// console.log(getOldBooks());

// // c.) Write a function addGenre() that uses the map function to add a new genre property
// // ----- to all of the above books, with the value ‘classic’.

// function addGenre() {
//   return books.map(book => ({ ...book, genre: 'classic' }));
// }

// console.log(addGenre());

// // d.) (Extension) Write a function getTitles(authorInitial) that uses map and
// // ----- filter together to return an array of book titles for books written by authors whose
// // names start with authorInitial.

// function getTitles(authorInitial) {
//   return books
//     .filter(book => book.author.startsWith(authorInitial))
//     .map(book => book.title);
// }

// console.log(getTitles('G')); // ['1984']

// // e.) (Extension) Write a function latestBook() that uses find and forEach to get the
// // ----- book with the most recent publication date.

// function latestBook() {
//   let latestYear = 0;
//   books.forEach(book => {
//     if (book.year > latestYear) {
//       latestYear = book.year;
//     }
//   });
//   return books.find(book => book.year === latestYear);
// }

// console.log(latestBook());

// --------------------------------------- Question 8 -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------- The following code creates a new Map object for storing names beginning with A, B, or C with their phone numbers. ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// const phoneBookABC = new Map() //an empty map to begin with
// phoneBookABC.set('Annabelle', '0412312343')
// phoneBookABC.set('Barry', '0433221117')
// phoneBookABC.set('Caroline', '0455221182')

// // a.) Create a new phoneBookDEF Map to store names beginning with D, E or F
// // b. ) Initialise the contents of phoneBookDEF by passing in an array of keys/values
// const phoneBookDEF = new Map([
//     ['Daniel', '0411223344'],
//     ['Eden', '0422334455'],
//     ['Farah', '0433445566'],
// ]);   

// // c.) Update the phone number for Caroline

// phoneBookABC.set('Caroline', '0400112233');

// // d.) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map

// function printPhoneBook(contacts) {
//     for (const [name, number] of contacts) {
//         console.log(`${name}: ${number}`);
//     }
// }

// // e.) Combine the contents of the two individual Maps into a single phoneBook Map

// const phonBook = new Map([...phoneBookABC, ...phoneBookDEF]);

// // f.) Print out the full list of names in the combined phone book

// for (const name of phonBook.keys()) {
//     console.log(name);
// }

// ---------------------------------------- Question 9 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let salaries = {
// "Timothy" : 35000,
// "David" : 25000,
// "Mary" : 55000,
// "Christina" : 75000,
// "James" : 43000
// };

// // a.) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function sumSalaries(salaries) {
//   let total = 0;
//   for (let person in salaries) {
//     total += salaries[person];
//   }
//   return total;
// }

// console.log(sumSalaries(salaries)); // 233000

// // b.) Write a function topEarner(salaries) that calculates and returns the name of the
// // ----- person earning the highest salary

// function topEarner(salaries) {
//   let highestSalary = 0;
//   let topEarnerName = '';

//   for (let person in salaries) {
//     if (salaries[person] > highestSalary) {
//       highestSalary = salaries[person];
//       topEarnerName = person;
//     }
//   }
//   return topEarnerName;
// }

// console.log(topEarner(salaries)); // "Christina"

// ------------------------------------------------------ Question 10 -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const today = new Date();
// console.log('Current time is ' + today.toLocaleTimeString());
// console.log(today.getHours() + ' hours have passed so far today');

// // a) Print the total number of minutes that have passed so far today
// const minutesPassed = today.getHours() * 60 + today.getMinutes();
// console.log(minutesPassed + ' minutes have passed so far today');

// // b) Print the total number of seconds that have passed so far today
// const secondsPassed = minutesPassed * 60 + today.getSeconds();
// console.log(secondsPassed + ' seconds have passed so far today');

// // c) Calculate and print your age as: 'I am x years, y months and z days old'
// const birthDate = new Date('1999-05-15'); // Example birth date
// let years = today.getFullYear() - birthDate.getFullYear();
// let months = today.getMonth() - birthDate.getMonth();
// let days = today.getDate() - birthDate.getDate();

// // Adjust for negative months/days
// if (days < 0) {
//   months--;
//   // Get the last day of the previous month
//   const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
//   days += lastMonth.getDate();
// }

// if (months < 0) {
//   years--;
//   months += 12;
// }

// console.log(`I am ${years} years, ${months} months and ${days} days old`);


// // d) Write a function daysInBetween(date1, date2)
// function daysInBetween(date1, date2) {
//   // Get the difference in milliseconds
//   const differenceMs = Math.abs(date2 - date1);
//   // Convert milliseconds to days (1000ms * 60s * 60min * 24hr)
//   const msInDay = 1000 * 60 * 60 * 24;
//   return Math.floor(differenceMs / msInDay);
// }

// // Test the function
// const christmas = new Date(today.getFullYear(), 11, 25); // Christmas this year
// const newYear = new Date(today.getFullYear() + 1, 0, 1); // New Year's next year

// console.log(`Days between today and Christmas: ${daysInBetween(today, christmas)}`);
// console.log(`Days between Christmas and New Year's: ${daysInBetween(christmas, newYear)}`);







