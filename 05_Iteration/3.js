// for of loop

// ["","",""]
// [{},{},{}]

const myarray = ["flash","batman","superman"]

for (const num of myarray) {
    // console.log(num);
    
}

const greeting = "Hello World"

for (const char of greeting) {
    // console.log(char);
}


// Maps

const mymap = new Map()

mymap.set("IN", "India")
mymap.set("US", "United States")
mymap.set("FR", "France")
mymap.set("IN", "India")
mymap.set("IN", "India")

// console.log(mymap);

for (const [key,value] of mymap) {
    // console.log(key, '=>' ,value);
    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Fifa',
    'game3': 'Mortal Kombat'
}

// for (const [key,value] of myObject) {
//     console.log(key, '=>', value);
    
// }