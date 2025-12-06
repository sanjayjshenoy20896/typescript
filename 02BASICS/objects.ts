// const User = {
//     name:"Sanjay",
//     email:"sanjay@gmail.com",
//     isActive:true
// }

// function createUser({name, isPaid}: {name: string, isPaid: boolean}): string {
//     return  `${name} ${isPaid}`
// }
// let newUser = {name:"sanjay",isPaid:false,email:"sam@gmail.com"}
// createUser(newUser);

// function createCourse():{name:string,price:number}{
//     return {name:"ts",price:399}
// }


//type aliases - A type alias is exactly that - a name for any type.

//readonly and optional ?
//readonly -> the value cannot be mutated
//? -> makes the variable or ibj a optional key
type User = {
    name:string
    email:string
    isActive:boolean
    readonly _id: string
    creditCardDetails?:number // makescreditcard as optional
}

let myUser:User = {
    name:"Sanjay",
    _id:"1234",
    email:"sanjay@gmail.com",
    isActive:false
}
myUser.email = "sanjay123@gmail.com";

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}




export {}