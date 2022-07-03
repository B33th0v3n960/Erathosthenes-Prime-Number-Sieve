let person = {
  firstName: "Zhou",
  age: 16,
};

console.log(person);

//Dot notation

person.firstName = "John";

console.log(person.firstName);

//Bracket notation

person["firstName"] = "jfk";

console.log(person.firstName);

let dog = {
  name: "Lady",

  friends: ["Moo", "Bowie"],
};

console.log(dog["name"]);
