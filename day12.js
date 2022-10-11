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


function a (){
    return function(){
        return function (){
            return function (){
                return 10
            }
        }
    }
}

// const value = a();
// const value2 = value();
// const value3 = value2();
// const value4 = value3();

const value = a()()()();

console.log(value);