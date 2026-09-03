function deduplicateEmails(emails) {
    const dedupedEmails = new Set();
    for (const email of emails) {
        dedupedEmails.add(email);
    }
    return [...dedupedEmails];
}


console.log(deduplicateEmails([
    "wayne.lagner@dev.boot",
    "heckmann@what.de",
    "heckmann@what.de",
    "a.liar@pants.fire",
]))

// Sets to Array conversion to wipe off duplicates
// then again back to Arrays using "rest operator" ...
// (array as per asked in question)
