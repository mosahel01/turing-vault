function startJob() {
    setTimeout(() => {
        console.log("Hi, I'm Async");
    }, 0);
    console.log("Starting on Job");
    workOnJob();
}

function workOnJob() {
    console.log("Working on Job");
    finishJob();
}

function finishJob() {
    console.log("Finished Job");
}

startJob();


/*

setTimeout() is going through task queue
where it is being stored rather callStack
where most other functions do and gets called with FIFO 
and TaskQueues going with LIFO

*/
