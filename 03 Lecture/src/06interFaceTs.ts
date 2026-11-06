// when type use for many types make type then use it 

type chaiOrder = { 
    type: string; 
    suger: number; 
    strong: boolean; }


function makeChai(order: chaiOrder) {
    console.log(order);

}

function serveChai(order: chaiOrder) {
    console.log(order);
}


// basic bject it can allowed => class Masalachai implements teaRecipe
type teaRecipe = {
    water: number;
    milk: number;
}

// class Masalachai implements teaRecipe {
//     water = 100;
//     milk = 50;
// }

// when we have custom type it not allowed => we use interFace
// in Class be must use Interface

interface Cupsize {
    size: "small" | "large"
}

class Chai implements Cupsize {
    size: "small" | "large" = "small";
}


// type response = {ok: true} | {ok: false}
// class myRes implements Response {
//     ok: boolean = true;
// }


// litral type
//it called union
type TeaType = "masala" | "ginger" | "lemon"

function orderChai(t: TeaType){
    console.log(t);
}

//intersection of the the type => dono type me se propertie aayegi

type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type Masalachai = BaseChai & Extra


const cup: Masalachai = {
    teaLeaves: 2,
    masala: 2

}

// optinal instersection

type User = {
    userName: string
    bio?: string
}

const u1: User = {
    userName: 'subhash'
}

const u2: User = {
    userName: 'subhash',
    bio: 'hello john'
}

// readonly value => assign only one time

type Config = {
    readonly appName: string
    version: number
}

const cfg: Config = {
    appName: "MasterJi",
    version: 1
}

// cfg.appName = "jake" => read only val can,t assign second time