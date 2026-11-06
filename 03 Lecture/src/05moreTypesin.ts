let response: any = "42"

//focrcefully type assersion
let numericLength:number =  (response as string).length

type Book = {
    name: string;
};

let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject.name);


const inputElements = document.getElementById("username") as HTMLInputElement

let value: any

value = 'chai'
value = [1, 2, 3]
value = 2.5
value.toUpperCase();



let newValue: unknown

newValue = "chai"
newValue = [1, 2, 3]
newValue = 2.5
// newValue.toUpperCase //=> unknown give the error we use type check
if(typeof newValue === "string"){
    newValue.toUpperCase();
}


try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error", error)
    
}

// when be loaddata from the envirement variables we set forcefully to its data type
const data:unknown = "chai aur code"
const strData: string = data as string


// Never Datatype

type Role = 'admin' | "user" //| "superAdmin" ;

function redirectBasedOnRole(role:Role): void {
    if(role === "admin") {
        console.log("Redirecting to the admin role");
        return;
    }
    if(role === "user") {
        console.log("Redirecting to the user role");
        return;
    }
    role;
}

function neverRetun():never{
    while(true){}
}