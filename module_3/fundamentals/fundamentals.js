

// const phone={
//     model: 'iphone17',
//     color: 'black',
//     storage: 256
// }

// for (let key in phone){
//     console.log('key: ' + key)
//     console.log('value: ' + phone[key])
// }

// let person1 = {name: 'Anna'}
// let person2 = person1
// person1.name = 'Brian'
// console.log(person2.name)
// let person3 = 'carly'
// let person4 = person3
// person3 = 'david'
// console.log(person4)

// const user = {name: 'Elliot', age: 27   }
// // const userClone = {} // empty object, refers to different memory location

// // for (let key in user){  // iterate over user properties
// //     userClone[key] = user[key] // re-create them in userClone
// // }

// // console.log(userClone) // {name: 'Elliot', age: 27}

// const userClone = {...user, age: 28, location: 'New Zealand'} // spread operator, creates a shallow copy of user object, then we can override or add properties; 
// console.log(userClone) // {name: 'Elliot', age: 27}
// const vehicle = {make: 'Toyota', model: 'Camry'};
// const mergedUser = {...user, ...vehicle}; // merge two objects into one
// console.log(mergedUser) // {name: 'Elliot', age: 27, make: 'Toyota', model: 'Camry'}


// cosnt box1 = {
//     weight: '20kg',
//     dimensions: { // nested object
//         width: '30cm',
//         height: '10cm'
//     }
// }
// const box2 = {...box1} // shallow copy

// box1.dimensions.height = '12cm' // modifying nested object in box1
// console.log(box2)


// const user = {
//     name: 'bilbo baggins',
//     sing: function(){
//         console.log('Roads go ever on and on')
//     },
//     sing2(){
//         console.log('Over rock and under tree')
//     }
// }
// user.sing(); //Roads go ever on and on
// user.sing2(); //Over rock and under tree


// const user = {
//     name: 'Bilbo Baggins',
//     printGreeting(){
//         console.log(`Hello, I'm ${this.name}`) // 'this' refers to the current object (user)
//     }
// }

// user.printGreeting() // Hello, I'm Bilbo Baggins

// const user = {
//     name: 'Bilbo Baggins',
//     printThis() {
//         console.log(this)
//         return this // 'this' refers to the current object (user)
//     },
//     printGreeting() {
//         console.log(`Hello, I'm ${this.name}`) // 'this' refers to the current object (user)
//     }
// }

// user.printThis().printGreeting() // Hello, I'm Bilbo Baggins

// function User(first, last) {
//     this.first = first;
//     this.last = last;
//     this.hasShortName = () => this.first.length <= 3;
//     }

//     let user1= new User('Tim', 'Smith');
//     console.log(user1);
//     console.log(user1.hasShortName()); // true




// class User {
//     constructor(first, last) {
//         this.first = first;
//         this.last = last;
//     }

//     hasShortName() {
//         return this.first.length >= 3
//     }

// }

// let user2 = new User('Tina' , 'Smith')
// console.log(user2)
// console.log(user2.hasShortName())





"" + 1 + 0 // this is 10 because js concatenates the string and "" is an empty string to the 1 and 0 are getting put in bewteen as the + interger is what is concatenates
"" - 1 + 0 // same thing as on top but the interger of - then + makes it combine the - and 1 and then adds the 0 which equates to -1 since 0 has no interger properties. 
true + false // (i think) if true = 1 if false = 0 so !true 
!true
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
" -9 " + 5
" -9 " - 5
null + 1
undefined + 1
undefined == null
undefined === null
" \t \n" - 2
