//inheritance in JS, hoisting with classes, mixins, polymorphism

// single level or single inheritance , where one parent and one child , child 
// will be inheriting the properties of the parent
// js supports this inheritance
// class A {

// }

// class B extends A{

// }


//multiple inheritance - one child class can inherit properties from 2 parent class
// class C extends B A{
    
// }
//js does not supports this inheritance


//multilevel inheritance
//Child class can also be a Parent class for some other class

//B is parent class now and C is child class.

// class A {

// }
// B is child and A is parent
// class B extends A{

// }

// C is child and B is parent
// class C extends A {

// }

// class D extends A{

// }


// add();
// console.log(a);
// var a = 10;
// function add (){
//     console.log("Hello");
// }

//accessing classes instance variables (a,b,c,d) is not possible before initialization of 
//class , Because classes are not hoisted like function in JS, they will give Reference error

// let a = new A(10);

// a.getData();

// console.log(a);
// console.log(value);
// let value = 19;
// var a = 17;

// class A {
//     constructor(x){
//         this.x = x
//     }
//     getData = () => {
//         console.log("Value of X", this.x);
//     }
// }

// let a = new A(10);
// let b = new A(10);
// let c = new A(10);
// let d = new A(10);

// a.getData();



//MIXINS

// class Parent {
//     constructor(len, ht){
//         this.len = len;
//         this.ht = ht
//     }

//     getArea = ()=>{
//         return this.len * this.ht
//     }
// }

// const p1 = new Parent(12, 20);
// const p2 = new Parent(12, 20);

// p1.__proto__.aaa = 10;

// const newProperties={
//     // add:function(){

//     // }
//     add(){
//         return 10+2
//     },
//     sub(){
//         return 10-2
//     }
// }

//this function takes 2 params , first would be the object in which you want to 
//add the properties present in second param
// Object.assign(Parent.prototype, newProperties)
// console.log(p1, p2);

// this is not possible 
// class Parent2 {
//     getChildData(){

//     }
// }
//js doesnot support multiple inheritance


//mixins = if you want to inherit extra properties in a child which parent doenot have
//then you can create an object and then assign it into prototype property, then it 
//will be accessible in all the instance variables.

// class Child extends Parent {
//     getChildData()  // I cannot define in my parent or child class, 
// }



//Polymorphism
//multiple functions can be created using single name of the function

// class A {
//     a(){
//         console.log("A");
//     }
// }


// class B extends A{
//     a=()=>{
//         console.log("B")
//     }

//     add(){

//     }
// }

// class C extends B{
//     a(){
//         console.log("C");
//     }
// }

// const c = new C();
// c.a();


//method overriding
//if you are having two functions defined with same name then last function
//definition will be executed

// function add(){
//     console.log(24*24);
// }

// function add(){
//     console.log(18*18);
// }

// add();


//constructor prototypes, property descriptors
//it is a property which return you a function, this function returns 
//you the parent constructor function

// const obj1 = {
//     id:1,
//     name:"John",
//     salary:20000
// }


// let arr1 = [1,2,3,4,4]

// console.log(obj1.constructor === Object);
// nullish coallescing operator in JS



//property descriptors
//not iterable, accessible, non modifable
// let user = {
//     empId : 1,
//     empSalary : 20000
// }

// Object.defineProperty(user, "location", {value:"Delhi"})
// Object.assign(user, {dept:"HR"})
// user.location = "gurgaon";
// user.dept = "IT"

// console.log(user);
// for (const value in user) {
//     console.log(value);
// }

// if(89){
//     console.log("IF");
// }else{
//     console.log("ELSE");
// }

// "use strict"

// function foo(){
//     let x=y=0; 
//     console.log(typeof x, y); 
//     x++;  
//     y++;
//     return x;
// }

// console.log(foo(),typeof x,typeof y);


fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>{
        data.map((value)=>{
            const ele = document.createElement("h1");
            ele.innerText = value.title;
            document.getElementById("container").appendChild(ele);
        })  
    })

    