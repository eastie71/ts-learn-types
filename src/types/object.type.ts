let player: {
    firstname: string
    surname: string
    number: number
    age: number
    // Use ? for optional property
    nickname?: string
} = {
    firstname: 'Dustin',
    surname: 'Martin',
    number: 4,
    age: 30
}

let car: {
    make: string
    model: string
    year: number
}

let myCar: typeof car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2004
}

console.log('My car = ' + myCar)
console.log(myCar)
console.log(player)

myCar.year = 1996

type Article = {
    author: string
    title: string
    content: string
    image?: string
}

let myArticle: Article = {
    author: 'Craig Eastwood',
    title: 'First Article',
    content: 'My Content'
}

let myPost: Article = {
    author: 'Craig Eastwood',
    title: 'My Post',
    content: 'Content of my post'
}