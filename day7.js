
// if you are accessing any variable before its initialization then it will throw an error : Reference error
// Reference error 
// type error
// syntax error

// Hoisting : to avoid ref error we move the declaration of variable and functions on the top 

// var a = "Name";
// console.log(a.reverse());

//Rest parameter, rest operator

// function structure(...c){
//     return c;
// }

// structure(1,2,3,4, 4,5,6,7, "John")

// const arr = [1,2,3,4,45,5,6,6,4,5,46];
// let arr2 = ["John", "doe", ...arr];
// console.log(arr2);

//rules: 
// it will always be used as a function parameter.
// it will always be the last parameter


// default parameters in functions
//es5 version of JS
// function areaRect(a, b){
//     let length = a || 12;
//     let width = b || 12;
//     return length*width;
// }

//es6 version of JS
// function areaRect(a = 12, b = 12){
//     let length = a;
//     let width = b;
//     return length*width;
// }
// const value = areaRect(10)
// console.log(value);


// IIFE - immediately invoked function expression.
// secrity purpose of variables or data , variables declared inside the function will not be accessible outside.
// we want that the moment files gets executed , the function should be invoked.
// anonymous function
// at the time of definition only you will execute the function as well.


// (function (x,y){
//     let a = 10;
//     console.log("Value of a: ", a, x, y);
// })(10, 12);


// temp()
// console.log(a);

try{
    // console.log();
    let a = 10;
    console.log(a);
    console.log(b);
    console.log("try block");
}catch(error){
    console.log("Catch block");
}

// try-catch block basically helps you to handle the generic errors that can 
// come up in the JS code like Referece error or type error or the errors 
// coming at run time 

// the moment any error will come in try block , it will move the execution to catch block 



