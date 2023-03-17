"use strict";
const score = [];
const names = [];
// <T> Indicates that it is a generic
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// here the type of input we pass locks the return type as well
function identityThree(val) {
    return val;
}
// identityThree("3")
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({ brand: "Coke", type: 4 });
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
anotherFunction(3, { connection: "lol", username: "pol", password: "gol" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
