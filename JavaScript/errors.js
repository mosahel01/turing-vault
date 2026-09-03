function createError(message) {

    const errMsg = "Error: " + message;
    return new Error(errMsg);

    /*
    silly me
    const err = new Error(message);
    return {
        err,
        message,
    }
    */
}

// throws texted error 
console.log(createError("HI There, This is an Error!"));
