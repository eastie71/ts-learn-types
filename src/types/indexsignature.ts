type FlightCaterer = {
    name: string
    address: string
    phone: number
}

type Flight = {
    model: string
    flightNumber: string
    timeOfDeparture: Date
    timeOfArrival: Date
    caterer : FlightCaterer
    seats: {
       // use index signature - only ONE index signature can exist inside object def
       [key:string] : string
    }
}

let myFlight: Flight = {
    model: "Airbus A380",
    flightNumber: "A2201",
    timeOfArrival: new Date(),
    timeOfDeparture: new Date(),
    caterer : {
        name: "Special Food Ltd",
        address: "484, Some Street, New York",
        phone: 145215
    },
    seats : {
        "10A" : "Craig Eastwood",
        "11A" : "Georgia Eastwood",
        // wont work -> "1" : 20
    }
}
