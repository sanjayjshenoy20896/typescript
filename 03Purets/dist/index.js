"use strict";
// console.log("typescript is here still running")
// console.log("typescript is amazing")
//basic declaration
// class User {
//     public email:string
//     private name:string
//     readonly city:string
//     constructor(email:string,name:string,city:string){
//         this.email = email
//         this.name = name
//         this.city = city
//     }
// }
// best practice production grade code
class User {
    constructor(email, name, city, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.email = email;
        this.name = name;
        this.city = city;
        this.userId = userId;
    }
    deleteToken() {
        console.log("token deleted");
    }
    //getter using get
    get getAppleEmail() {
        return `apple-${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // there should be no return type for function
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const sanjay = new User("sanjay@gmail.com", "Sanjay", "bangalore", "123");
console.log(sanjay);
//sanjay.city -> not allowed
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const sam = new SubUser("sam", "sam@gmail.com", "Bangalore", "123");
console.log(sam);
// sam.changeCourseCount()
// console.log(sam)
/***
 * Public,Private and Protected
 *
 * Private modifiers:
 * They can accessed with class but they cannot be accessed outside the class.
 *
 * In the above example, we can see that the city is decalred using a private modifer. It can be used within the class but outside the class
 * These properties can be accessed for using private properties or methods
 *
 * Public Modifier:
 * They can be accsessed both inside and outside the class.
 *
 * Portected Modifier:
 * they can be accessed with the main class and also the child class. But it still cannot be used outside the class
 */
/*
 * Why Interfaces
 *
 *
 */
