const greetings: string = "Hello Sanjay";
// number
const userId: number = 334455.3;
// boolean
const isLoggedIn:boolean = false;

//type inference
const myNum = 5; // above example myNum is inferred as number due to the value

// any keyword -> used to avoid any keyword
let hero:string;

function getHero(){
    return "hero"
}

hero = getHero();
console.log("hero",hero);

export {}

 