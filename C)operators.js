//let fname;    //undefined
//var fname;    //undefined
//const fname   --> throws error const must initialzed
//console.log(fname) 

//bigint
// let num = 24372446n
// console.log(typeof num)

//console.log(Number.MAX_SAFE_INTEGER)


//boolean and comparison
// let num1 = "24"
// let num2 = 24
// console.log(num1 == num2)
// console.log(num1 === num2)

// != vs !==
// !=  -> only checks values
// !==  --> checks values as well as types

// let num1 = 24
// let num2 = "24"
// console.log(num1!==num2)

//ternary operator

// let age = 21
// let drink = age>=5?"coffee":"milk"
// console.log(drink)

//&&  ||
// let fname = "vaishnavi"
// let age = 21
// age = 2
// if(fname[0]=="v" && age>=18)
//     console.log("You are above 18")

// else
//     console.log("you are teenager")

// if(fname[0]=="v" || age>=18)
//     console.log("You are above 18")

// else
    // console.log("you are teenager")


//break and continue
console.log("Using break")
for(let i=1; i<=10; i++)
{
    if(i==5)
        break;
    console.log(i)
}

console.log("Using continue")
for(let i=1; i<=10; i++)
{
    if(i==5)
        continue;
    console.log(i)
}