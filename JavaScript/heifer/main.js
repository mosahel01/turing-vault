import { moo } from "./moo.js";

function nameLog(user) {
    const message = moo(user);
    console.log(`${message}`);
}
nameLog("there");
