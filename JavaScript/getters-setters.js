class Contact {
    constructor(name, phoneNumber) {
        this.name = name;
        this._phoneNumber = phoneNumber;
    }

    set phoneNumber(value) {
        if (value.length == 10) {
            this._phoneNumber = value;
        } else {
            throw new Error("Invalid phone number.");
        }
    }

    get phoneNumber() {
        let areaCode = this._phoneNumber.slice(0, 3);
        let middle = this._phoneNumber.slice(3, 6);
        let last = this._phoneNumber.slice(6);

        let str = `(${areaCode}) ${middle}-${last}`
        return str
    }

}

const contact = new Contact("Adam", 1234567890)
console.log(contact);
console.log(contact.name);
console.log(contact._phoneNumber);
contact.phoneNumber();
