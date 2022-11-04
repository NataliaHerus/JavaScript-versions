                                    /////////////// ES11 ////////////////////

//BigInt

console.log("BigInt:")
let int = 9999999999999999;
let type1 = typeof int;
console.log(type1)

let bigInt1 = 9999999999999999n;
let bigInt2 = BigInt(99999999999999999)

let type2 = typeof bigInt2;
console.log(type2)

console.log("---------------------------------------------------------------------")


//matchAll (it never happened before)
console.log("Match All: ")
let textForMatch = "Programming is a cool thing. Applied-programming. What programming language do you prefer?"
const iterator = textForMatch.matchAll(/programming/gi);
console.log(Array.from(iterator));

console.log("---------------------------------------------------------------------")


//The Nullish Coalescing Operator (??)

console.log("Nullish Coalescing Operator: ")
let name = null;
let text = "text";
let result = name ?? text;

console.log(result)

console.log("---------------------------------------------------------------------")


//Logical Assignment Operators:
//x ||= y
//x || (x = y);

const film = { duration: 50, title: '' };

film.duration ||= 10;
console.log(film.duration)
//output: 50

film.title ||= 'title is empty.';
console.log(film.title)
//output: "title is empty"

//x &&= y
let authorizedUser = {id: 42, name: "Vipul"};
//output: {id: 42, name: "Vipul"}

// Old way
if(authorizedUser) {
    authorizedUser = {...authorizedUser, admin: true};
}
//output: {id: 42, name: "Vipul", admin: true}

//With ES2021
authorizedUser &&= {...authorizedUser, admin: true};
//output: {id: 42, name: "Vipul", admin: true}

//x ??= y
const getKey = () => {
    return "someKey";
}
let user = { name:"Natalia", age:18 }
user.hobbi ??= getKey()
//output: "someKey"

console.log("---------------------------------------------------------------------")

//The Optional Chaining Operator (?.)

console.log("The Optional Chaining Operator: ")
let student = {name: "Anna", group: "PMI-35", hobbi: {sport: "football", book: "fantasy"}}
console.log(student.hobbi?.sport)
console.log(student.hobbi?.subject)

console.log("---------------------------------------------------------------------")
//Promise.allSettled()

console.log("Promise.allSettled(): ")
const promiseError = new Promise((resolve, reject) => {
    reject("Error coming!");
});

const promiseSlow = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Slow");
});

const promiseFast = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Fast");
});

Promise.allSettled([promiseError, promiseSlow, promiseFast])
    .then((value) => {
        console.log(value);
    })
    .catch((error)=> {
        console.log('error=' + error);
    });

//Dynamic import