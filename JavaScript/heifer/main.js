import { moo } from "./moo.js";

function main(user) {
    const message = moo(user);
    console.log(`${message}`);
}
main("there");
