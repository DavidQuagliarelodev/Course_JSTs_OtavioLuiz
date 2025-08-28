//Alguns Metodos em js
let numberOne = 48.930;

//Arredondar pra baixo - floor
console.log(Math.floor(numberOne))

//Arredondar pra cima - ceil
console.log(Math.ceil(numberOne))

//Arredondar para o mais proximo - round
console.log(Math.round(numberOne))

//Coletando maior numero dentro de uma lista
// min e max precisam de argumentos individuais portanto podemos usar o ... pra usar um array
//porque dessa forma ele pega valor por valor de uma array e coloca com argumento individual do metodo
let listaDeNumeros = [12,43,65,7,4,2,65,7,5,6,3,76]
let menorNumero = Math.min(...listaDeNumeros)//Menor numero dentro de uma lista
let maiorNumero = Math.max(...listaDeNumeros)//Maior numero dentro de um lista
console.log(menorNumero) 
console.log(maiorNumero)

//Outro exemplo de abstracao 
function numeroMenor(arrayDeNumeros){
    return Math.min(...arrayDeNumeros)
}
console.log(numeroMenor(listaDeNumeros))

//random - tras numeros aleatorios de 0 a 1
//Mas p0odemos usar matematica pra melhorar isso
//Random * (max - min) + min 
//Arredondar 
console.log(Math.random());
let aleatorioEntre1e8 = Math.round(Math.random() * (8 - 1) + 1)
console.log(aleatorioEntre1e8)

//outros topicos
console.log(Math.sqrt(4))
console.log(Math.pow(2, 10))
console.log(Math.abs(numberOne))
console.log(Math.PI)