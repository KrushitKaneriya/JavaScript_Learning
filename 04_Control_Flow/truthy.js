const userEmail = "krushitkaneriya@gmail"

if (userEmail) {
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

// falsy values => false, 0, -0, "", null, undefined, NaN, BigInt 0n

// truthy values => true, "0", "false", " ", {}, [], function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }



// false == 0 // true
// false == '' // true
// 0 == '' // true


// nullish coalescing operator (??) => null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

// console.log(val1);



// ternary operator (condition) ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");


