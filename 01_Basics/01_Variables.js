const accountID = 1234;
let accountEmail = "aB8eM@example.com";
var accountPassword = "1234";
accountCity = "Hyderabad";  // we dont have to use this method
let accountState = "Active";

// accountID = 2  // Not allowed

accountEmail = "krushitkaneriya774@gmail.com";
accountPassword = "123456";
accountCity = "Surat";

console.log(accountID);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);
