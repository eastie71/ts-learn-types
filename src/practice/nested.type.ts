type Caterer = {
    name: string
    address: string
    phone: number
}

type Airplane = {
    model: string
    flightNumber: string
    timeOfDeparture: Date
    timeOfArrival: Date
    caterer : Caterer
}

let myAirplane: Airplane = {
    model: "Airbus A380",
    flightNumber: "A2201",
    timeOfArrival: new Date(),
    timeOfDeparture: new Date(),
    caterer : {
        name: "Special Food Ltd",
        address: "484, Some Street, New York",
        phone: 145215
    }
}

console.log(myAirplane)