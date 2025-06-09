const myObject = {
    js : "Javascript",
    cpp : "C++",
    py : "Python",
    rb : "Ruby",
    swift : "Swift by Apple"
}

for (const key in myObject) {
    // console.log(`${key} is for ${myObject[key]}`);
}

const programming = ["js", "cpp", "py", "rb", "swift"]

for (const key in programming) {
    console.log(programming[key])
}