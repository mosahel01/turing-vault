/*
  Enums
*/

// const name: unknown = "MO";
// const age: any = 22;

// // console.log(typeof unknown);
// // console.log(typeof any);
// console.log(typeof name);
// console.log(typeof age);

// type Zustand = string | boolean | unknown;
// const input = "string";

// function something(input: unknown): Zustand {
//   return input;
// }

// console.log(something("OOOOO!"));



/* using an ENUM */
// const enum (
//     "mo",
//     22,
//     true
// )


function hello_world(name: string, age: int, address: boolean) : string[] {
    return [
        `${name}`,
        `${age}`,
        `${address}`,
    ]
}

console.log(hello_world("mo", 22, true));
