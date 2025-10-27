let a = 10;
let b = a;
//Copia de valores, porem cada um aponta pra uma parte diferente da memoria

console.log(a)
a = 20;
console.log(b)
console.log(a)


//Nao primitivos apontam pro mesmo valor em memoria

let user = {
    nome: "David",
    idade: 10,
    email: "david@gmail.com"
}

let user2 = user;

console.log(user, user2)
user.nome = "Gabriel"
console.log(user, user2)

let array1 = [12, 34 ,3 ,5 ,5]
let array2 = array1;
// let array3 = [...array1]

console.log(array1, array2)

array1[0] = 2000;
console.log(array1, array2)


//Spred ele faz a copia
let usuario = {
    nome: "Vitor",
    idade: 49,
    email: "vitor@gmail.com"
}

let novoUsuario = {...usuario}

console.log(usuario, novoUsuario)

usuario.nome = "Saulo"

console.log(usuario, novoUsuario)