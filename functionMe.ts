// "any" basically means turn off the type checking

// to avoid "any" in our file we can put "noImplicitAny" flag to flag any implicit any as an error

// let hero;  // currently Ts don't know what this variable will store so it is putting as "any" but this is not good
let hero: string; // here having inference is good

function getHero() {
  return "thor";
}

hero = getHero(); // now if this function does not return a string it will give an error
