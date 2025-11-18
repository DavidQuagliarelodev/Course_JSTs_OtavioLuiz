const user = {
  nome: "david",
  idade: 20,
  email: "david@gmail.com",
};

console.log(user.nome);
console.log(user.idade);
console.log(user.email);

const { nome, idade, email } = user;

console.log(nome, idade, email);
