// const n = 1.2345
// console.log(n.toFixed(2))
// console.log(n.toPrecision(10))


// const hello = 'hello world'
// console.log(hello.toUpperCase())
// console.log(hello.endsWith('world'))

// Example 1- Slide 5
// const user = {
//     name: 'John'
// }

// console.log("User: " + user)

// Example 2- Slide 5
// const user = {
//     name: 'John',
//     toString() {
//         return this.name;   
//     }
// }

// console.log("User: " + user)
// --------------------------------------------------------------------
// const apple = {
//     name:'Apple',
//     category: 'Sour Green',
//     price: 1.2,
//     valueOf() {
//         return this.price
//     }
// }
// console.log(apple * 2)

// hexidecimal numbers (in form of RGB colors) - slide 8
// const r = 0xff;
// const g = 0xff;
// const b = 0xff;

// const white = `rgb(${r}, ${g}, ${b})`
// console.log(white)

// const ff = 255
// const ee = 238
// const dd = 221
// console.log(ff.toString(16)) // ff

// //convert from rgb colour code to hexadecimal
// console.log(`#${ff.toString(16)}${ee.toString(16)}${dd.toString(16)}`) // #ffeedd


//numbers (Tests isFinite and isNaN)- slide 13
// console.log(isNaN(NaN)) // true
// console.log(NaN == NaN) // false

// console.log(isFinite(1/3)) // true, regular number
// console.log(isFinite("string")) // false, because converts to NaN
// console.log(isFinite(Infinity)) // false, because represents infinite number

// console.log( +"100px" ) //NaN - 100px is not a valid number

// console.log( parseInt("150px") ) // 150 - stops at 'px'
// console.log( parseFloat("2.5em") ) // 2.5 - stops at 'em'
// console.log( parseFloat("12.34.56") ) // 12.34 - stops at second invalid decimal
// console.log( parseInt("a123") ) // NaN - can't parse the 'a' so stops
// ----------------------------------------------------------------------------------------------------------------

// Strings (newline and line break)- Slide 15
// const guestList = `Guests: \n\t- John \n\t- Pete \n\t- Mary`
// console.log(guestList)

// console.log( 'Z'.codePointAt(0) ) // 90
// console.log( String.fromCodePoint(90) ) // Znode 

// const string = 'I could be anything you like'

// console.log(string.length) // 28 - string is 28 characters long
// console.log(string.indexOf('anything')) // 11 - starting at 0 for 'I'
// console.log(string.substring(20)) // 'you like' - substring starting at position 20
// console.log(string.toUpperCase()) // I COULD BE ANYTHING YOU LIKE
// console.log(string + ' plus more') // I could be anything you like plus more

// ----------------------------------------------------------------------------------------------------

// Arrays in js (slides 21 - 24)
// const matrix = [
//     [1, 2 ,3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]

// console.log(matrix[1] [1])

// const numbers = [1, 2, 3]
// const strings = ["one", "two", "three"]
// const empty =[]

// console.log('number: ' + numbers)
// console.log ('strings: ' + strings)
// console.log ('empty: ' + empty)

// const marks = ['A-', 'C-', 'B-', 'D', 'B+', 'C+', 'B-']

// let bIndexFirst = marks.indexOf('B-')
// let bIndexLast = marks.lastIndexOf('B-')

// console.log(marks[bIndexFirst] + 'is first at:' + bIndexFirst)
// console.log(marks[bIndexLast] + 'is last at: ' + bIndexLast)

// --- Arrays - join method (slide 33)

// const elements = ['Wind', 'Water', 'Fire', 'Air']

// console.log(elements.join())
// console.log( elements.join(' ' ))
// console.log(elements.join('+'))



// --- Arrays - forEach method (slide 34)

// const hobbits = ['Bilbo', 'Frodo', 'Samwise', 'Pippin', 'Gandalf', 'Tom', ]
// hobbits.forEach((hobbit, index) => { // SUPER USEFUL SAVE THIS SOMEWHERE
//     console.log(`#${index}: ${hobbit}`)
// })


// --- Arrays - find method (slide 35)

// const products = [
//     {id: 1, title: 'Sleevless Tee', price: 23.95, category: 'Shirts'},
//     {id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter'},
//     {id: 3, title: 'Denim Jeans', price: 49.95, category: 'Pants'}
// ]

// let jeans = products.find(product => product.title == 'Denim Jeans')

// let shirt = products.find(product => product.category == 'Shirts')

// console.log(jeans)

// console.log(shirt)


// --- Arrays - filter method (slide 36)

