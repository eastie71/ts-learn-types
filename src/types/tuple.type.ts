// Example of tuples

// A person has: Firstname, Lastname and Age
let person: [string,string,number]
person = ["Craig", "Eastwood", 51]

// A kitchen object such as spoon, frypan, pot
// Name, Material, Value (optional), description (optional)
type kitchen_tool = [string, string, number?, string?]

let spoon: kitchen_tool = ["Wooden Spoon", "wood", 4]
let pot: kitchen_tool = ["Large Pot", "Stainless Steel", 50, "Large pot, good for pasta"]

// AFL veterans are players with 10+ years
// Number of veterans, Club name, Player Name
type team_veterans = [number, string, ...string[]] 

let richmond_veterans = [4, "Richmond", "Dustin Martin", "Trent Cotchin", "Jack Riewoldt", "Dylan Grimes"]
let geelong_veterans = [2, "Geelong", "Tom Hawkins", "Isaac Smith"]