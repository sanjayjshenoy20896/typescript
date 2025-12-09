/**
 * Generics:
 * provide a way to create reusable components that can work with a variety of data types while maintaining type safety
 * 
 * 
 */

const score:Array<number>=[];
const names:Array<string>=[];



function identityOne(val: boolean | number):boolean | number{
    return val
}

function identityTwo(val: any):any{
    return val
}

// below function defines that both input and output returned are of the same type
function identityThree<Type>(val: Type): Type {
    return val
}

function identityFour<T>(val:T):T{
    return val;
}

interface Bottle{
    brand:string,
    type:number,
}

// identityFour<Bottle>({brand:"tuppleware",type:1});

//generics for array and arrow functions
function getSearchProducts<T>(products:T[]):T{
    // do some db ops
    const myIndex = 3;
    return products[myIndex]
}

const getMoreSearchProducts = <T,>(products:T[]):T=>{
    const myIndex = 3;
    return products[myIndex];
}

interface Database{
    connectionString: string,
    username:String,
    password:string
}

function anotherFunction<T,U extends Number>(valOne:T,valTwo:U):Object{
    return{
        valOne,
        valTwo
    }
}
anotherFunction(3,4);

function anotherFunction1<T,U extends Database>(valOne:T,valTwo:U):Object{
    return {valOne,valTwo}
}

const value = anotherFunction1(3,{connectionString:"test",username:"sanjay",password:"test"})
// console.log(value)
interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}


// it can be array of quiz or array of course
class Sellable<T>{
    public cart:T[] = [];
    addToCart(products:T){
        this.cart.push(products);
    }
}



