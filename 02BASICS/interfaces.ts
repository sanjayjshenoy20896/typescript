/***
 * Interfaces:
 * Some examples of practical use cases for Amazon Neptune are social network user connection mapping, fraud detection systems, and search and recommendation systems.
 * 
 * It defines the shape of objects.It is a loosely coupled version of class.
 * 
 */

interface User{
    readonly dbId:number
    email:string,
    userId:number,
    googleId?:string,
    // startTrail:()=>string
    startTrail():string,
    getCoupon(coupon:string,value:number):number

}

// reopening the interface -> adding more properties in the interface
interface User{
    githubToken:string
}

// extends -> this is interface inheritance. in the below example The Admin interface extends from User interface.
/***
 * extends -> this is interface inheritance. 
 * in the below example The Admin interface extends from User interface.
 * The attributes of user is now available to admin interface in addition to the attributes defined in the admin interface.
 */
interface Admin extends  User{
    role: "admin" | "ta" | "super-admin"
}
const hitesh:Admin={
    dbId:22,
    role:"admin",
    githubToken:"github",
    email:"h@gmail.com",
    userId:1121,
    startTrail:()=>{
        return "trail started"
    },
    getCoupon:(name:"hitesh10",off:10)=>{
        return off
    }
}

hitesh.email = "h@hc.com";
// hitesh.dbId = 23; // not allowed as the field is readonly
console.log(hitesh);

/***
 * Difference between Type and interfaces
 * Type:
 * 1.) Type cannot be opened to add new properties
 * 2.) Type can be extended via intersection and union
 * 3.) Type cannot be redeclared to extends new properties
 * 4.) 2 types with same name cannot be used
 * 
 * Interface:
 * 1.) Interfaces can be opened to add new properties or methods
 * 2.) Interfaces can be extended via object inheritance using the extends keyword
 * 3.) Interfaces can be redecalred to add new properties or methods
 * 4.) 2 types with same name will result in merged properties
 */
