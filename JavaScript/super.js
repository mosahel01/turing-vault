class Sender {
    constructor(recipient) {
        this.recipient = recipient;
    }

    formatMessage(message) {
        return `To: ${this.recipient}, Message: ${message}`;
    }
}

// don't touch above this line

class SMSSender extends Sender {
    constructor(recipient) {
        super.recipient = recipient;
    }
    formatMessage(message) {
        return `To: ${super.recipient}, Message: ${message}`
    }
}

class EmailSender extends Sender {
    constructor(recipient) {
        super.recipient = recipient;
    }
    formatMessage(message) {
        return `To: ${super.recipient}, Message: ${message}`
    }
}

// don't touch below this line

// export { Sender, SMSSender, EmailSender };

const sms = new SMSSender("John@example.com", "An SMS to jane")
console.log(sms.formatMessage())
console.log(sms.message)