const promise = updateMessageStatus("M123", "Sending", true);
const message = await promise;

// try {
//     const message = await promise;
//     console.log(`Resolved with ${message}`)
// } catch (err) {
//     console.log(`Rejected with ${err}`)
// }

// don't touch below this line

// console.log(message);

function updateMessageStatus(messageId, currentStatus, isDelivered) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (currentStatus === "Sending") {
                if (isDelivered) {
                    resolve(
                        `Textio Message ${messageId} has been delivered successfully.`,
                    );
                } else {
                    reject(
                        `Textio Message ${messageId} is still sending and cannot be marked as delivered.`,
                    );
                }
            } else {
                resolve(
                    `Textio Message ${messageId} status updated to ${currentStatus}.`,
                );
            }
        }, 1000);
    });
    
}



/*
 
Similar to before, the updateMessageStatus function takes a message id, current status and delivered state and returns a Promise.

On line 1, call updateMessageStatus with inputs:

    messageId = "M123"
    currentStatus = "Sending"
    isDelivered = true

Then on line 2, await the returned promise and save the resolved value in a variable called message which will be logged to the console (which is already written on line 5).

Tip:
For extra difficulty, try combining lines 1 and 2 into one line by awaiting the output of updateMessageStatus.

*/
