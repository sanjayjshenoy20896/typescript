"use strict";
/**
 * Generics:
 * provide a way to create reusable components that can work with a variety of data types while maintaining type safety
 *
 *
 */
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// below function defines that both input and output returned are of the same type
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({brand:"tuppleware",type:1});
//generics for array and arrow functions
function getSearchProducts(products) {
    // do some db ops
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    const myIndex = 3;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction(3, 4);
function anotherFunction1(valOne, valTwo) {
    return { valOne, valTwo };
}
const value = anotherFunction1(3, { connectionString: "test", username: "sanjay", password: "test" });
// it can be array of quiz or array of course
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
