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


// function testPromise (num){
//     return new Promise((resolve, reject)=>{
//         if(num%2==0){
//             resolve("Success")
//         }else{
//             reject("Reject")
//         }
//     })
// }

// const promise1 = testPromise(20);
// const promise2 = testPromise(21);
// const promise3 = testPromise(10);

//await = always write this when you want the execution flow to stop at a certain line.
//await always will be written in an async function

// async function test(){
//     const result = await Promise.all([promise1]);
//     const result1 = await Promise.allSettled([promise1,promise2,promise3]);
//     console.log(result1, result);
// }

// test()

// testPromise(21)
//     .then((res)=>{
//         console.log("in then");
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log("in catch");
//         console.log(err);
//     })
//     .finally(()=>{
//         console.log("Promise done");
//     })

// console.log("HEY")
// // Promises 
// // helps you to make async behaviour of JS-(webapis-setTimeout, setInterval, fetch) to sync 

// function printVowel (char, timeout){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log(char);
//             resolve()
//         }, timeout);
//     }) 
// }

//promise chaining

// printVowel("A", 5000)
//     .then(()=>printVowel("E", 4000))
//     .then(()=>printVowel("I", 3000))
//     .then(()=>printVowel("O", 2000))
//     .then(()=>printVowel("U", 1000))


// console.log("HELLO")

// //async await
//Promises : pending, fulfilled , rejected

// function checkCanIVote(time,data) {
//     // return the output using return keyword
//     // do not console.log it
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(data>=18){ 
//                 // console.log("You can vote");
//                 resolve("You can vote");
//             }else{
//                 // console.log("You can not vote");
//                 reject('You can not vote')
//             }
//         },time)
//   })
// }

// checkCanIVote(2000, 70)
//     .then((data)=>{
//         console.log(data) // prints 'You can vote'
//     })
//     .catch((err)=>{
//         console.log(err) // does not do anything
//     })


// checkCanIVote(2000, 16)
//     .then((data)=>{
//         console.log(data) // does not do anything
//     }).catch((err)=>{
//         console.log(err) // prints 'You can not vote'
//     })




// fetch 
// fetch is a function which allows you to access and retrieve data from the API.
// imp point : you will have to convert the data into json format first, in order to access it

function showImage(){
    fetch("https://www.breakingbadapi.com/api/characters?limit=2")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        const imageTest = document.createElement("img");
        imageTest.setAttribute("src", data[0].img);
        document.getElementById("container").appendChild(imageTest)
    })
}

