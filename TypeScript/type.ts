function LoggerTimeout(loggerCallback: (s1: string, s2: string) => string) {
    // do something
}

/*
    Function above is lame and unreadable
    TypeScript has "type" keyword to define types

    they are easier to read
    less prone to copying errors
    we only need to modify type declaration rather than everywhere its used
*/

type LoggerCallback = (s1: string, s2: string) => string;

function typedLoggerTimeout(loggerCallback: LoggerCallback) {
  // do something
}
