type User = {
  readonly _id: string; // readonly will stop user from changing anything
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number; // '?' means that this field is optional so even if we don't receive te value for this filed it will not throw as error
};

let myUser: User = {
  _id: "1234",
  name: "Danesh",
  email: "danesh@gmail.com",
  isActive: true,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  carddate: string;
};

// this cardDetails type is combination of other two types
type cardDetails = cardNumber &
  cardDate & {
    cardcvv: number;
  };

myUser.email = "h@gmail.com";
// myUser._id = "lol"  // Cannot assign to '_id' because it is a read-only property.

// here we are mixing and matching the types
let myCard: cardDetails = {
  cardnumber: "12345",
  carddate: "22-1-2023",
  cardcvv: 343,
};
