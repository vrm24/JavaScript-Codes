//array push pop
let fruits = ['grapes', 'watermelon', 'mango']
//push
// console.log(fruits)
// fruits.push("guava")
// console.log(fruits)

//pop
// let popped = fruits.pop()
// console.log(popped)
// console.log(fruits)

//unshift  --> adds element at the start of array
// fruits.unshift("banana")
// fruits.unshift("cherry", "orange")
// fruits.unshift(123)      //converts 123 into string
// console.log(fruits)
// console.log(typeof fruits)
// console.log(typeof fruits[0])

//shift
// console.log(fruits.shift())
// console.log(fruits)

//push, pop is faster than shift, unshift because  shift unshift consumes time in shifting
//shift and unshift works at begining of an array
// push pop work with the end of the array.

//primitive vs reference data types
// let num1 = 24
// let num2 = num1  // num1 and num2 got different memory in stack
// console.log(num1,num2)
// num1++
// console.log(num1,num2)

//refernce type
//array
// let arr1 = ["item1","item2"] // stored in heap and pointer of arr1 in stack points to memeory location of arr1 in heap
// let arr2 = arr1         // points to same memory location
// console.log(arr1, arr2)
// arr1.push("item3")
// console.log(arr1, arr2)

//how to clone array
//how to concatenate two arrays
let arr1 = ["item1","item2"] 
// let arr2 = arr1         
// console.log(arr1===arr2)
//let arr2 = arr1.slice(0)    //more faster
//let arr2 = [].concat(arr1)

//new way
//spread operator
// let arr2 = [...arr1]
// arr1.push("item3")
// console.log(arr1===arr2)

//let arr2 = arr1.slice(0).concat(["item3","item4"])
// let newarr = ["item5", "item6"]
// //let arr2 = [...arr1,"item3", "item4",...newarr]
// let arr2 = [...arr1,...newarr]

// console.log(arr1, arr2)

// for(let i=0; i<fruits.length; i++)
// {
//     console.log(fruits[i])
// }

//for of loop in array
// for(let fruit of fruits)
//     console.log(fruit)

// for in loop
// for(let fruit in fruits)
//     console.log(fruits[fruit].toUpperCase())

//Array destructuring
const myArr  = ["val1", "val2", "val3","val4"]
// let v1 = myArr[0]
// console.log(v1)

// let [v1, v2] = myArr
//if we want to store third value in v2
//let [v1, ,v2] = myArr
//console.log(v1,v2)

//let newArr = myArr.slice(2)
//alternative for above code
let [v1,v2,...newArr] = myArr
console.log(newArr)








