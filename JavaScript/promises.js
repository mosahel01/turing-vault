// unrelated to promises
function getRandomBool() {
    return Math.random() < 0.5;
}


// old syntax   
const promise = new Promise((reject, resolve) => {
    setTimeout(() => {
        if (getRandomBool()) {
            resolve("Resolved");
        } else {
            reject("Rejected");
        }
    }, 1000);
})

promise
    .then((message) => {
        console.log(`The .then promise finally is ${message}`);
    })
    .catch((error) => {
        console.log(`The .catch promise finally is ${error}`);
    })



// new syntax
async () => {
    { }
}

try {
    const message = await promise;
    console.log(`Rejected with ${message}`);
} catch (err) {
    console.log(`Rejected with ${err}`);
}


// or this but we used try-catch
const message = await promise;
console.log(`Resolved with ${message}`);
