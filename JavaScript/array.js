/*
    Arrays -> data structures that stores a collection of multiple items under one variable name
    const arr = ["oonga", "boonga", 69];
*/

function getCleanRank(reviewWords) {

    let badWords = 0;
    if (reviewWords.includes("shoot")) badWords++;
    if (reviewWords.includes("heck")) badWords++;
    if (reviewWords.includes("dang")) badWords++;


    if (badWords == 0) return "clean";
    if (badWords == 1) return "dirty";
    return "filthy";

}



getCleanRank([
    "dang it",
    "alright",
    "fool",
    "shoot"
])
