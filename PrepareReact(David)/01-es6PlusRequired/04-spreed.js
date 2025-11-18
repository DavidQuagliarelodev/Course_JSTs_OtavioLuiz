let user = {
  nome: "david",
  idade: 20,
  email: "david@gmail.com",
};

let user3 = { ...user };

let user2 = user;

console.log(user, user2);

user2.nome = "Gabriel";
console.log(user, user2, user3);
