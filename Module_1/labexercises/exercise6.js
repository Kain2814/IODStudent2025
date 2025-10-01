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