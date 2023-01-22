// Maximum value for number in JS is 2^53
let safeNumber = Number.MAX_SAFE_INTEGER
console.log(safeNumber)

// BigInt not available for ES2016 - only for ES2020+
let myBigInit1 = BigInt(23478247);

let myBigInit2 = 233444422n;

let bi1: bigint = BigInt(Number.MAX_SAFE_INTEGER)
let bi2:bigint = 324324324n

let biTotal: bigint = bi1 + bi2
console.log(biTotal)

// Cannot use decimals 
/*
let bi3: bigint = 3243.3434n
*/