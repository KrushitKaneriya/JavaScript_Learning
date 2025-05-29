// if 

const isUserLoggedIn = true
const temperature = 41

// if (temperature < 50) {
//     console.log("Less than 50");
// }else{
//     console.log("temperature is greater than 50");
// }

// <, >, <=, >=, ==, !=, ===, !==

const score = 200

// if (score > 100) {
//     const power = "Flying"
//     console.log(`User power: ${power}`);
// }

const balance = 1000

// if (balance < 500) {
//     console.log("Balance less than 500");
// }
// else if (balance < 750) {
//     console.log("Balance less than 750");
// }
// else if (balance < 900) {
//     console.log("Balance less than 900");
// }
// else{
//     console.log("Balance less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (userLoggedIn && debitCard) {
//     console.log("Allow user to buy course");
// }
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}