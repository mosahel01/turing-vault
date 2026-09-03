function createContact(phoneNumber, name = "Anonymous", avatar = "default.jpg") {
    if (phoneNumber == "") {
        return `Invalid phone number`;
    }
    let avatarFilepath = `/public/pictures/${avatar}`;
    let finalStr = `Contact saved! Name: ${name}, Phone number: ${phoneNumber}, Avatar: ${avatarFilepath}`;
    return finalStr;
}

// don't touch below this line

export { createContact };
