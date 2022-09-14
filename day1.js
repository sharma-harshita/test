// What is JS ? 

// scripting language, dynamic language, functional programming, synchronous language
// single threaded language, JIT compilation, Client side , server side as well. Only Full stack
// weakly typed language


// Variables : 3 ways : let var const
// data type : 2 - primitive , non primitive

// Primitive 
// Number 
// String 
// Symbol 
// boolean
// undefined 
// null

// Non primitive 
// arrays 
// objects


// var e;


// var a = 10;
// var a = "John"

// var = glocal scopic , redeclaration , reinitialize
// let and const = block scope , No redeclaration

// let d;


// let b = 10;
// b = "Doe"

// // let  = reinitialize

// const f;


// const c = 123;
// const = NO renintialize


// brendan eich
// JS engine, 
// Execution Context : GEC , FEC
// phases : 2 - memory allocation, code execution

// MA 
// memory will be allocated to variables : undefined 
// function also gets memory allocted : actual value


// CE
// variables = actual value
// functions = FEC, will pushed to call stack, the moment execution is over then, removed from call stack and excution will come back to GEC

// hoisting 
// 



// JS engine = it helps you to execute JS code 
// Chrome = V8
// Explorer = chakra 
// Mozilla = Spider monkey






// for (var i=0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }
// task queue , event loop 

// console.log(b);

// const a = function() {
    
// }

// console.log(a);


// const a = function  (){

// }

// a()


// Hoisting says that move all the decalaration and initialization of variables and definition of function at the top of the file so that we can reduce or avoid getting Refrence error because of memory allocation.

// const a = 10;
// console.log(a); //Reference error


// variables declared using let and const are not accessible until and unless they are not initialized.


// console.log(3 > 2 > 1);

// variable = declaration , initialization
// function = defining , invoking


// function add() {

// }


// TDZ = let const 


// closures , lexical environment
// let a = 20;

// function outer(){
//     function inner (){
//         console.log(a);
//     }
//     inner()
// }

// outer()




// function one(a){ 
//     console.log("Value",a)
// }

// one (2)


// function one(a){ 
//     return function(b, c){
//         return a*b*c;
//     }
// }
    
// let value = one (2)(3, 10)

// console.log(value);
// one (2)(3)
// function currying ()()()()



// Objects = literals , object constructor
// key value pair
// var obj = {id: 1, name : "John"}

// console.log(obj.name);
// console.log(obj["name"]);

// const value = Object.values(obj)

// console.log(value)
// console.log(Object.keys(obj))


// const obj1 = new Object({id: 1, name:"Doe"})
// obj1["age"]  = 24;
// obj1.salary = 3000000;

// var user = {
//     id: 1,
//     age: 24, 
//     showDetails : function (id){
//         console.log(id, this.age);
//     }
// }

// user.showDetails(12)


// operators, decision making : wednesday 
// Thursday : 9:00pm 
// Friday : no class 
// saturday : 9:00pm
// sunday : no class (doubt)
