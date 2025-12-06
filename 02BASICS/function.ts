function addTwo(num:number):number{
    return num + 2
}


function getUpper(val:string):string{
    return val.toUpperCase()
}

function signup(name:string,email:string,password:string,isPaid:boolean):void{};

function loginUser(name:string,email:string,isPaid:boolean=false):void{};


signup("sanjay","sanjay@gmail.com","sam",false);
loginUser("Sanjay","sanjay@gmail.com")
addTwo(5)
getUpper("Sanjay");

// union
function getValue(val:number): string | boolean{
    if(val >5){
        return true
    }
    return "200 OK"
}

const getHello = (s:string):string =>{
    return s
}
const heros = ["thor", "spiderman", "ironman"]
// const heros = [1, 2, 3]

heros.map((hero): string => {
    return `hero is ${hero}`
})


function consoleError(errmsg: string): void{
    console.log(errmsg);
    
}

// never -> it never returns anything, forceful termination of function
function handleError(errmsg: string): never{
    throw new Error(errmsg);
}
export {}

