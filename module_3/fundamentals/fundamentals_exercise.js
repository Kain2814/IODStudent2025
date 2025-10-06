

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------Question 1 (w/ explanation notes)-------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------- What are the results of these expressions?----------------------------------------------------------------------------------------------------------------------------------------------------------------------


// "" <-- this is an empty string
// "+" <-- this combined with a string will convert the number into strings and concatenates them. 

// so "" + 1 = "1"
// and "1" + 0 = "10" <--- this should be the answer

// const math = ("" + 1 + 0)
// console.log(math)

// - converts an empty string to a number (since there is nothing it will be 0)
// "" - 1 becomes 0 - 1 = (negative one -1)

// const math2 = ("" - 1 + 0)
// console.log(math2)

// // true = 1
// // false = 0
// // 1 + 0 = 1

// const math3 = (true + false)
// console.log(math3)

// // "!" = NOT or opposite of element/variable
// // so !true = NOT true which = false

// const math4 = (!true)
// console.log(math4)

// // so division "/" expects numbers
// // the string gets converted to a number

// const math5 = (6 / "3")
// console.log (math5)

// same thing as division "*" <- this expects numbers
// both strings get converted 
// solve like math answer should be 6

// const math6 = ("2" * "3")
// console.log (math6)

// const math7 = (4 + 5 + "px") // this should be 9 px because "+" goes left to right 
// console.log(math7)

// const math8 = ("$" + 4 + 5) // since $ is in between "" the same logic applies to the numbers concatenating
// console.log(math8) // this should be "$45"

// const math9 = ("4" - 2) // remember "-" forces numbers to change (or convert)
// console.log(math9) // should be "2"

// const math10 = ("4px" - 2) // this one is a trick question (for me) "4px" cant have numbers changed cuz its not a number but a string variable
// console.log(math10) // since it cant convert a NaN should appear

// const math11 = ("-9" + 5) // 
// console.log(math11) // should be "-95" (still need to remember how it works and maybe study a bit more)

// const math12 = (" -9 " - 5) // since "-9" is a string and "-" forces numeric conversion 
// console.log(math12) // should be "-14" (this is easier to understand but still tricky)

// const math13 = (null + 1) // null (I think) converts to 0 when expressing in numbers so its 0 + 1 = 1
// console.log(math13) // should be 1

// const math14 = (undefined + 1) // undefined is NOT like null it cant be a valid number (unless you define it, i believe)
// console.log(math14) // so this should be NaN

// const math15 = (undefined == null) // "==" is loose equality, i believe this is a special case in js where these two are considered loosley equal (it attempts conversion) therefore it should be true
// console.log(math15)// should be true (kinda)

// const math16 = (undefined === null) // "===" so 3 equals means STRICT so this doesnt do any attempt of conversion if the types differ
// console.log(math16) // so this should be false

// const math17 = (" \t \n" - 2)  // (I had to google this, so need to study this a bit more)
// // so "\t \n" are whitespace characters (tab and newline), js logic converts whitespace to 0
// // so "0" - 2 = "-2"
// console.log(math17) // should be "-2"


// // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // -----------------------------------------Question 2--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // ------------------------------- Which of the below are not giving the right answer? ---------------------------------------------------------------------------------------------------------------------------------------------
// // ---------------------------- Why are they not correct?, How can we fix them? ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let three = "3"
// let four = "4"
// let thirty = "30"
// (above) NOTE: these are representing strings not numbers so math isnt going to be working
// (below) NOTE: so this console.log is going to give me "34" not 7
// console.log(three + four) // this = 34

//what is the value of the following expressions? 
// let addition = three + four //  this is wrong if were doing math
// let multiplication = three * four // this maths as intended because "*" is numeric so it forces the math
// let division = three / four // same as multiplication, division("/") forces numeric conversion so it maths
// let subtraction = three - four // // subraction ("/") forces numeric conversion so it maths
// console.log(addition) // = 34,
// console.log(multiplication) // = 12 
// console.log(division) // = 0.75
// console.log(subtraction) // -1

// let lessThan1 = three < four // = true 
// // (below) this works but not really, if the topic or goal is math then its wrong but if were just trying to get it to be true then yes it techincally is true
// let lessThan2 = thirty < four // this is going to = true

// console.log(lessThan1)
// console.log(lessThan2)
// if your wanting to do math we need to change the strings in the let functions to numbers (n);

// --------------------------------------Question 3------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\
// ------------------------------- Which of the following console.log messages will print? Why? ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// if (0) console.log('#1 zero is true') // this wont print, the (0) is making this "false", and false = nothing prints unless defined 
// if ("0") console.log('#2 zero is true') // so ("0") is a string and its not an empty string,
//                                         // any non-empty string = true
// if (null) console.log('null is true') // (null) is the same as (0) so nothing will print cuz its false 
// if (-1) console.log('negative is true') // "-" calls for numeric conversion (-1) is still a number (just negative)
//                                         // any number will print
// if (1) console.log('positive is true') // its a number so it is True regardless of interger assignment! 

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------Question 4-----------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------- Rewrite this if using the ternary/conditional operator '?'.---------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------ Test it with different values for 'a' and 'b'. What does the '+=' do?-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let a = 10,
//   b = 3;
// let result = a + b < 10 ? "less than 10" : "greater than 10 ";
// console.log(result); 

// if (a + b < 10) {
// result += 'less than 10';
// } else {
// result += 'greater than 10';

