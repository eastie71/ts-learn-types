const untyped_library = {
    name: "New York Library",
    address: "24 Some Street, New York",
    numberOfBooks: 1244,
    type: "national", // could be "national", "academic" or "public"
    books: [
        {
            title: "Harry Potter and the Goblet of Fire",
            pages: 755,
            isbn: "9973-5-3434-0"
        },
        {
            title: "Davinci Code",
            pages: 256,
            isbn: "9956-6-3434-3"
        }
    ],
    genres: ["fiction", "history", "computers", "poetry"], // unlimited genres for a library
    members: [ // name and phone are mandatory, and can have unlimited additional properties
        {
            name: "John Doe",
            phone: "+3647634327",
            email: "john@email.com"
        },
        {
            name: "Bill Doe",
            phone: "+3655563437"
        }
    ]
}

enum LibraryType {
    National = "national",
    Academic = "academic",
    Public = "public"
}

type Book = {
    title: string,
    pages: number,
    isbn: string
}

type Genres = string[]

type Member = {
    name: string,
    phone: string,
    [key:string] : string
}

let myMember = {
    name: "Craig",
    phone: "7384783",
    email: "craig@email.com",
    address: "33 Some Road, Someville"
}

type Library = {
    name: string,
    address: string,
    numberOfBooks: number,
    type: LibraryType,
    books: Book[],
    genres: Genres,
    members: Member[]
}

let newYorkLibrary: Library = {
    name: "New York Library",
    address: "24 Some Street, New York",
    numberOfBooks: 1244,
    type: LibraryType.National,
    books: [
        {
            title: "Harry Potter and the Goblet of Fire",
            pages: 755,
            isbn: "9973-5-3434-0"
        },
        {
            title: "Davinci Code",
            pages: 256,
            isbn: "9956-6-3434-3"
        }
    ],
    genres: ["fiction", "history", "computers", "poetry"],
    members: [
        {
            name: "John Doe",
            phone: "+3647634327",
            email: "john@email.com"
        },
        {
            name: "Bill Doe",
            phone: "+3655563437"
        },
        myMember
    ]
}

console.log(newYorkLibrary)