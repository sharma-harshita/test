//generator functions, classes in JS
//the ones which can generate multiple and differents when
//being executed multiple times.
//star
//yeild
//next = returns you an object having value and done keys

//react redux saga middleware
//function* numbers(){
//     yield 10;
//     yield 20;
//     yield 30;
//     return 40;
//}

// const a = numbers();

// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());


// a normal function can return only one single value
// function add(){
//     return 10;
// }


//js classes
//static methods and properties

class Parent {
    //instantiate the variables, 
    static num = 10;
    // static methods should always return a value
    // when you do not want to share these properties with the instances.
    static xy(num){
        return num;
    }

    constructor(x, y){
        this.x = x;
        this.y = y
    }

    getArea = () => {
        return this.x * this.y;
    }
}


//inheritance = when you want to inherit the properties of 
//parent class you will use extends keyword
//2 types of inheritance - class based = child class will be inheriting the properties from the parent class
//prototypal inheritance = variables will be inheriting the properties from their parent constructor function.

class Child extends Parent{

}


const box1 = new Parent(10,20); //instance object
const value = box1.getArea();
console.log(Parent.num,Child.num,Child.xy(20), Parent.xy(Parent.num));
console.log("Area", value, box1.x, box1.y, box1);


// const child1 = new Child(12, 12);
// console.log(child1.getArea());;


// let arr = [1,2];
// console.log(arr);


//getters and setters.
// it will be defined as a function, and when you are accessing it 
// that time you dont have to invoke it like a function rather than 
// that you can directly access it like a normal property

// initially when object is created getter function will be undefined 
// later when that property will be accessed that time it will get its actual value 

// let obj1 = {
//     id : 1,
//     name : "John",
//     get latest(){
//         console.log("HEY eveyrone, keep quiet !!", this.name);
//     },
//     set latest2(x){
//         return this.name = x;
//     }
// }

// obj1.latest
// console.log(obj1);

// obj1.latest2 = "Doe";
// console.log(obj1);

//setter
// this function must will be taking the param
// to execute setter function , you will have to initialize it , that will become default
// param of setter 



// decorators in js 