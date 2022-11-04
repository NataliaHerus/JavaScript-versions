                                    /////////////// ES12 ////////////////////

//Numeric Separator

console.log("Numeric Separator: ")
const num1 = 8_000_000_000;
const num2 = 8000000000;
console.log(num1 === num2);

console.log("---------------------------------------------------------------------")


//Promise.Any

console.log("Promise.Any: ")
const promiseError = new Promise((resolve, reject) => {
    reject("Error coming!");
});

const promiseSlow = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Slow");
});

const promiseFast = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Fast");
});

Promise.any([promiseError, promiseSlow, promiseFast])
    .then((value) => {
        console.log(value);
    });

//string method replaceAll()