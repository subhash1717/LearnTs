
const chaiFlavours: string[] = ["Masala", "Adrak"]
const ChaiPrice: number[] = [10, 20]

// you can pass custom datatype also
const rating: Array<number> = [4.5, 5.0]


// creating array of objects

type Chai = {
    name: string;
    price: number;
}

const menu: Chai[] = [
    {name: "masala", price: 15},
    {name: "Adrak", price: 25},
]


// ReadOnly array

const cities: readonly string[] = ["Delhi", "jaipur"]
// citie.push("Pune") => Not possible

// two dimitional array syntax
const table: number[] [] = [
    [1, 2, 3],
    [4, 5, 6],
]

// tuple
let chaiTuple: [string, number];
chaiTuple = ["masala", 20]
// chaiTuple = [20, "masala"] order matters


// boolean is optional
let userInfo: [string, number, boolean?]
userInfo = ["histesh", 100]
userInfo = ["hitesh", 100, true]

//  readonly value doesnt change in the in  tuple
const location: readonly [number, number] = [28.66, 32.22]

const ChaiItems: [name: string, price: number] = ["masala", 24]


// ENUM => restrict the choises

enum Cupsize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = Cupsize.MEDIUM

// it automatically give the value
enum status {
    PENDING  = 100,
    SERVED, //101
    CANCELED // 102
}

// take the value  from the enum
enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type: ChaiType) {
    console.log(`Making: ${type}`);
    
}

makeChai(ChaiType.GINGER)

// it not give eror but it not allowed

enum randomEnum {
    ID = 1,
    NAme = "chai"
}

// you difine through const
const enum Suger {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const s =  Suger.LOW

// tuple also alowed Push but we did,nt like that use
let t: [name: string, price: number] = ["hitesh", 23 ]
t.push("extra")