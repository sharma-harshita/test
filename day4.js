// what is JS 
// execution context : hoisting, temporal dead zone, call stack, GEC , FEC
// data types
// variables : var let const 
// operators
// conditional statements : control flow 


// LOOPS 
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");


// FOR LOOP 
// for (initialization ; condition ; incr/decr ){

// }

//basic structure of loops
// for(let i = 0; i < 10 ; i++){
//     console.log("1");
// }


// let i = 0;
// for(; i < 10 ; i++){
//     console.log("1");
// }


// let i = 0;
// for(; i < 10 ; ){
//     console.log("1", i);
//     i++;
// }


// 3 * 1 = 3
// 3 * 2 = 6
// 3 * 10 = 30

// let i = 10;
// while (i > 1) {
//     console.log("value of i", i);
//     i--;
//     // infinte loop
//     // inc/dec statement which can end the loop
// }

// Ques : How to create infinite loop using while loop 
// while (true){

// }


// do - while 
// let i = 10
// do {
//     console.log(i);
//     i++;
// } while (i > 5);

// SHUSHSSS 


// for-in , for-of 

//array is a datatype in JS which can store values of different data type

// let arr = ["John", 12, 0.5, {id:1, name: "doe"}];
// // let arr2 = [1,2,2,3,54,56,734];

// for (const value of arr) {
//     console.log("of" ,value);
// }

// for(let index = 0; index< arr.length; index++){
//     console.log("traditional for",arr[index]);
// }

// console.log("NEXT LOOP");

// for (const value in arr) {
//     console.log("in",value, arr[value]);
// }




// console.log(str.indexOf("N"));
// console.log(str.charAt(7));
// console.log(str.replace("Newton", "P"));
// console.log(str.includes("Newton"))
// console.log(str.endsWith("ton"));

// reverse a string 
let str = "Newton School MERN Stack Development";
// School Newton

// convert it to an array
// reverse that array 
// convert back to string

const temp = str.split("").reverse().join("");
console.log(temp);

