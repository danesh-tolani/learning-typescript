// function addTwo(num: number) {
//   return num + 2;
// }

function addTwo(num: number): number {
  // by this we are saying that the function should only return a number
  return num + 2;
  //   return "lol"; // this will throw an error
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, password: boolean = false) => {};

// function getValue(myVal: number) {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman", 3];

const lol = heros.map((hero): string => {
  // this should always return a string
  return `hero is ${hero}`;
});

console.log(lol);

loginUser("danesh", "h@h.com");

console.log(addTwo(5));
console.log(getUpper("lol"));

signUpUser("Danesh", "danesh@gmail.com", false);

function consoleError(errorMessage: string): void {
  console.log(errorMessage);
  //   return "lol"  this will give error
}

// never means it never returns a value and it means function throws an exception or terminates execution of program
function handleError(errorMessage: string): never {
  throw new Error(errorMessage);
}

// return void means not gong to return anything ever

export {};
