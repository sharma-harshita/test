// let a1 = [1,2];
// let a2 = [1,2];
// let a3 = a1;
// let a4 = 30;
// let a5 = 40;
// in this case both will be pointing different memory
// console.log(a1==a2, a1===a2, a3==a1, a4===a5);

// deep copy , shallow copy in JS       HOMEWORK 

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