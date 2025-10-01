//function structure
//funcion ThisIsTheName(Signature){Body}

const greeting = "What's up ";
const name = "Rene";

console.log(greeting + name);

function sum(a, b) {
  return a + b;
}
function subtract(a, b, c) {
  return a - b - c;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
console.log(sum(5, 1));
console.log(subtract(6, 2, 2));
console.log(multiply(5, 3));
console.log(divide(10, 4));

const Sentiment = require("sentiment");
const sentiment = new Sentiment();

const result = sentiment.analyze("Cats are NOT stupid.");
console.dir(result);

/// this is for excersise 5

let emptyScores = new Array();
// or
let scores = ["A+", 95, "C-", 55, 83, 71, "B+"];

// Arrays use zero-based indexing (remember that!)
let mountains = ["Everest", "Fuji", "Naga Parbat"];
console.log(mountains[0]); //Everest
console.log(mountains[1]); //Fuji
console.log(mountains[2]); //Naga Parbat

// square brackets are also used to replace a value at a specific index
mountains[1] = "Kilimanjaro";
console.log(mountains); //['Everest', 'Kilimanjaro', 'Naga Parbat']

// push() adds an element to the END of an array
let seas = ["Black Sea", "Caribbean Sea", "North Sea", "Baltic Sea"];
console.log(seas); //['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea']
seas.push("Red Sea");
console.log(seas); //['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea']

// unshift() adds an element to the BEGINNING of an array
seas.unshift("Adriatic Sea");
console.log(seas); //['Adriatic Sea', 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea']

//pop() removes the LAST element from an array
let rivers = ["Mississippi", "Amazon", "Nile"];
let lastRiver = rivers.pop(); // removes 'Nile' from the end of the array
console.log(lastRiver); //Nile
console.log(rivers); //['Mississippi', 'Amazon']

//shift() removes the FIRST element from an array
let firstRiver = rivers.shift(); // removes 'Mississippi' from the beginning of the array
console.log(firstRiver); //Mississippi
console.log(rivers); //['Amazon']

//indexOf() finds the index of an element
let volcanoes = ["Mount Vesuvius", "Mount Etna", "Mount Fuji"];
let fujiIndex = volcanoes.indexOf("Mount Fuji");
console.log(fujiIndex); //2 (remember indexing starts at 0)

//length property tells you how many elements are in an array
let numVolcanoes = volcanoes.length;
console.log(numVolcanoes); //3

//this is my Exercise 5 code below

let Strawhats = ["Luffy", "Zoro", "Nami", "Usopp", "Sanji"];
console.log(Strawhats[0]); //this should be Luffy
console.log(Strawhats[1]); //this should be Zoro
console.log(Strawhats[2]); //this should be Nami
console.log(Strawhats[3]); //this should be Usopp
console.log(Strawhats[4]); //this should be Sanji

Strawhats[1] = "Chopper";
console.log(Strawhats); //this should replace Zoro with Chopper, (I might need to replace Luffy with Chopper if I misunderstood the instuctions)

Strawhats[4] = "Robin";
console.log(Strawhats); //this should replace Sanji with Robin, (I might need to replace Luffy with Chopper if I misunderstood the instuctions)
Strawhats.unshift("Franky");
console.log(Strawhats); //this should add Franky to the beginning of the array

let lastStrawhat = Strawhats.pop(); //this should remove Robin from the end of the array
console.log(Strawhats); //this should show the array without Robin
console.log(lastStrawhat); //this should show Robin

//this is for exercise 6

const book = {
  book_name: "Dune",
  book_plot: "giant sand worms, spice, and a desert planet",
  book_author: "Frank Herbert",
  number_pages: 412,
};

// Print individual properties
console.log(book.book_name);
console.log(book.book_plot);
console.log(book.book_author);
console.log(book.number_pages);

// Update the plot
book.book_plot = "Shadow women control the empire from behind the scenes";

// Print updated plot
console.log("Updated plot:", book.book_plot);

// Print the whole object
console.log("Updated book object:", book);

// this is my array for exercise 6
const books = [
  {
    book_name: "Dune",
    book_plot: "Giant sand worms, spice, and a desert planet",
    book_author: "Frank Herbert",
    number_pages: 412,
  },
  {
    book_name: "Children of Dune",
    book_plot:
      "The next generation of Atreides navigates prophecy and politics",
    book_author: "Frank Herbert",
    number_pages: 444,
  },
  {
    book_name: "The Hobbit",
    book_plot: "A hobbit goes on an unexpected journey with dwarves",
    book_author: "J.R.R. Tolkien",
    number_pages: 310,
  },
  {
    book_name: "Storm Thief",
    book_plot:
      "In a city plagued by chaotic probability storms, two teens uncover a dark secret",
    book_author: "Chris Wooding",
    number_pages: 389,
  },
  {
    book_name: "Frankenstein",
    book_plot: "A scientist creates life, but loses control of his creation",
    book_author: "Mary Shelley",
    number_pages: 280,
  },
];

books.forEach((book) => console.log(book.book_name));

console.log(books[3]);
