// singleton
// object.create


// object literals => key value pair

const mySym = Symbol("key1");

const JsUser = {
    name: "Krushit",
    "Full Name": "Krushit Kaneriya",
    [mySym]: "mykey1",
    age: 21,
    location: "Surat",
    email: "krushitkaneriya774@gmail",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Sunday"],
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mySym]);

JsUser.email = "krushitkaneriya@gmail.com"
// console.log(JsUser);
// Object.freeze(JsUser)
JsUser.email = "krushitkaneriya05@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

