const myObj = {
    a: 1,
    b: 2,
    c: 3,
}

// since obj[param] which are 1 and 2 are truthy values
// so do obj['c'] so the loop go through if statement
// returning obj['a or b'] + obj['c'] 
const myFunc = (obj, param) => {
    if (obj[param] && obj['c']) {
        return obj[param] + obj['c'];
    } return obj.c;
}

console.log(myFunc(myObj, 'a')); // returns 4
console.log(myFunc(myObj, 'b')); // returns 5
