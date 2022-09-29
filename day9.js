

// let obj = {
//     id : 1,
//     name : "John",
//     age : 24,
//     salary : 20000
// }

// for(let keys in Object.keys(obj)){
//     console.log(obj[keys], keys);
// }

// for(let value of obj){
//     console.log(value);
// }



//call apply bind in JS.
//gets used to invoke a function
//when you are using call apply and bind at that time you dont have to define the object at the time of definition as a parameter.
// then in that case to refer to that object you can use this keyword.
// first argument will always be the object only which the functions needs .

let user1 = {
    id : 1,
    name : "Doe",
    age : 24,
    dept : "HR"
}

let user2 = {
    id : 2,
    name : "Smith",
    age : 25,
    dept : "Sales"
}

// function userDetails (data, a , b){
//     console.log( data.name + " is " + data.age +" years old and he is working in " + data.dept + " dept.", a, b);
// }
// userDetails(user1, 24, 12)

function userDetails (a , b){
    console.log( this.name + " is " + this.age +" years old and he is working in " + this.dept + " dept.", a, b);
}

userDetails.call(user1, 24, 12);
// arguments other than main object will be passed will be passed individually

userDetails.apply(user1,[24, 12]);
// arguments other than main object will passed inside an array.

const newUserDetails = userDetails.bind(user1);

newUserDetails(24, 12);
//returns a new function with the reference of that object
// smith is 25 years old and he is working in Sales dept.

