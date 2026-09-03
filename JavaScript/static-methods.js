class Message {

    static totalMsg = 0;
    static msgLen = 0;

    constructor(recipient, sender, body) {
        this.recipient = recipient;
        this.sender = sender;
        this.body = body;
        Message.totalMsg++;
        Message.msgLen += body.length;
    }

    static getAverageMessageLength() {
        const avg = Message.totalMsg / Message.msgLen;
        return (avg * 100) / 100;
    }


}

// don't touch below this line

// export { Message };

const msg = new Message("Mo", "Joe", "HI There")
console.log(msg);
console.log(Message.getAverageMessageLength());