// const products = [
//     {id: 1, title: 'Sleevless Tee', price: 23.95, category: 'Shirts'},
//     {id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter'},
//     {id: 3, title: 'Denim Jeans', price: 49.95, category: 'Pants'},
//     {id: 4, title: 'Ladies Tee', price: 25.95, category: 'Shirts'}
// ]

// let shirts = products.filter(product => product.category == 'Shirts')
// let under50 = products.filter(product => product.price < 50)

// console.log(shirts)
// console.log(under50)


// --- Arrays - map method (slide 37)

// let titles = products.map(product => product.title)
// let h2titles = products.map(product => '<h2>'+product.title+'</h2>')
// let raisedPrices = products.map(product => ({...product, price: product.price + 5}) )
// console.log(titles)
// console.log(h2titles)
// console.log(raisedPrices)

// --- Arrays - sort method (slide 38)


// products.sort( (product1, product2) => product1.price - product2.price)
// console.log(products) // original array is modified to new low-high price sorting order: 1,4,3,2
// products.sort( (p1, p2) => p1.title > p2.title ? 1 : -1)
// console.log(products) // original array is modified to new title sorting order: 3,4,2,1

// const numbers = [4,8,1,5,66,23,41]
// console.log (numbers.sort() ) // [1, 23, 4, 41, 5, 66, 8]
// console.log(numbers.sort((num1, num2,)=> num1 - num2) ) // [1,4,5,8,23,41,66]
//------------------------------------------------------------------------------------------------------------------------------------


// -- (had to skip to Slide 54) Set (Slide 52 - 55)

// -- Efficient Algorithms (Slide 56 - 58)

// -- Time Complexity (Big O Notation)
// -- A type of formula capturing the 'order of complexity'  
// that shows how much longer an algorithm takes as the amount of data it handles increases.
//  It can help to analyze and compare the efficiency of different algorithms. 
// -- Examples: O(1) = Constant time, like accessing an array element  
// -----------  O(n) = Linear time, like iterating through an array.
// -----------  O(n^2) = Quadratic time, like nested loops (TO BE AVOIDED)
//----------------------------------------------------------------------------------------------------------



// Destructuring assignment - Array Destructuring (Slide 59 - 62)
// const [jcFirst, jcLast, ,, jcPlace] = ['Julius', 'Caesar', 'Consul', 'of the', 'Roman', 'Republic']
// console.log(`${jcFirst} ${jcLast} is a ${jcPlace}`)

// const [a,b,c] ="abc"
// const [one, two, three] = new Set ([1,2,3])
// const [[type, quantity]] = new Map([['Apple', 4]])

// console.log(a,b,c, one, two, three, type, quantity)

// -- this shows the assignment being assigned to anything at the left-side

// const monarch = {}; // this is an empty object
// [monarch.title, monarch.name ] = "King Charles".split(' '); // this stores array pieces in object properties
// console.log(monarch);

// -- looping with .entries() we can destructure into key and value variables

// const teeProduct = {id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts'}
// // key and value are just variable names, THESE COULD BE NAMED ANYTHING
// for (let[key,value]of Object.entries(teeProduct)) {
//     console.log(`${key}: ${value}`)
// }

// this is a trick to swap variables

// let student = 'James', teacher = 'Andrew';
// [student, teacher] = [teacher, student] // <<--- this is what tells the function to swap

// console.log(student)
// console.log(teacher)

// Destructuring assignment - Array rest ... (slide 62)

// const [jcFirst, jcLast, ...jcTitles] = ['Julius', 'Caesar', 'Consul', 'of the', 'Roman', 'Republic']

// console.log(jcTitles)
// console.log(jcTitles.length)

// -- Destructuring assignment - Object destructuring (slide 63 - 65)

// property names (keys) on right are matched to variable names on left

// let { width, height, title } = {title: 'My Component', height: 100, width: 200 }
// console.log(width,height, title) // 200 100 My component

// let {width = 200, height = 100, title} = {title: 'My Component' }

// console.log(width, height, title)

// Object destructuring -- smart function parameters (slide 64)

// function displayComponent({height = 200, width = 100, title}) {
//     console.log(`<div style="width:${width}px; height:${height}px"><h2>${title}</h2></div>`)
// }

// displayComponent({width:200, title: 'My Awesome Component'})
// displayComponent({title:'My Amazing Component'})
// displayComponent({width:300, height:300, title: 'My Average Component'})

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Date and Time (Slides 66 - 70)

// const now = new Date()
// console.log(now)
// console.log(+now)

// const epoch = new Date (0)
// const jan2_1970 = new Date(1000 * 60 * 60 * 24)
// console.log(epoch)
// console.log(jan2_1970)

// // Creationg using "new Date(datestring)"

