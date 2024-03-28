//imp array methods

// //forEach
// /*The JavaScript forEach() method executes a provided function once for each array element. 
// The forEach() method is an iterative method that calls a callback function in ascending-index order.  */
// const numbers = [2,3,4,5]

// function multiply(number, index)
// {
//     console.log("Index is ", index)
//     console.log(number*2)
// }

// for(let i=0; i<numbers.length; i++)
// {
//     multiply(numbers[i],i)
// }

//instead of using this for loop we can use forEach
//numbers.forEach(multiply)

// numbers.forEach(function(number, index){
//     console.log(number*5, index)

// })

// const users = [
//     {fname :"vaishnavi" , age: 21},
//     {fname : "nikita", age: 24},
//     {fname : "shraddha", age:22 },
//     {fname : "vasudha", age: 21}
// ]

// users.forEach(function(user){
//     console.log(user.fname)
// })

//map method --> returns array
// /*JavaScript has a built-in map() method that creates a new array with the results of calling a callback function on each element in the array. 
// The callback function takes three arguments:
// The current element being processed, The index of the current element, and The array that map() was called on.
// The map() method does not modify the original array. */

// const numbers = [3,4,5,6]

// const square = function(number)
// {
//     return number*number
// }
// const sqrnum = numbers.map(function(number){
//     return number*number
// })
// console.log(sqrnum)

// const sqrnum = numbers.map((number, index)=>{
//     return ` index: ${index}  Squaere :${number*number}`
// })
// console.log(sqrnum)


// const users = [
//         {fname :"vaishnavi" , age: 21},
//         {fname : "nikita", age: 24},
//         {fname : "shraddha", age:22 },
//         {fname : "vasudha", age: 21}
//     ]

// const usernames = users.map((user)=>{
//         return user.fname
//     })
// console.log(usernames)


// //filter method
// const numbers = [2,3,4,5,6]

// const isEven = function(number)
// {
//     return number%2===0
// }
// const even = numbers.filter(isEven)
// console.log(even)

//reduce method
// const numbers = [1,2,3,4,5]

// const sum = numbers.reduce((accumulator, currentvalue)=>{
//     return accumulator+currentvalue
// })
// console.log(sum)
//  accumulator     currenvalue     return
//      1               2               3
//      3               3               6
//      6               4               10
//      10              5               15


// const product = [
//     {pId : 1, pname : "smartphone", price : 30000},
//     {pId : 2, pname : "Laptop", price : 90000},
//     {pId : 3, pname : "TV", price : 45000}
// ]

// const totalAmt = product.reduce((totalPrice, currenProduct) => {
//     return totalPrice + currenProduct.price
// },0)

// console.log(totalAmt)

// //  totalPrice      currentProduct.price        return
// //      0               {}                     30000
// //      30000           90000                   120000
// //      120000          45000                   165000


// //sort method

// const usernames = ["vaishnavi", "akki", "netra", "apurva"]
// usernames.sort()
// console.log(usernames)

// const numbers = [2,45,6,77,890]     //js considers it as string and sort accoridng to their ASCII values
// numbers.sort()
// console.log(numbers)

//const numbers = [2,45,6,77,890]     
// numbers.sort((a,b)=>{
//     return a-b       //for descending order use b-a
// })

//numbers.sort((a,b)=>a-b)
//working of above two codes:
//e.g 45, 6
//a-b --> 39 
//a-b -->positive(greater than 0)
//so change the positions of a and b -->a,b is converted into b,a

//if a-b is negative then first a then b
//console.log(numbers)

// const product = [
//     {pId : 1, pname : "smartphone", price : 30000},
//     {pId : 2, pname : "Laptop", price : 30000},
//     {pId : 3, pname : "TV", price : 45000}
//  ]

//  product.sort((a,b)=>{
//     return a.price - b.price
// })
//  console.log(product)

// find method
//const myArray = ["at","dog","cow","monkey"]
// function  islength3(string){
//     return string.length===3
// }
// const ans = myArray.find((string)=> {
//     return string.length ===3
// })
// console.log(ans)

// //find method
// /**The find() method in JavaScript is used to search for an element in an array that satisfies a provided testing function. 
//  * It returns the first element in the array that passes the test. 
//  * If no element passes the test, undefined is returned. */
// const users = [
//     {userId: 1, fname :"vaishnavi" },
//     {userId: 2,fname : "nikita"},
//     {userId: 3,fname : "shraddha" },
//     {userId: 4,fname : "vasudha"}
// ]
// const myUser = users.find((user)=>{
//     return user.userId===3 }
//     )
// console.log(myUser)

// //every method
// /**The every() method takes a callback function as an argument. 
//  * The callback function is called for each element in the array, 
//  * and the every() method returns true if the callback function returns true for all elements in the array. 
//  * If the callback function returns false for any element in the array, the every() method returns false. */
// const numbers = [2,3,4,5,67]

// function isEven(number){
//     return number%2===0
// }
// const ans = numbers.every(isEven)
// // const ans = numbers.every((number)=>number%2===0)
// // //callback function --> returns true/false(boolean)
// // //every method --> returns true/false(boolean)

// console.log(ans)

// //some method
// /**The some() method in JavaScript is an inbuilt method that is used to check if at least one element in an array 
//  * passes the test implemented by the provided function. 
//  * It takes a callback function as a parameter and returns true 
//  * if any element in the array satisfies the condition specified in the callback function, 
//  * otherwise it returns false. */
// const numbers = [2,3,5,7,9]

// const ans = numbers.some((number)=>number%10===0)
// console.log(ans)

// //fill method
// /**The fill() method in JavaScript changes all elements within a range of indices in an array to a static value. 
//  * It mutates the original array and returns the modified array. */

// const myArray = new Array(10).fill(0)
// console.log(myArray)

// const myArray = [1,2,3,4,5,6,7,8,9,10]
// myArray.fill(0,2,5)
// console.log(myArray)

//splice method
/**The splice() method in JavaScript is a powerful tool for modifying arrays by adding or removing elements. 
 * It can also be used to replace existing elements with new ones. 
 * The splice() method takes three arguments:
start: The index at which to start splicing.
deleteCount: The number of elements to remove.
items...: The elements to add to the array. */

const myArray = ['item1','item2','item3','item4']
// //delete
// const itemdel = myArray.splice(1,1)
// console.log(itemdel)
// console.log(myArray)

//insert
myArray.splice(1,0,'item5')
console.log(myArray)

    









