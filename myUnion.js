// when we don't know what data type is going to come we use Union instead of any
// let score: number = 33; // now we cannot store anything except number
var score; // this will allow number and string both
score = 44;
score = "33";
// a person can be a User or an Admin
var person = {
    username: "Danesh",
    id: 123
};
function getDbId(id) {
    // making some API calls
    console.log("db id is ".concat(id));
    //   id.toLowerCase(); // Property 'toLowerCase' does not exist on type 'string | number'.
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
getDbId(3);
getDbId("3");
// array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", "3"]; // this means an array can either be all the numbers or all the strings but not mixed
// correct way
var data4 = [1, "2", 3]; // this means an array can be mixed of string and number
// literal type of assignment
var seatAllotment;
// seatAllotment = "crew" // Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'.
