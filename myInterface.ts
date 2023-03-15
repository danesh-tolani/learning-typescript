interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial: () => string;
  startTrial(): string;
  getCoupon(couponname: string): number;
}

// re-opening interface
interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const danesh: Admin = {
  dbId: 22,
  role: "admin",
  email: "danesh.tolani@gmail.com",
  userId: 2211,
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (couponname: "danesh10") => {
    return 10;
  },
  githubToken: "hello",
};

// difference between type alias and interface:
// types cannot be re-open to add new value but interface can be
