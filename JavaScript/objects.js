function createMessage(phoneNumber, message) {
    return {
        phoneNumber: phoneNumber,
        message: message,
        messageLength: message.length
    }
}

let some = createMessage(23, "Hola amigos")

console.log(some)
