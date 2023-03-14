// const superHeros = [];
// superHeros.push("Spiderman");  // Argument of type 'string' is not assignable to parameter of type 'never'.

const superHeros: string[] = [];
superHeros.push("Spiderman");

const heroPower: number[] = [];
heroPower.push(2);

const heroSpeed: Array<number> = []; // this and the above example are exactly the same thing

type User = {
  name: string;
  isActive: boolean;
};

const allUser: User[] = [];
allUser.push({ name: "Danesh", isActive: true }); // we can only push data of type User now

export {};
