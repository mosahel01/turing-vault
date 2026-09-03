const getCleanMessages = (messages, badWord) => {
    let newArr = [];
    for (const message of messages) {
        let loweredMessages = message.toLowerCase();
        let loweredBadWord = badWord.toLowerCase();
        if (!loweredMessages.includes(loweredBadWord)) {
            newArr.push(loweredMessages);
        }
    };

    return newArr;
}

let messages = ["okay", "dang", "shoot", "shit", "heck"];
let badWords = "shit";

console.log(getCleanMessages(messages, badWords));
