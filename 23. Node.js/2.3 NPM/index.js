// var generateName = require("sillyname");
import generateName from "sillyname";

var sillyname = generateName();
console.log(`My name is ${sillyname}.`);

import superheroes from "superheroes";

var mySuperheroName = superheroes.random();
console.log(
  `My superhero name is ${mySuperheroName}! and I'am here to save you ...`
);
