
/*
Assignment

Complete the createUserMap function. It takes an array of user objects (each having fname and lname properties) and returns a Map.

    Create a new map.
    For each user object in the array, add a key-value pair to the map.
        Set the key to be the full name: a string concatenating the user object's fname and lname (separated by a space).
        Set the value to be the whole user object.
    Return the resulting map.
*/




function createUserMap(users) {
    const newUserMap = new Map();
    for (const user of users) {
        const fullname = user.fname + " " + user.lname;
        newUserMap.set(fullname, user);
    }
    return newUserMap;
}

console.log(createUserMap([
    {
        fname: "Clark",
        lname: "Kent",
        promotions: [
            "promo1", "promo2"
        ]
    },
    {
        fname: "Mohd",
        lname: "Sahil",
        promotions: [
            "promoA", "promoB"
        ]
    }

]));








