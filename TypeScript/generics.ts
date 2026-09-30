function getValue<T>(value: T): T {
  return value;
}

console.log(getValue("Hello"));
console.log(getValue(123));
console.log(getValue(true));




// generics = idk the type yet, you define it later when calling function
// constraints = it set rule/limit on generic



function genericsConstraints<T extends string>(value: T): T {
    return value;
}

// here T is generic
// 'extends string' is constraint
// which means T should be a string


console.log(genericsConstraints("Hello world"));
console.log(genericsConstraints(123)); // throws error
