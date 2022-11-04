                                        /////////////// ES8 ////////////////////

//Object.values() and Object.entries()

console.log("Object.values() and Object.entries(): ")

const footballer = {
    name: "Wayne Rooney",
    position: "Forward",
    club: "ManU",
    scoringAverage: 1.2
}

const footballerVals = Object.values(footballer);
console.log(footballerVals)

console.log("---------------------------------------------------------------------")

// Object.getOwnPropertyDescriptors()

console.log("Object.getOwnPropertyDescriptors(): ")
const descriptors = Object.getOwnPropertyDescriptors(footballer);
console.log(descriptors)

console.log("---------------------------------------------------------------------")

//String padding

console.log("String padding: ")
const myName = "Natalia Herus";
console.log(myName)
console.log(myName.padEnd(30,"b"))
console.log(myName.padStart(20,"b"))

console.log("---------------------------------------------------------------------")


// Trailing commas in functions

console.log("Trailing commas in functions: ")

// existed for arrays
const Countries = [
    `Poland`,
    `Ukraine`,
    `France`,
]
// ES5, added for objects
const poland = {
    name: "Poland",
    part: "Europe",
}
console.log(poland)

// ES8, added for functions
function sum(x, y,){
    return x + y
}

console.log(sum(2,3,))

console.log("---------------------------------------------------------------------")


// async and await

// function one(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             console.log("Done!")
//             resolve("1 second has passed");
//         }, 1000)
//     });
// }

// function two(){
//     console.log("Calling function one")
//     const oneResponse = one();
//     console.log(oneResponse)
// }

// async function two(){
//     console.log("Calling function one")
//     const oneResponse = await one();
//     console.log(oneResponse)
// }
//
// two();
// console.log("Last line of code")