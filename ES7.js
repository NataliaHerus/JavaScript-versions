                                    /////////////// ES7 ////////////////////

// Exponentiation Operator

console.log("Exponentiation Operator:")
const x = 5 ** 2
console.log(x)

2 ** 3 // 8
3 ** 2 // 9
3 ** 2.5 // 15.588457268119896
10 ** -1 // 0.1
NaN ** 2 // NaN

console.log(2 ** 3 ** 2)
console.log(2 ** (3 ** 2))
console.log((2 ** 3) ** 2)
console.log(-(5 ** 2))

console.log("---------------------------------------------------------------------")

//Exponentiation Assignment

console.log("Exponentiation Assignment:")
let y = 5;
y **= 2;
console.log(y)

console.log("---------------------------------------------------------------------")


// Include() in array

const arr = [1, 2, 3, 4, 5, NaN, 6, 7];
console.log("Include: ")
console.log(arr.includes(NaN));

console.log("IndexOf: ")
console.log(arr.indexOf(1));

