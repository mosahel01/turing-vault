fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => console.log(res));

console.log("End of Script");

// this function freezes the entire main thread.
function fetchWithtRetry() {
    fetch("https://invalidurl")
    .catch(err => fetchWithtRetry())
}

fetchWithtRetry();

function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

async function getUserLocation() {
    try {
        const location = await getCurrentPosition();
        console.log(location);
    } catch (error) {
        console.error(error);
    }
}



// ## Recursion Example ##
// function add(x) {
// if (x < 1) { return 0; }

// return x + add(x - 1);
// }
// console.log(add(4));