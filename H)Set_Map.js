// iterables are those on which we can apply for of loop
//e.g string and array


// const item = ['item1', 'item2', 'item3', 'item4']


// //object is not iterable
// const users = {key1 : 'value1', key2 :'value2'}
// for(let item of users)
// {
//     console.log(item)
// }

//array like objects
/**Array-like objects are data structures that have many of the properties of an array but are not arrays themselves. 
 * They are objects that have indexed access to elements and a length property, much like arrays. 
 * However, they do not inherit from the Array prototype and therefore do not have array-specific methods such as push(), pop(), forEach(), etc. */
//e.g. string

// const fname = "vaishnavi"
// console.log(fname.length)
// console.log(fname[3])

//sets(it is iterrable)
//stores data
//sets also has its own methods
//No index based access
//order is guaranteed
//unique items only(no duplicates are allowed)

// const numbers = new Set([1,2,3,2]);
// console.log(numbers)

const numbers = new Set()
numbers.add(1)
numbers.add(2)
numbers.add(3)
numbers.add(4)
numbers.add(5)
numbers.add(6)
numbers.add(7)

// numbers.add(['item1','item2'])
// numbers.add(['item1','item2']) //this is different so both this arrays are stored in set

// if(numbers.has(1))
//     console.log("1 is prersent")
// else   
//     console.log("1 is not present")

// for(let number of numbers)
// {
//     console.log(number)
// }

// const myArr = [1,2,3,4,5,6,7,8,8]
// const uniqueElements = new Set(myArr)
// console.log(uniqueElements)
// let length = 0;
// for(let element of uniqueElements)
// {
//     length++;
// }
// console.log(length)

// //maps
// //In map, key can be of any type
// //In case of object key can be of type string or symbol only
// const person = new Map()
// console.log(person)
// person.set('fname','vaishnavi')
// person.set('age',21)
// console.log(person)
// console.log(person.keys())
// console.log(person.get('age'))
// for(let key of person.keys())
// {
//     console.log(key, typeof key)
// }

//another way
//const person = new Map(['fname','vaishnavi'],['age',22])
// for(let key of person)
// {
//     console.log(key)
// }

// const person1 = {
//     id :1,
//     fname: 'vaishnavi'
// }
// const userInfo = new Map()
// userInfo.set(person1,{age:8, gender:'female'})
// console.log(userInfo)

