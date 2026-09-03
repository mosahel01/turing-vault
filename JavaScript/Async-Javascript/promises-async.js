// States -> Pending, Fulfilled, Rejected



// Reject
const promise_rejected = Promise.reject(10);
console.log(promise_rejected);


// Fulfilled
const promise_fulfilled = Promise.resolve(10);
console.log(promise_fulfilled);


// Pending
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(10);
        reject(new Error("error message"));
    }, 3000);
});


promise
    .then(value => value * 2)
    .then(console.log)
    .catch(error => console.log('Oh no ' + error.message));




/*
    we are waiting 4000ms for the promise to resolve or reject
    which takes around 3000ms to go from pending to res or rej
*/

// setTimeout(() => {
//     console.log(promise);
// }, 4000);
