// function is very safe becouse of type

function makeChai(type: string, cups: number) {
    console.log(`Making ${cups} cups to ${type}`)
}
makeChai("MasalaChai", 3)

// we know that this fuction will number datatype
function getChaiPrice(): number {
    return 23
}

// loger function dosent return any datetype => we use void
function logChai(): void {
    console.log("Chai is ready");
}

//optional parameter and defoult parameter

// function orderChai(type?: String){

// }

// default
function orderChai(type: string = "masala") {

}


function creteChai(order: {
    type: string;
    suger: number;
    size: "small" | "large"
}): number {
    return 4
}