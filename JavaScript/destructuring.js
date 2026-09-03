function getPrimaryAndBackupMessages(message) {
    if (message.length == 0) return { primary: undefined, backups: [] };
    const [x, ...restOfThem] = message;
    return {
        primary: x,
        backups: restOfThem,
    };
}

console.log(getPrimaryAndBackupMessages([1, 2, 3, 4, 5, 6]));

/*
    destructing -> using rest operator to expand an Array [a, b, ...c]
*/
