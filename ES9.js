                                /////////////// ES9 ////////////////////

//Promise.finally

const myPromise1 = new Promise((myResolve, myReject) => {
    setTimeout(()=> {
        myResolve("Good job!! 1");
    }, 300);
});
myPromise1
    .then(() => console.log("Finished 1!"))
    .then(() => console.log("I was also run! 1"))
    .catch(() => console.log("Something went wrong 1"))
    .finally(() => console.log("Finally my promise1 has worked!"));

const myPromise2 = new Promise((myResolve, myReject) => {
    setTimeout(()=> {
        myReject("Bad job!! 2");
    }, 300);
});
myPromise2
    .then(() => console.log("Finished! 2"))
    .then(() => console.log("I was also run! 2"))
    .catch(() => console.log("Something went wrong 2"))
    .finally(() => console.log("Finally my promise 2 has worked!"));

// Asynchronous Iteration

async function* asyncGenerator() {
    let i = 0;
    while (i < 3) {
        yield i++;
    }
}

(async () => {
    for await (const num of asyncGenerator()) {
        console.log(num);
    }
})();




