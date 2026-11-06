// oops in TS

// in ts some we declare whole classes and some times we declare blueprint


// class Chai {
//     flavour: string;
//     price: number

//     // constructor(flavour: string, price: number) {
//     //     this.flavour = flavour
//     //     this.price = price
//     // }
//     constructor(flavour: string, price: number) {
//         this.flavour = flavour
//         console.log(this);
//         // this => refers to the new Object

//     }
// }

// const masalaChai = new Chai("Ginger", 20)

// masalaChai.flavour = "masala"


// Access Modifier

class Chai {
    public flavor: string = "Masala"

    private secretIndigredients = "Cardamom"

    reveal() {
        return this.secretIndigredients // ok => didnt the direct access
    }

}
const c = new Chai()
// c.reveal() => we get the access of secretIndi

// Protected keyword

class Shop {
    protected shopname = "Chai Corner"
}

class Branch extends Shop {
    getName() {
        return this.shopname // ok
    }
}
new Branch().getName


// another way doing private objects or variables
// class Walet {
//     #balence = 100

//     getBalance() {
//         return this.#balence
//     }
// }

// const w = new Walet()

//  Readonly properties 

class Cup {
    readonly capacity: number = 250

    constructor(capacity: number) {
        this.capacity = capacity // readonly property
    }
}
// getr and setr

class ModernChai {
    private _sugar = 2

    get suger() {
        return this._sugar
    }

    set sugar(value: number) {
        if (value > 5) throw new Error("too sweet");
        this._sugar = value
    }
}

const cl = new ModernChai()

cl.sugar = 3


//static members

class EkChai {
    static shopName = "Chaicode Cafe"

    constructor(public flavour: string) { }
}
console.log(EkChai.shopName)

// difining abstact classes

abstract class Drink {
    abstract make(): void
}

class myChai extends Drink {
    make() {
        console.log("brewing chai");

    }
}

// composition concept
class Heater {
    heat() { }
}
class ChaiMaker {
    constructor(private heater: Heater) { }

    make() {
        this.heater.heat
    }
}





