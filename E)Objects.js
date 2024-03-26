// objects are of refernece type
//creating objects
const person = {
    name:"vaishnavi",
    age : 21,
    "person hobbies":["sketching", "gardening"]
}
// console.log(person)

// //to access data from objects
// console.log(person.name)
// console.log(person.age)

// //how to add key value pair to object
// person.gender = "female" //using dot notation
// console.log(person)      //or
//console.log(person["name"])

//to add key value pair using bracket notation
// person["person"] = "vaishnavi"
// console.log(person)

//const key = "email"
//person.key = "vrm24@gmail.com"
//person["key"] = "vrm24@gmail.com"
//person[key] = "vrm24@gmail.com"
//console.log(person)

// //to iterate into objects
// // using for in loop
// for(let key in person)
// {
//     console.log(`${key}: ${person[key]}`)
// }

// //using object.keys
// //console.log(typeof (Object.keys(person)))
// const val = Array.isArray(Object.keys(person))
// console.log(val)

// //using for of
// for(let key of Object.keys(person))
// {
//     console.log(person[key])
//}

// //computed properties
// const key1 = "k1"
// const key2 ="k2"
// const value1 = "v1"
// const value2 = "v2"
// const obj = {
//      [key1] : value1,
//      [key2] : value2
// }
// console.log(obj)

// //spread operator in arrays
// const newArr = [..."abc"]  
// //const newArr = [...846323947326]  //gives error

// console.log(newArr)     // newArr = [ 'a', 'b', 'c' ]

// last key overwrites the first one , duplicate keys are not allowed
// const obj1 = {
//     key1 : "val1",
//     key2 : "val2",
//     key1 : "val3"
// }
// console.log(obj1)


// //spread operator in objects
// const obj1 = {
//         key1 : "val1",
//         key2 : "val2",
//     };
// console.log(obj1)

// const obj2 ={
//     key1 : "unique",
//     key3 : "val3",
//     key4 : "val4"
// }
// console.log(obj2)

//const newObj = {...obj1, ...obj2}
//const newObj = {...obj2, ...obj1}
//const newObj = {...obj1, ...obj2, key5:"aksjff"}
//const newObj = {..."vrm"}
// const newObj = {...["item1", "item2", "item3","item4"]}
// console.log(newObj)

//object destructuring
const kpop  = {
    name :"BTS",
    song : "Butter",
    country :  "south korea"
}
//const bandname = kpop.name
//const {name, song} = kpop;
// let {name:v1, song:v2, ...restProps} = kpop;
// console.log(v1,v2)
// console.log(restProps)

//object inside array
const users = [
    {rollNo : 129, fname : "vaishnavi", gender :"female"},
    {rollNo : 23, fname : "akanksha", gender :"female"}
]
// for(let user of users)
// {
//     console.log(user.rollNo, user.fname)
// }

// const [user1, user2] = users
// console.log(user1, user2)

const [{fname}, {gender}]= users
console.log(fname, gender)











