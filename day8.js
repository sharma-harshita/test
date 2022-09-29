
// callback function : function which gets passed as an argument to another function 

// function add (callbackFun){    //parameters
//     callbackFun()
// }

// function b (){
//     console.log("B");
// }

// add(b)       // arguments

//objects 

// callback function : function which gets passed as an argument to another function 



// function calculateTotalAmount(...c){
//     console.log(c);
//     const total = c.reduce((acc, cur)=> acc = acc + cur, 0);
//     return total
// }

// let salariesPaidToAllDept = {
//     "HR" : 300000,
//     "IT" : 303000020312,
//     "Sales" : 234567898765,
// }

// const value = calculateTotalAmount(salariesPaidToAllDept.HR , salariesPaidToAllDept.IT, salariesPaidToAllDept.Sales)

// console.log(value);





//objects 
// it is a non primitive data type, which stores data in key-value pair
// 3 ways 
//object literals
// let obj = {
//     id : 13456789,
//     name : "John",
//     pincode : 305901,
//     city : "Ajmer"
// }

// //object constructor function
// let obj2 = new Object({name : "raj"});
// obj2.id = 23;
// obj2.district = "Ajmer";
// obj2["state"] = "rajasthan";


// console.log(obj2, obj);


// //own constructor function
// function Employee (name , age){
//     {
//         this.name = name,
//         this.age = age
//     }
// }


// let emp1 = new Employee("John", 24)
// emp1.salary = 30000;
// let emp2 = new Employee("Doe", 30)
// let emp3 = new Employee("Smith", 27)
// console.log(emp1, emp2, emp3);



// let obj = {
//     id : 1,
//     name : "John",
//     pincode : 305901,
//     city : "Ajmer"
// }


// let obj2 = {
//     name : "John",
//     salary : 305901,
// }

// obj2.age= 25


// let emp1 = {
//     rollno : 101,
//     color : "black"
// }

// // Object.keys
// // Object.values

// console.log("Object = ", Object.keys(emp1), Object.keys(obj2));
// console.log("Object = ", Object.values(emp1), Object.values(obj2));
// console.log(emp1.color);
// let arr = [1,2,3,4]
// console.log(arr);


// Array 
// Object 
// Function
// String 


// All the inbuilt function that we use are defined 
// inside their parent constructor function 


// let arr = [23,5,6,67]

// console.log(arr);

// Prototype is an object to access the parent constructor function. which will help you to access all the inbuilt functions defined inside the parent constrcutor function.
