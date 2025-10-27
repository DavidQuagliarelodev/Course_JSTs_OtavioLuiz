//Tipos primitivos sao valores que apontam pra uma unidade de memoria que pertence apenas aquela variavel
const nome = "David"; //String
const idade = 30; //Number
const ativo = true; //Boolean   
let dado;//undefined
let teste = null;//null

//Tanto undefined quanto null nao apontam pra nenhum endereco de memoria porem o null e de fato declarado pelo programador enquanto undefined e definido pelo javascript

console.log(typeof(nome))
console.log(typeof(idade))
console.log(typeof(ativo))
console.log(typeof(dado))
console.log(typeof(teste))  

//Enqanto isso tipos nao primitivos apontam pra um endereco de memoria que pode ser compartilhado entre variaveis
//portanto pode ser alterado por mais de uma variavel se ambas estiverem apontando pro mesmo endereco de memoria

//object
const user = {
    name: "Carlos",
    age: 25
}

console.log(typeof(user))
console.log(user)

let user2 = user
user2.name = "Fabio"
console.log(user)
console.log(user2)

//array (Object)
let alunos = ["João", "Maria", "Pedro"]
console.log(alunos)
console.log(typeof(alunos))

let alunos2 = alunos
alunos2.push("Ana")
console.log("alunos: " + alunos)
console.log("alunos2: " + alunos2)

