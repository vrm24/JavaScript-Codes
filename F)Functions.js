//function expression

// const hello = function(){
//     console.log("hello!!")
// }
// hello()

//arrow functions
// const hello = () =>{
//     console.log(24%2===0)
// }

// //or 
// const hello = () => 24%2===0;
// console.log(hello())

//hoisting -->Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope before code execution.
//This means that a variable or function can be used before it has been declared.
// hello()
//  function hello(){
//     console.log("hello!!")
// }

// //Function inside a function
// function app()
// {
//     const myFunc = () =>{
//         console.log("Hello myFunc")
//     }

//     const addTwo = (num1, num2) =>
//     {
//         return num1+num2
//     }

//     const mul = (num1, num2) => num1*num2;

//     console.log("Inside app()")
//     myFunc()
//       console.log(addTwo(2,4))
//       console.log(mul(4,5))
// }
// app()

// //Lexical scope
// /*Lexical scope in JavaScript is a way of defining how variables and 
// functions interact based on their position within the code.
// It determines the scope of a variable based on where it is declared, 
// not where it is used */
// const myVar = "value1"

// function myApp()
// {
//     function myFunc() 
//     {
//         console.log("Inside myFunc")
//         //const myVar = 24
//         console.log(myVar)
//     }

//     const myFunc2 = function() {}

//     const myFunc3 = () => {}

//     console.log(myVar)
//     myFunc()
// }

// myApp()


//block scope vs function scope
//let and const are block scope
//var is function scope

//block
// {
//     var name = "vaishnavi"
//     console.log(name)
// }
// {
//      console.log(name)    
// }

// {
//     let name = "vaishnavi"
//     console.log(name)
// }
// {
//     console.log(name)    // throws error becacuse let has block scope
// }

// if(true)
// {
//     var fname = "vaishnavi"
//     console.log(fname)
// }
// console.log(fname)

// function myApp()
// {
//     if(true)
//     {
//         //let fname = "vaishnavi"
//         var fname = "vaishnavi"
//         console.log(fname)
//     }
//     console.log(fname)
// }
// myApp()


// // without using default parameters
// function addTwo(a,b)
// {
//     if(typeof b ==="undefined")     //if value of b is not given then we can use this
//         b=0;
//     return a+b
// }
// const ans = addTwo(5)
// console.log(ans)

// //using default parameters
// function addTwo(a,b=0)  // b=0 is the default value if no value is passed for b
// {
//     return a+b
// }
// const ans = addTwo(5)
// console.log(ans)

//rest parameters
// function myFunc(a,b,c)
// {
//     console.log(`Value of a is ${a}`)
//     console.log(`Value of b is ${b}`)
//     console.log(`Value of c is ${c}`)
// }
// myFunc(1,3,4,3,4,5,6)       // here a=1, b=3 & c=4
//here if we wan to store first two values in a&b and all the 
//remaining in c in the form of an array .. for that we use 
//rest parameters

// function myFunc(a,b,...c)
// {
//     console.log(`Value of a is ${a}`)
//     console.log(`Value of b is ${b}`)
//     //console.log(`Value of c is ${c}`)     //prints   4,3,4,5,6
//     console.log("Value of c is ", c)    //prints in the form of array
// }
// myFunc(1,3,4,3,4,5,6)  


// function addAll(...nums) //num array stores all the passed elements
// {
//     //console.log(nums) 
//     let total = 0
//     for(let num of nums)
//     {
//         total +=num
//     }
//     return total

// }
// const sum = addAll(1,2,446,6,46,74,3)
// console.log(sum)

//parameter destructuring
//mostly used in react
//object
const person = {
    fname : "vaishnavi",
    gender : "female"
}
// function printDetails(obj)
// {
//     console.log(obj.fname)
//     console.log(obj.gender)
// }
// printDetails(person)

// function printDetails({fname, gender})  //this is destructuring
// {
//     console.log(fname)
//     console.log(gender)
// }
// printDetails(person)

// //callback function
// /*A callback function in JavaScript is a function that is passed as an argument 
// to another function. This allows a function to call another function. 
// A callback function can run after another function has finished. */
// function myFunc2()
// {
//     console.log("Inside myFunc2")
// }

// function myFunc(a){
//     a()
//     console.log(typeof a)
// }
//myFunc(myFunc2) //here we are passing a function as a parameter to another function ; it is called callback function


//function returning a function
/*A function that returns another function in JavaScript is called a higher-order function. 
This means that the function takes another function as an argument, or returns another function as a result. 
Higher-order functions are very powerful and can be used to create complex and reusable code. */
function myFunc(){
    function hello(){
        console.log("Hello!!")
    }
    return hello
}

const ans = myFunc()
ans()







