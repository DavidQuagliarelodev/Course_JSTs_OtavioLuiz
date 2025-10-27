// //Maneira 1 - padrao
// function somaDoisNumerosPositivos(a, b){
//     console.log(a + b);
// }
// somaDoisNumerosPositivos(4,2);

// //Js por nao inferir tipos = abre bastante margen pra erro exemplo
// somaDoisNumerosPositivos("sd", 2); //concatenar

// function somaDoisNumerosPositivosComReturn(a, b){
//    return a + b;
// }
// console.log(somaDoisNumerosPositivosComReturn(5, 5));
// //Armazenar em uma variavel

// let result = somaDoisNumerosPositivos(1, 1); //undefined
// let resultReturn = somaDoisNumerosPositivosComReturn(1, 1); //2
// console.log(result)
// console.log(resultReturn)

//Maneira 2 = Function Anonima
// let somar = function(a=1, b=1){return a + b}
// console.log(somar())
// console.log(somar(4,3))

//Maneira 3 e mais utilizada (depedendo do contexto) arrow function
let somarNumeros = (a, b) => {return a + b}
console.log(somarNumeros(2 ,4))

//simplificando ainda mais
//quando temos apenas um parametro
let exibirInformacao = a => console.log(a);

exibirInformacao("testando")