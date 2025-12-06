"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signup(name, email, password, isPaid) { }
;
function loginUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
;
signup("sanjay", "sanjay@gmail.com", "sam", false);
loginUser("Sanjay", "sanjay@gmail.com");
addTwo(5);
getUpper("Sanjay");
// union
function getValue(val) {
    if (val > 5) {
        return true;
    }
    return "200 OK";
}
var getHello = function (s) {
    return s;
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
// never -> it never returns anything, forceful termination of function
function handleError(errmsg) {
    throw new Error(errmsg);
}
