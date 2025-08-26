//String = Conjunto de Caracteres
//6 caracteres 0 - 5
let palavra = "Grande"
let primeiroCaracter = palavra.charAt(0)

console.log(palavra[0])
console.log(primeiroCaracter)
console.log(palavra.charAt(1))


//Coletar tamanho
console.log(palavra.length) //server pra qualquer variavel que seja um conjunto de dados


//Remover espacos do inicio e do fim de uma string
let frase1 = " Com grandes poderes vem grandes responsabilidades! "
console.log(frase1)
console.log(frase1.trim(""))

//indexar letras em uma string como indexof e lastindexof

console.log(frase1.trim().indexOf("poderes")) //esperado = 12
//Conferindo
console.log(frase1.trim().charAt(12))
console.log(frase1.trim().charAt(13))

//outros filtros
console.log(frase1.trim().indexOf("!", 15))
console.log(frase1.trim().charAt(49))

//Comecar do fim ao inicio
console.log(frase1.trim().lastIndexOf("!"))
console.log(frase1.trim().charAt(49))

//substituicao de indices
let frase2 = "Olho por olho dente por dente e acabaremos em um mundo cego"
console.log(frase2.replace("por", "teste")) //temos um problema ele substitui apena o index 10

//Para corrigir esse problema vamos utilizar um espressao regular /x/g
console.log(frase2.replace(/e/g, "###"))
console.log(frase2.replace(/ /g, "") )

//Contar uma String slice
console.log(palavra.slice(0, 3))
console.log(palavra.slice(3, 6))

//Dividir um String em um array
let vetorPalavras = frase2.split(" ")
console.log(vetorPalavras)
console.log(vetorPalavras[5])

//Alterar Caixa das Palavras
console.log(frase1.toUpperCase()) //Tranforma tudo em Maiusculo
console.log(frase1.toLocaleLowerCase())//Tranforma tudo em minusculo