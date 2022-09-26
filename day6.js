// //functions
// // any block of code which is being used multiple times then rather than writing it 
// // again and again better to create a function and then execute the function for that.


// // let radius = 2;
// // let area = 3.14 * 2* 2;

// // let r2 = 3;

// // console.log(area);

// // definition / declaration of function


// // function test () {
// //     console.log("Inside function")
// // }

// // // calling / invoking / executing a function
// // test()


// // function declaration v/s function expression 

// // something where function is created using function keyword
// // function add () {
// //     console.log("Add");
// // }

// // add()

// // function is assigned to a variable , to execute this function you will have to use varible
// // named function
// // const sub = function () {
// //     console.log("SUB");
// // }

// // sub()


// // const mul = () => {console.log("MUL");}

// // mul()


// // function declaration - plain function
// // function expression - function is assigned to a variable
// // named function - function is assigned to a variable
// // arrow function - you dont have any function keyword , rather than that you have an arrow 
// // inbuilt functions like map reduce filter
// // anonymous function - a function not having any no name => method
// // method - an anonymous function assigned as a value to a key of an object.
// // first class functions - (b) can be passed as an argument to another function and 
// // can be returned from another function
// // high order function - function which can accept a function as an argument and can return 
// // another function 
// // callback function - function which can only be passed as an argument to another function

// // let user = {
// //     id : 1,
// //     name : "JOHN",
// //     age : 24,
// //     details : function(name){
// //         console.log(user.name, name, this.age);
// //     }
// // }

// // console.log(user.name);
// // user.details("DOE")




// function higherOrderFun (firstClass , firstCLas, name){
//     console.log("A", name);
//     firstClass()
//     firstCLas()
// }


// function b(){
//     console.log("B");
// }

// function c(){
//     console.log("C");
// }

// a(b,c, "Harsh")



// function higherOrderFunction(){
//     return function firstClassFunction(){
//         console.log("HEY");
//     }
// }










// // function add (x, y){
// //     console.log(x,y);
// // }

// // let v = 1;
// // let w = 3
// // add(v, w)


// // xy = parameters , variables used at the time of function definition
// // vw = arguments, variables used at the time of execution


// let a = 30;
// function outer (){
//     let a = 10;
//     function inner (){
//         // let a = 20;
//         function innerChild(){
//             console.log(a);
//         }
//     }
//     inner()
// }

// outer()


// closure : if a variable that you are trying to access in a function, it will look into its 
// own scope , else then it will check in its neighbouring env or lexical env.
// combination  of function and lexical env . 
// lexical env : nearest scope 


let a = 10;

function add (){
    let b = 10;
    const value = a + b + 10;
    console.log(value);
}

add();
console.log(b);