let greetings: string = "Hello Danesh"; // here :string is known as type inferrer

// greetings = 6;  // this will give error because greetings only takes a string
console.log(greetings);
// greetings.toLowercase() // this will also give error that do you mean toLowerCase

// myNum.toUpperCase() // this will give error tat this property is not allowed on a number

// number
let userId: number = 334466; // this is nopt a good way because we are telling it is a number and then putting a number which is obvious.

// if we just do
let userIdTwo = 334466; // Ts automatically knows it is a number

// this we used to do in js nut the difference is that is Js you could assign any other type but in Ts you can only assign that particular type
// userIdTwo = "lol" error
// boolean
let isLoggedIn: boolean = false;

export {};
