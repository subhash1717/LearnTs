// Intarface And Generics
// in TS we most use

interface Chai {
    flavour: string
    price: number
    milk?: boolean

}

const Masala: Chai = {
    flavour: "masala",
    price: 30,

};

interface Shop {
    readonly id: number
    name: string
}

const s: Shop = { id: 1, name: "Chaicode caffe" }
// s.id =2 => not allowed,readonly

interface discountCalculator {
    (price: number): number
}

const apply50: discountCalculator = (p) => p * 0.5

// mostly methods difine in interfaces

interface TeaMachine {
    start(): void;
    stop(): void
}

const machine: TeaMachine = {
    start() {
        console.log("start");
    },
    stop() {
        console.log("stop");

    }

}


// index Signature

interface ChaiRating {
    [flavor: string]: number
}

const ratings: ChaiRating = {
    masala: 4.5,
    ginger: 4.5,
}


// if we geting the from library 

interface User {
    name: string
}

interface User {
    age: number
}

// interfaces merge u have to sutisfy all prop
const u: User = {
    name: "subhash",
    age: 23
}


// we extends the interface

interface A {a: string}
interface B {b: string}

interface C extends A, B {}