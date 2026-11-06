// Generics are the templates

function wrapInArray<T>(item: T): T[]{
    return [item]
}

wrapInArray("masala")
wrapInArray(42)
wrapInArray({flavor: "Ginger"})

// library and framework me jada kam me aata hai

function pair<A, B>(a: A,b: B): [A, B]{
    return [a, b]
}

pair("masala", 20)
pair("masala", {flavor: "Ginger"})

interface  Box<T> {
    content: T
}

const numberBox: Box<number> = {content: 10}
const numberBoxCup: Box<string> = {content: "10"}


interface apiPromise<T>{
    status: number,
    data: T
}

const res: apiPromise<{flavor: string}> = {
    status: 200,
    data: {flavor: "masala"}
}