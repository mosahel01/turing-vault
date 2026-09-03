function splitLogs(logs, slug) {
    let before = [];
    let after = [];
    for (let i = 0; i < logs.length; i++) {
        if (logs[i].includes(slug)) {
            before = logs.slice(0, i);
            after = logs.slice(i + 1);
            return {
                before: before,
                i: i,
                after: after
            }
        }
    }

    return {
        before: before,
        i: i,
        after: after
    }
}



// object literal
console.log(splitLogs(
    [
        "error at line 10",
        "warning at line 15",
        "the dev who wrote line 21 should be fired",
        "debug info",
        "error at line 20",
        "user login",
    ],
    "debug",
));
