let myNumbers: readonly number[] = [4,5,6]

// cannot add to a readonly array -> myNumbers.push(3)

// readonly "person" tuple
// A person has: Firstname, Lastname and Age
type ro_person = readonly [string,string,number]
let myself: ro_person = ["Craig", "Eastwood", 51]
// cannot modify readonly property -> myself[0] = "Fred"

type ro_names = readonly string[]
const name_list: ro_names = ["John", "Dick", "Harry"]

// cannot modify string array -> name_list.push("Peter")