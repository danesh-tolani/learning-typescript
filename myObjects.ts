// const User = {
//   name: "Danesh",
//   email: "danesh@gmail.com",
//   isActive: true,
// };

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "Danesh", isPaid: true });

function createCourse(): { name: string; price: number } {
  // the first curly bracket is where we define parameters, first curly braces is the return type and second curly braces is the function definition
  return { name: "Danesh", price: 2 };
}

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createAUser(user: User): User {
  return { name: "", email: "", isActive: true };
} // if someone passes a user it should adhere to the type of User

// the above example shows that the input should be type of user and return type should also be a type of user

createAUser({ name: "", email: "", isActive: true });

export {};
