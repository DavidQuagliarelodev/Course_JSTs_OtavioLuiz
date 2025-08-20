//Por padrao, o Js possui tipagem dinamica
//Ou seja define automaticamente o tipo a qual pertece a variavel

let nome = "David";
let idade = 20;
let estudante = true;

console.log(typeof nome); //string
console.log(typeof idade); //number
console.log(typeof estudante); //boolean

//Js nao diferencia tipos numericos como (int, double, float, etc) pra ele tudo é number
let n1 = 12;
let n2 = 14.65;

console.log(typeof n1); //number
console.log(typeof n2); //number
