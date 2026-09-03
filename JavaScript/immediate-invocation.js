(function () {
    console.log("Javascript: at least it's not Java")
})();
// anonymous function called right after its declared with ()
// function().. then on line 3 (); calls the function.



const total = (function (numMessages, bytesPerMessage) {
    return numMessages * bytesPerMessage;
})(1, 2);

// don't touch below this line

console.log("Total message cost:", total);
