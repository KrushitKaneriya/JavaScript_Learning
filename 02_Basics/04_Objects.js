// const tinderUser = new Object(); // Singleton object

// const tinderUser = {} // Non-singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Krushit"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const regularUser = {
    email: "krushitkaneriya@gmail",
    fullname: {
        userfullname: {
            firstname: "Krushit",
            lastname: "Kaneriya",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


const Users = [
    {
        id: 1,
        email: "krushitkaneriya@gmail",
    },
    {
        id: 2,
        email: "krushitkaneriya@gmail",
    },
    {
        id: 3,
        email: "krushitkaneriya@gmail",
    },
]

Users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLogged"));


const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "Krushit",
}

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "krushit"
//     "courseName": "JS in Hindi",
//     "price": "Free",
//     "courseInstructor": "Krushit",
// }