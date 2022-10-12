// function add(sub){
//     console.log("A")
//     const value = sub()
//     console.log("B", value);
// }

// sub()

// function subtraction(a,b){
//     return a-b
// }

// temp && add(subtraction)

//control the execution of the function based on some condition
//or if you want to use the result of the callback function to
// execute the rest of the code 

//function currying

// function a (){
//     return function(){
//         return function (){
//             return function (){
//                 return 10
//             }
//         }
//     }
// }

// const value = a();
// const value2 = value();
// const value3 = value2();
// const value4 = value3();

// const value = a()()()();
// console.log(value);


// type coercion  = implicit
// type inversion = explicit

// var a = "6";
// var b = 10;

// let c = a+b;
// console.log(typeof  c, c);  //string

// console.log(typeof Number(b));


//scope , scope chaining , closure = combination of the function and nearby environment(lexical)
// allows you to access teh variables from other scope when the variable is not present in its own scope.

// //functional scope
// let a = 10;
// function add(){
//     let a = 20;
//     function test (){
//         let a=0;
//         a += 10
//         console.log("test",a);
//     }
//     function temp (){
//         a += 10;
//         console.log("temp",a);
//     }
//     test();
//     temp();
// }

// add()

//global scope
// var a = 100;
// block scope - part of local scope
// {
//     var a = 20;
//     console.log(a);
// }


// current(functional or block) scope > global scope 


for(var i = 1; i<5; i++){
    setTimeout(()=>{
        console.log(i);
    },4000)
}


// let a = 10;

// function a(){
//     var b = 10;
// }

// console.log(a())


// decorator generators , OOPS in js 