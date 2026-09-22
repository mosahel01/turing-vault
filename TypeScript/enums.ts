/*
  Enums
*/




const name: unknown = "MO";
const age: any = 22;

console.log(typeof unknown);
console.log(typeof any);
console.log(typeof name);
console.log(typeof age);


type Zustand = string | boolean | unknown;
const input = "string";

function something(input: unknown): Zustand {
	return input;
}

console.log(something());

