// arrays 
// is a non-primitive data type
// a structure which can hold values of different data types 


// console.log(arr);

// let arr2 = new Array();
// arr2[0] = 1;
// arr2[2]= 12.3
// arr2[10] = 23;
// console.log(arr2, arr2[1]);

// console.log(arr.length);


// push and pop = add/remove elements at the end of array
// shift and unshift = start of the array
// let arr = [1, 23, 43.3, "John", {id:1,name:"Doe"}, true]
// console.log(arr);

// arr.push(98);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.unshift(98);    //add at the start
// console.log(arr);

// arr.shift();    // remove from the start
// console.log(arr);

// arr.reverse()
// console.log(arr);

//some every    = always return a boolean value

// let num = [1,2,3,4,67,91];

// const output = num.every(a => a < 50);
// const outputSome = num.some(value => value > 50);
// console.log(output, outputSome);

// foreach map reduce filter
// xy = b function , callback function  
// function a (xy){
    // xy()
// }

// function b (){
// }

// a(b)

// callback = gets passed as an argument to another function

// map v/s forEach

// let num = [1,2,3,4,5,6];
// const newNum = num.filter(value => value > 3)

// console.log("original array", num);
// console.log("new array", newNum);

// map = returns a new array with modified value, doesnt modify original array 
// foreach = modifies in the same array only

// function a (x){
//     return x;
// }

// const value = a(23);
// console.log(value, a(23));

//input
const user = [
    {id:1, name:"John", age:20, salary:25000}, 
    {id:2, name:"Doe", age:24, salary:10000}, 
    {id:3, name:"Harsh", age:27, salary:20000}
]

// filter the people who has age less than 25

// const newUser = user.filter(value => value.age < 25).map((value, index) => ({...value, salary : value.salary+10000})).reduce
// console.log(newUser);

// ques
// whereever age is less than 25, increment salary by 10000, and tell me how much company has to provide for the salary 

// output
// const newUser = [
//     {id:1, name:"John", age:20, salary:35000}, 
//     {id:2, name:"Doe", age:24, salary:20000}
// ]


//constraint one line only



// spread operator ... //********************** */
// Spread operator basically destructure the non-primitive data types like array and objects so that you access its elements individually.

// destructure the elements 

// let arr1 = [1, 2, 3, 6, 8, 9];
// let arr2 = [10,20, ...arr1]

// let obj1 = {
//     id: 1,
//     name: "doe"
// }

// let obj2 = {
//     age: 24,
//     ...obj1,
//     name:"JOHN"
// }
// let obj2 = obj1;
// obj2.name = "DOE"
// console.log(obj1, obj2);

// SHALLOW COPY IN JS 




//reduce 
// let arr = [2, 3, 4, 90, 28];

// let sum = 0;

// for(let i=0; i<arr.length; i++){
//     sum = sum+arr[i]
// }

// console.log(sum);

// reduce => two value , accumulator and current

// const value = arr.reduce((acc,cur)=> acc=acc+cur, 1000000)
// console.log(value);

// .map(value)


function add (a, b){
    console.log(a,b);
}