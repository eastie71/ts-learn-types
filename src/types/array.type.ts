// infer type of number[]
let a = [ 1, 2, 3]

// infer type of string[]
let b = ["a","b","c"]

// infer union type of (string | number)[]
let combo = ["a", "b", 1, 2]

// strict typing
let a2: number[] = [4,5,6]

let b2: Array<string> = ["z", "y"]
let b3: string[] = ["z", "y"]

// this type of union typ is not recommended - perhaps create your own type/class for this
let combo2: (string|number)[] = [7,8,"s","t"]

type Caterer2 = {
    name: string
    address: string
    phone: number
}

type Airplane2 = {
    model: string
    flightNumber: string
    timeOfDeparture: Date
    timeOfArrival: Date
    caterer : Caterer
}

type Airplanes = Airplane2[]

let myAirplanes: Airplanes = [
    {
        model: "Airbus A380",
        flightNumber: "A2201",
        timeOfArrival: new Date(),
        timeOfDeparture: new Date(),
        caterer : {
            name: "Special Food Ltd",
            address: "484, Some Street, New York",
            phone: 145215
        }
    },
    {
        model: "Boeing 737",
        flightNumber: "B2201",
        timeOfArrival: new Date(),
        timeOfDeparture: new Date(),
        caterer : {
            name: "Special Food Ltd",
            address: "484, Some Street, New York",
            phone: 145215
        }
    }
]

