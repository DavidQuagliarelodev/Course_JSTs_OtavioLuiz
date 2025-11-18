//ES6
//import User from "./modules/User.js";

//comunsJs
//const { User } = require("./modules/User");
// const somar = require("./modules/somar");
const {
  somar,
  subtrair,
  multiplicar,
  dividir,
} = require("./modules/calculator");

// const user1 = new User("Beto", "beto@email.com");

// console.log(user1.name);
// console.log(user1.email);
console.log(somar(1, 1));
console.log(subtrair(1, 1));
console.log(multiplicar(1, 1));
console.log(dividir(1, 1));
