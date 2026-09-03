const campaign = {
    getRemainingMessages(maxMessages, sentMessages) {
        return this.maxMessages - this.sentMessages;
    },
    maxMessages: 100,
    sentMessages: 30,
    name: "Welcome Campaign",
};

// don't touch below this line

console.log(campaign);

export { campaign };