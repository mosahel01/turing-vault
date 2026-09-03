import cowsay from "cowsay";

export function moo(name) {
    return cowsay.say({
        text: `moo, ${name}`,
    });
}
