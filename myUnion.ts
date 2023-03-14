// when we don't know what data type is going to come we use Union instead of any

// let score: number = 33; // now we cannot store anything except number

let score: number | string; // this will allow number and string both

score = 44;

score = "33";

// the above is now allowed

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

// a person can be a User or an Admin
const person: User | Admin = {
  username: "Danesh",
  id: 123,
};

function getDbId(id: number | string) {
  // making some API calls
  console.log(`db id is ${id}`);
  //   id.toLowerCase(); // Property 'toLowerCase' does not exist on type 'string | number'.
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

getDbId(3);
getDbId("3");

// array

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];

const data3: string[] | number[] = ["1", "2", "3"]; // this means an array can either be all the numbers or all the strings but not mixed

// correct way
const data4: (string | number)[] = [1, "2", 3]; // this means an array can be mixed of string and number

// literal type of assignment

let seatAllotment: "aisle" | "middle" | "window";

// seatAllotment = "crew" // Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'.
