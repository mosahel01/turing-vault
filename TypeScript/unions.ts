// function getTicketInfo(id: string | number) {
//   let numbersOnly = "";
//   let textOnly = "";

//   for (const char of id) {
//     if (char !== " " && !isNaN(char)) {
//       numbersOnly += char;
//     } else {
//       textOnly += char;
//     }
//   }
//   if (!numbersOnly) {
//     return `Processing ticket: ${textOnly}`;
//   }
//   return `Processing ticket: ${numbersOnly}`;
// }
// console.log(getTicketInfo("Hello1234"));

// function getTicketInfo(id: string | number) {
//   if (typeof id === "string") {
//     let splitStr = id.split("-");
//     return `Processing id: ${splitStr[1]}`;
//   }
//   return `Processing id: ${id}`;
// }

// console.log(getTicketInfo("Support-123"));



/* problem 2 */
export type Priority = "low" | "medium" | "high" | "critical"

function setPriority(level: Priority) {
    switch (level) {
        case "low":
            return 0;
        case "medium":
            return 1;
        case "high":
            return 2;
        case "critical":
            return 3;
        default:
            return 0;
    }
}
