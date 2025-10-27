const user = {
  name: "Joao",
  year: 20,
  email: "joao@gmail.com",

  incrementarIdade() {
    return this.year++;
  },
};

console.log(user.name);
console.log(user.year);
console.log(user.email);
user.incrementarIdade();
console.log(user.name);
console.log(user.year);
console.log(user.email);

//function factory
//Em js e tipo um Construtor na unha
function criaUsuario(name, year, email) {
  return {
    // name: name
    // o js consegue auto inferir
    name,
    year,
    email,

    incrementarIdade() {
      return this.year++;
    },
  };
}

const user2 = criaUsuario("Davd", 20, "david@gmail.com")
console.log(user2.name)
console.log(user2.year)
console.log(user2.email)
user2.incrementarIdade()
console.log(user2.name)
console.log(user2.year)
console.log(user2.email)