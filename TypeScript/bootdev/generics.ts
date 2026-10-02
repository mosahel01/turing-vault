function pair<A, B>(a: A[], b: B[]): [A, B][] {
	const emptyArr: [A, B][] = [];

	// Math.max(a.length, b.length)
	// it picks either a or b whichever is higher
	for (let i = 0; i < Math.max(a.length, b.length); i++) {
		emptyArr.push([a[i], b[i]]);
	}

	return emptyArr;
}

console.log(pair(["Hello", "world"], ["name", "age"]));

/*

Pair is normal function with generics 
A and B are nothing but function input types 
a: A[], b: B[] is simply array of type A & B 
returns an array of type A and B.

*/
