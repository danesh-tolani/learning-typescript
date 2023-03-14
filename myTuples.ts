// const user: (string | number)[] = ["dt", 1];

let user: [string, number, boolean];

// in tuples not only the type but also the position of type matters
user = ["hc", 131, true];

// user = [131, true, "hc"]; // error - for 131 it will give Type 'number' is not assignable to type 'string'....

let rgb: [number, number, number];

rgb = [121, 121, 112];

type User = [number, string];

const newUser: User = [122, "danesh@gmail.com"];

newUser[1] = "lol";
// newUser[0] = "lol"; // error

// newUser.push(true);   // Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
