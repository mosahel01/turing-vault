/*
    one of the boot.dev assignments
*/

function printReports(intro, body, outro) {
    printCostReport((msg) => intro.length * 2, intro);
    printCostReport((msg) => body.length * 3, body);
    printCostReport(function (msg) { // same solution different method
        return outro.length * 4
    }, outro)
}

// don't touch below this line

function printCostReport(costCalculator, message) {
    const cost = costCalculator(message);
    console.log(`Message: "${message}" Cost: ${cost} cents`);
}

printReports(
    "Welcome to the Hotel California",
    "Such a lovely place",
    "Plenty of room at the Hotel California",
);
