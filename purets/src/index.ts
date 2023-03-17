class User {
  // name and email are public because we havn't marked anything
  public email: string;
  name: string;
  readonly state: string = "Gujarat";
  private city: string = "Gandhinagar";
  //   private readonly city: string = "Gandhinagar"

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

class User2 {
  //   private _courseCount = 1;
  protected _courseCount = 1;

  readonly city: string = "Gandhidham";
  constructor(public email: string, public name: string, private userId: string) {}

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  // error A 'set' accessor cannot have a return type annotation.
  // setter should not have a return type
  //   set courseCount(courseNum): void {
  //   }
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

// the child class cannot access the private property of parent class
class subUser extends User2 {
  isFamily: boolean = true;
  changeCourseCount() {
    // this._courseCount = 4 // error Property '_courseCount' is private and only accessible within class 'User2'
    this._courseCount = 4; // if the property is protected then it wont give error
    // protected means: the property is accessible in the class as well as the class that inherits it
  }
}

const danesh = new User("danesh@gmail.conm", "danesh");
// danesh.state = "Maharashtra" // error field is readonly
// danesh.city; // Property 'city' is private and only accessible within class 'User'
