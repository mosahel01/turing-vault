function getAccessLevel(age, hasSubscription, isAdmin, isBanned) {
    if (isAdmin) {
        return "admin";
    } else if (isBanned) {
        return "banned";
    }

    if (age >= 18 && hasSubscription) {
        return "full";
    } else if (age >= 18 && !hasSubscription) {
        return "limited";
    } else if (age < 18 && hasSubscription) {
        return "limited";
    } else {
        return "none";
    }
}

console.log(getAccessLevel(25, true, false, false));   // "full"
console.log(getAccessLevel(25, false, false, false));  // "limited"
console.log(getAccessLevel(15, true, false, false));   // "limited"
console.log(getAccessLevel(15, false, false, false));  // "none"
console.log(getAccessLevel(30, false, true, false));   // "admin"
console.log(getAccessLevel(20, true, true, true));     // "banned"
