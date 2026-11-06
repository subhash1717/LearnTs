const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
}

// how ts infer the objects == ts always infer
// {
//     name: string;
//     price: number;
//     isHot: boolean
// }

//declaring objects types in ts

let tea: {
    name: string;
    price: number;
    isHot: boolean
}

tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
}

//alias object types
type Tea = {
    name: string;
    price: number;
    ingredients: string[]
}

const adrakChai: Tea = {
    name: "AdrakChai",
    price: 25,
    ingredients: ["ginger","suger","water","milk"]
}

//duck typing

type Cup = {size: string}
let smallCup: Cup = {size: "200"}

let bigCup = {size: "500ml", material: "steel"}

smallCup = bigCup

//in ts when extra datatype is come it does,nt create any issue
type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Arabica"}
const chaiBrew: Brew = coffee

type User = {
    username: string;
    password: number;
}

const u: User = {
    username: "chaicode",
    password: 123
}

// code seperation is very important for code clearity

type Item= {name: string, quantity: number}
type Address= {street: string, pin: number}

type Order = {
    id: string;
    items: Item[];
    address: Address
}

// data type is difine use it in multi ways
//using update u can partially updates the value

// type Chai = {
//     name: string;
//     price: number;
//     isHot: boolean
// }

// const updateChai = (updates: Partial<Chai>) =>{
//     console.log("updating chai with", updates);
// }


// updateChai({price: 25})
// updateChai({isHot: false})
// updateChai({})

//we make type property optional but
// when we use required we must use all type property

type ChaiOrder = {
    name?: string;
    quantity?: number
}

const placeOrder = (order: Required <ChaiOrder>) =>{
    console.log(order);
}

placeOrder({
    name: "MasalaChai",
    quantity: 2
})


// using pick keyword you pick the data whose you want to use

type Chai = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}

type ChaiOrderInfo = Pick<Chai, "name" | "price">;

const ChaiInfo: ChaiOrderInfo = {
    name: "Lemon Tea",
    price: 20
}

//you can omit written property
type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretingredients: string[]
};

type PublicChai = Omit< Chai, "secretingredients">;