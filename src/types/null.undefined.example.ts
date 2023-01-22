let loggedInUserName: string

type user = {
    name: string,
    age: number
}

const users: user[] = [
    {name: "John", age: 15},
    {name: "Dick", age: 87}
]

const findUser = users.find((user) => user.name === loggedInUserName)
// TS will complain about possible undefined -> console.log(findUser.age)

// TS checking for possible null example
// This line is OK - as it is using type inference
let saveButton = document.getElementById("save")

// Without the '?' TS will complain that saveButton could be null
saveButton?.click()
console.log("Save button clicked!")

// TS is OK with a null check wrapper
if (saveButton != null)
    saveButton.click()


