// for each loop

const coding =["js","php","python","java","swift","ruby","cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printme(item) {
//     console.log(item);
    
// }

// coding.forEach(printme)


const myCoding = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
})