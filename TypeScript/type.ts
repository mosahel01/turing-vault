// function LoggerTimeout(loggerCallback: (s1: string, s2: string) => string) {
//     // do something
// }

// /*
//     Function above is lame and unreadable
//     TypeScript has "type" keyword to define types

//     they are easier to read
//     less prone to copying errors
//     we only need to modify type declaration rather than everywhere its used
// */

// type LoggerCallback = (s1: string, s2: string) => string;

// function typedLoggerTimeout(loggerCallback: LoggerCallback) {
//   // do something
// }

// bootdev problem
function interpolateComment(
  id: number,
  comment: string,
  comments: (string | number)[],
) {
  const iterator = comments.findIndex((item) => item == id);
  if (iterator !== -1) {
    comments[iterator] = comment;
  }
  return comments;
}

console.log(interpolateComment(418, "Refresh token is missing", [
  "salmon discount code",
  418,
  "I can't remember my email",
  420,
]));


function interpolateComments(
  id: number,
  comment: string,
  comments: (string | number)[]
) {
  const iterator = comments.findIndex((item) => item === id)
  if (iterator != -1) {
    comments[iterator] = comment;
  }
}