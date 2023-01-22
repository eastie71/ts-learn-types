type stringOrNumber = number | string

function addNumberOrString(a: stringOrNumber, b: stringOrNumber) {
    if (typeof a === "number" && typeof b == "number")
        return a + b
    return a.toString() + b.toString()
}

console.log(addNumberOrString(20, 10))
console.log(addNumberOrString('20','10'))