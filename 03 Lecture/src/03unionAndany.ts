// Union => we use two data types

let subs: number | string = '14M'

let apiRequestStatus: "pending" | "success" | "error" = "pending"

apiRequestStatus = "success" // it could success, error, pending/ not other

let airlineSeat: 'aisle' | 'window' | 'middle' = 'window'

airlineSeat = 'window'

const orders = ['12', '20', '50', '59']

let currentOrder: string | undefined; // avoid ANY where as it possible

for(let order of orders) {
    if (order === '20') {
        currentOrder = order;
        break;
    }

}
console.log(currentOrder)