"use strict";
// function addTwo(num: number) {
//   return num + 2;
// }
exports.__esModule = true;
function addTwo(num) {
    // by this we are saying that the function should only return a number
    return num + 2;
    //   return "lol"; // this will throw an error
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, password) {
    if (password === void 0) { password = false; }
};
// function getValue(myVal: number) {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman", 3];
var lol = heros.map(function (hero) {
    return "hero is ".concat(hero);
});
console.log(lol);
loginUser("danesh", "h@h.com");
console.log(addTwo(5));
console.log(getUpper("lol"));
signUpUser("Danesh", "danesh@gmail.com", false);
