/*
Assignment

Textio discovered a nasty bug: the intern creating the user map set objects(with fname and lname properties) as keys in our user map instead of string keys.Now we can't look up users... big problem!

Complete the fixUserMap function. It takes a Map with object keys mapping to user objects and returns a new fixed Map with string keys.

    Create a new Map.
    Iterate over the entries in the input Map.
        For each entry, create a new key by concatenating the fname and lname properties of the object key(separated by a space).
        Set the corresponding user object as the value for this new key in the new Map.
    Return the new Map.

For example

const grossMap = new Map([
    [
        { fname: "Eren", lname: "Yeager" },
        { fname: "Eren", lname: "Yeager", tags: ["Survey Corps", "Titan Slayer"] },
    ],
]);
const fixedMap = fixUserMap(grossMap);
console.log(fixedMap);
// Map { 'Eren Yeager' => { fname: 'Eren', lname: 'Yeager', tags: [ 'Survey Corps', 'Titan Slayer' ] } }

*/


/* PSEUDO CODE
FUNCTION fixUserMap(grossMap):
    CREATE fixedMap = new Map()

    FOR EACH [keyObj, userObj] IN grossMap:
        CONCATENATE keyObj.fname + " " + keyObj.lname TO MAKE newKeyString
        ADD (newKeyString -> userObj) TO fixedMap

    RETURN fixedMap
*/



function fixUserMap(brokenMap) {

    const fixedMap = new Map();
    for (const [k, v] of brokenMap) {
        const fullName = `${k.fname} ${k.lname}`;
        fixedMap.set(fullName, v);
    }
    return fixedMap;

}

