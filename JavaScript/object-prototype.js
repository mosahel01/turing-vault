const pureTitan = {
    name: "Eren's mom",
};

const beastTitan = Object.create(pureTitan);
beastTitan.name = "Zeke";

console.log(beastTitan); // { name: "Zeke" }
console.log(Object.getPrototypeOf(beastTitan)); // { name: "Eren's mom" }
console.log(Object.getPrototypeOf(beastTitan) === pureTitan); // true
console.log(Object.getPrototypeOf(Object.getPrototypeOf(beastTitan))); // {} (Object.prototype)
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(beastTitan)),),); // null (end of the chain)