// const christmas = new Date('2023-12-25') // new Date(datestring) parses a string into a Date object, which is the same as Date.parse.
// console.log(christmas)

// // To specify a timezone, add +hh:mm after the time to provide the difference between UTC and the desired timezone.

// const nyeLocal = new Date('2023-12-31 23:59:59')
// const nyeUTC = new Date('2023-12-31 23:59:59+00:00')
// console.log(nyeLocal)
// console.log(nyeUTC)

// ---- Creation using "new Date(year, month, day, hours, minutes, seconds,ms)"

// const boxingDay = new Date(2023, 11, 26) // moth 11 is December, assumes local timezone
// console.log(boxingDay)

// const remembranceDay = new Date(2023, 10, 11, 11, 11,) // month 10 is November, assumes local timezone
// console.log(remembranceDay)

// ---------> Displaying dates (slide 70)

// const christmas = new Date('2023-12-25') // this assumes UTC timezone if time is not included
// console.log( christmas.toLocaleDateString() ) // 25/12/2023 - /dd/mm/yyyy if in Australia/NZ
// console.log( christmas.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }) )
// // both timezone and language are converted to Korean

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// JSON - (Slides 71 - 77)
// ------> JSON (JavaScript Object Notation) is a general format used to represent values and objects.
// is often used to send data between two separate applications via an API.

// JSON.stringify method converts objects into JSON (see below)

// const student = {
//     name: 'Sita',
//     age: 28,
//     courses: ['HTML', 'CSS', 'JS'],
//     occupation: null
// }
// console.log(JSON.stringify(student))

// JSON limitations - (Slide 72) 

// ------- JSON is a DATA-ONLY language-independent specification,
// so some JS-specific object properties are skipped by JSON.stringify
// namely: 
// ------> Function Properties (methods)
// ------> Symbolic keys and values
// ------> Properties that store undefined

// (example)

// const book = {
// title: "Gone With The Wind",
// printTitle() { // <----- this is ignored
// console.log(this.title)
// },
// releaseDate: undefined // <----- this is ignored
// }

// console.log(JSON.stringify(book)) // {"title":"Gone With The Wind"}


// JSON limitations - references (slide 73)

// No circular references with JSON.stringify.
// -- JSON can’t convert recursive structures into strings, 
// and will throw an error if you try:

// const room = {
// number: 23
// }
// const meetup = {
// title: "Strategy Conference",
// participants: ['Chris', 'Tina'],
// }

// meetup.place = room; // meetup references room
// room.occupiedBy = meetup; // room references meetup

// JSON.stringify(meetup); // TypeError: Converting circular structure to JSON

// JSON - Excluding and transforming: replacer (Slide 74)

// const meetup = {
//     title: "Strategy Conference",
//     participants: ['chris', 'Tina', ],
// }

// console.log( JSON.stringify(meetup['title', 'participants']))

// console.log(JSON.stringify(meetup, function(key,value) {
//     if(key != '' && value == meetup) return undefined // skip references to current object
//     else if (typeof value == 'function') return value.toString() // strinify functions
//     return value // otherwise return original value unchanged
// }, 2) ) // use 2 spaces for nicer formatting




// ---- Parse Method (Slide 76)

// Converts a string back into an object by PARSING it. Syntax: (below)
// -------> JSON.parse(str, [review])
// str is the JSON string to be decoded, reviver is an optional function(key,value)
// .....> used to transform the value. 
// Usually the REVIVER function is NOT NEEDED

// const meetup = {
// title: "Strategy Conference", participants: ['Chris', 'Tina'], date: '2023-06-01'
// }
// const meetupString = JSON.stringify(meetup) // convert object to string
// const meetupParsed = JSON.parse(meetupString, (key, value) => { // convert string to object
// if ( !isNaN(Date.parse(value)) ) return new Date(value) // if valid date, create Date object
// return value;
// })
// console.log(meetupParsed) // { title, participants: (as above), date: 2023-06-01T00:00:00.000Z }

// JSON.parse for deep cloning (slide 77)

// A deep clone is a copy of an object that not only duplicates its top-level properties.
// ------> also created new instances of any nested objects or arrays. 
// With JSON.stringify() we can transform an object into a string.
//-----> then back into a new object using JSON.parse()

// Example:

// const box1 = {
// size: 'large',
// dimensions: { width: 50, length: 70, height: 30, units: 'cm' },
// items: [ 'glasses', 'plates', 'cutlery' ]
// }
// const boxString = JSON.stringify(box1) // convert object to string
// const box2 = JSON.parse(boxString) // convert string back to new object
// // how could we check to make sure both boxes are the same but independent?



















