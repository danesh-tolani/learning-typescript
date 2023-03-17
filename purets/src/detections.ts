function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  id.toLowerCase();
}

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

// operator narrowing
function isAdmin(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}


//instanceof
// mostly used new keyword in class, objects

function logValue(x: Date | String) {
  if(x instanceof Date) {
    console.log(x.toUTCString())
  }
  else {
    console.log(x.toUpperCase());
  }
}


type Fish = {
  swim: () => void
}

type Bird = {
  fly: () => void
}

function isFish(pet: Fish | Bird): pet is Fish {  // if the below return is true it will return Fish else it will return Bird
  return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird): string{
  if(isFish(pet)) {
    pet
    return "fish food"
  }
  else {
    pet
    return "bird food"
  }
}



// discreminated union
// kind
interface Circle {
  kind: "circle"
  radius: number
}

interface Square {
  kind: "square"
  side: number
}

interface Rectangle {
  kind: "rectangle"
  length: number
  width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
  if(shape.kind === "circle") {
    return Math.PI * shape.radius ** 2
  }
  // return shape.side * shape.side
}


function getArea(shape: Shape) {
  switch(shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2

    case "square":
      return shape.side * shape.side
    
    case "rectangle":
      return shape.length * shape.width

    default: 
      const _defaultForShape: never = shape
      return _defaultForShape
  }
}