let score:number | string  = 33;
score  = "34";


type User = {
    name:string
    id:number
}

type Admin = {
    username:string,
    id:number
}

let hitesh:User|Admin = {
    name:"hitesh",
    id:334
}
hitesh = {
    username:"hc",id:334,name:"hotesh"
}


// function getDbId(id:number|string){
//     //making some api calls
//     console.log("DB is is :" + id)
// }
getDbId(3);
getDbId("3")


function getDbId(id:number|string){
    //making some api calls
    if(typeof id === "string"){
        id.toLowerCase()
    }else{
        id + 2
    }
}


//array 

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = ["1", "2", 3, true]

// literal assignment
let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"