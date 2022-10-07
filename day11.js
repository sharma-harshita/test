// let a1 = [1,2];
// let a2 = [1,2];
// let a3 = a1;
// let a4 = 30;
// let a5 = 40;
// in this case both will be pointing different memory
// console.log(a1==a2, a1===a2, a3==a1, a4===a5);

// deep copy , shallow copy in JS       HOMEWORK 

//lets not discuss this topic

// shallow copy -> when you want to create an object using another object using assignment operator, both variables will point to same memory location, change in one variable will impact both variables.

// deep copy -> to make sure both objects are pointing to diff locations you will be using stringify.

//shallow copy
// let obj1 = {id:1, name:"John"};
// let obj2 = obj1;
//let obj2 = {...obj1};   //spread operator
//let obj2 = JSON.parse(JSON.stringify(obj1));    //parse
// console.log(obj1,JSON.stringify(obj1), JSON.parse(JSON.stringify(obj1)));
// console.log(obj1, obj2);
// obj2.name="Doe";
// console.log(obj1, obj2);


// MONGO Database 
// [{},{},{}] = JSON objects 
// map reduce filter 
// JSON.parse  == converts string object syntax to an object.
// JSON.stringify == converts object notation to string


// setTimeout = 
// setInterval 

// async programming in JS - Web APIs
// JS is synchronous programming language , 

// console.log("Before setTimeout");

//takes in two parameters, callback function, another is time

//this is the def of setTimeout - it will execute the callback function once the given time will be over
// setTimeout(()=>{
//     console.log("Settimeout output");
// }, 5000)

//this is the def of setInterval - it will execute the callback function after every interval of the given time
// setInterval(()=>{
//     console.log("Settimeout output");
// }, 5000)

// console.log("after setTimeout");

// Is this clear ???


// console.log("A");
// setTimeout(() => {
//     console.log("B");
// }, 5000);
// setTimeout(() => {
//     console.log("C");
// }, 2000);
// setTimeout(() => {
//     console.log("Z");
// }, 0);

// setInterval(() => {
//     console.log("Interval");
// }, 5000);
// console.log("D");

//a c b

// Event loop 
// -> 


// 


// callback function 

// function printVowel(char ,time, anotherChar){
//     // setTimeout(function(){
//     setTimeout(()=>{
//         console.log("Char", char)
//         anotherChar();
//     }, time)
// }

//callback hell  - nested callback functions passed to a function 
//creates a pyramid structure 

// printVowel("A", 5000, ()=>{
//     printVowel("E", 4000, ()=>{
//         printVowel("I", 3000, ()=>{
//             printVowel("O", 2000, ()=>{
//                 printVowel("U", 1000, () =>{ 
//                     console.log("END")
//                 })
//             })
//         })
//     })
// })




// printVowel("E", 4000)
// printVowel("I", 3000)

// Print  TimeOut
// a       5 sec
// e       4 sec
// i       3 sec
// o       2 sec
// u       1 sec




// Promises 
// helps you to make async behaviour of JS-(webapis) to sync 

function printVowel (char, timeout){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log(char);
            resolve()
        }, timeout);
    }) 
}

//promise chaining

printVowel("A", 5000)
    .then(printVowel("E", 4000))
    .then(printVowel("I", 3000))
    .then(printVowel("O", 2000))
    .then(printVowel("U", 1000))

console.log("HELOO")
//async await



    
//Promises : pending, fulfilled , rejected