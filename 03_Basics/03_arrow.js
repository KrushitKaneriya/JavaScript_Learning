const user = {
    username: "Krushit",
    price: 199,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Krushit Kaneriya"
// user.welcomeMessage()

// console.log(this);


// function chai() {
//     let username = "Krushit"
//     console.log(this.username);
// }

// chai()


// const chai = function() {
//     let username = "Krushit"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Krushit"
    console.log(this);
}

// chai()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// const addtwo = (num1, num2) =>  num1 + num2

// const addtwo = (num1, num2) =>  (num1 + num2)

// const addtwo = (num1, num2) =>  ({username: "Krushit"})


console.log(addtwo(3, 5));

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myArray.forEach();