// "+=" this adds a value to a variable
// so in the example above 'result += 'less than 10' is the same as
// result = result 'less than 10' (to my understanding)


// ---------------------------------------------------Question 5---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. 
//                          Test each version to make sure they work the same.

// function getGreeting(name) {
// return 'Hello ' + name + '!';
// }

// ----function expression

// const getGreeting = function(name) {
//     return 'Hello ' + name + '!';
// };

// console.log(getGreeting("Rene"));

// ---- > Arrow function expression <----

// const getGreeting = (name) => 'Hello ' + name + '!';

// console.log(getGreeting("Rene"))

// -------------------------------------------------Question 6--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const westley = {
//   name: "Westley",
//   numFingers: 5,
// };
// const rugen = {
//   name: "Count Rugen",
//   numFingers: 6,
// };
// const inigo = {
//   firstName: "Inigo",
//   lastName: "Montoya",
//   greeting(person) {
//     let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
//     console.log(greeting + this.getCatchPhrase(person));
//   },
//   getCatchPhrase: (person) => 
//     person.numFingers === 6 ? "You killed my father. Prepare to die." : "Nice to meet you."
// };

// inigo.greeting(westley);
// inigo.greeting(rugen);

// ---------------------------------------------------Question 7---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// const basketballGame = {
//   score: 0,
//   freeThrow() {
//     this.score++;
//     return this;
//   },
//   basket() {
//     this.score += 2;
//     return this;
//   },
//   threePointer() {
//     this.score += 3;
//     return this;
//   },
//   foul() {
//     this.fouls++;
//     return this;
//   },
//   halfTime() {
//     console.log("Halftime score is " + this.score);
//     return this;
//   },
//   fullTime() {
//     console.log('Final score is ' + this.score);
//     return this;
//   },
//   resetGame() { // google helped me out on this, I just wanted to see what it would look like to have this function.
//     this.score = 0;
//     this.fouls = 0;
//     console.log("Game has been reset");
//     return this;
//   }
// };

// basketballGame
//     .resetGame()
//     .freeThrow()
//     .foul()
//     .basket()
//     .halfTime()
//     .threePointer()
//     .foul()
//     .threePointer()
//     .fullTime();

// -------------------------------------------Question 8---------------------------------------------------------------------------------------------------------------------------------------------------


// function printCityInfo(city) { // changing this from printSydneyInfo to printCityInfo to allow for multiple cities to be pulled
//     for (let property in city) {
//         console.log(`${property} :${city[property]}`);
//     }
// }

// const sydney = {
// name: 'Sydney',
// population: 5_121_000,
// state: 'NSW',
// founded: '26 January 1788',
// timezone: 'Australia/Sydney'
// }

// const tokyo = {
// name: 'Tokyo',
// population: 40_000_000_000,
// country: 'Japan',
// founded: '01 May 1889',
// timezone: 'Japan Standard Time'
// }


// printCityInfo(sydney)
// printCityInfo(tokyo)


// ----------------------------------- Question 9-------------------------------------------------------------------------------------------------------------------------------------------------------------


//-----------------------------Before moresports and cat2 independent changes----------------------------------------------------------------------------------------------------------------------------------------------


// let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
// let moreSports = teamSports;
// moreSports.push('Football');
// moreSports.unshift('Baseball'); // had to move this under teamSports or else an error occurs since it cannot access teamSports before intialization. 
// let dog1 = 'Bingo';
// let dog2 = dog1;
// dog2 = 'Spot';
// let cat1 = { name: 'Fluffy', breed: 'Siberian' };
// let cat2 = cat1;
// cat2 = {name: 'Whiskers', breed: 'Siamese'};

// console.log('firstSports:', teamSports);
// console.log('newSports:', moreSports);
// console.log('dogs:', dog1);
// console.log('cats:', cat1)

// ------------------------------------After changes-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
// let moreSports = [...teamSports];
// moreSports.push('Football');
// moreSports.unshift('Baseball'); // had to move this under teamSports or else an error occurs since it cannot access teamSports before intialization. 
// let cat1 = { name: 'Fluffy', breed: 'Siberian' };
// let cat2 = {...cat1};
// cat2.name = 'Fluffy'

// console.log('oldSports:', teamSports);
// console.log('newSports:', moreSports);
// console.log('firstCat:', cat1);
// console.log('secondCat:', cat2);

// ----------------------------------------------- Question 10 (first part)---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function Person(name, age) {
// this.name = name;
// this.age = age;
// this.human = true;
// }

// const person1 = new Person('Alyssa', 33);
// const person2 = new Person('Rene', 34);

// console.log(person1) // these logs were for testing before the changes
// console.log(person2)

// --------------------------------------------------Second part--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Person.prototype.canDrive = function() {
//     return this.age >= 16;
// };


// class PersonClass {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//         this.human = true;
//     }
//     canDrive(){
//         return this.age >= 16;
//     }
// }

// const person3 = new PersonClass('Joseph', 29);
// // console.log(person3) // this log was used before calling all logs after canDrive was added


// // I was having trouble calling my function, I had google and gemini help me with this call
// console.log(`${person2.name} can drive:`, person2.canDrive());
// console.log(`${person1.name} can drive:`, person1.canDrive()); 
// console.log(`${person3.name} can drive:`, person3.canDrive());


//=============================================================================================================================================================================================================================================================================================================


































