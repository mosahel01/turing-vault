class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const user = new User("Mo", 22);

console.log(user);
console.log(user.name);
console.log(user.age);



/*
    class : creates a new class, or design for creating objects with different properties & methods
    constructor : method thats called when new instance of class is created (object creation)
    new : keyword calls the constructor method & creates a new instance of class
*/
