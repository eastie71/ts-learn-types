function multiplyByTen(number: unknown) {
    if (typeof number === "number")
        return number * 10
    return "Please provide a valid number"
}

console.log(multiplyByTen(4))
console.log(multiplyByTen("Fred"))
