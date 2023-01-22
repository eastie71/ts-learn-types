const addSomeNumbers = () => {
    console.log(5 + 7)
}

// Inferred function return type from TS is "void"
addSomeNumbers()

// Strict typing of "void" return on function
const addSomeNumbersStrict = (): void => {
    console.log(5 + 7)
}

// Inferred return type is "never" here
const throwAnError = () => {
    throw new Error("Program Crashed!!")
}


