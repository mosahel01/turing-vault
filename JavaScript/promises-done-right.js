// new Promise((resolve, reject) => {
//     resolve("Done!");
// })

// .then(result => console.log(result));









function returnsPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello,world!");
        }, 1000);
    })
}


returnsPromise
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })

async function smth() {
    try {
        const data = await returnsPromise();
        console.log(data);  
    } catch (err) {
        console.log(err);
    }
}