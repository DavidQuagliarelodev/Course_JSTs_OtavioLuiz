let num1 = 5;
let num2 = 10;
//soma
let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let modulo = num1 % num2;

//No primeiro exemplo ele exibe primeiro depois acrecenta (Tomar cuidado)
console.log(num1++);
console.log(num1);
//Nesse exemplo ele acresenta primeiro e depois exibe
console.log(++num2);


//Um pouco mais sobre incremento    
let num3 = 10
let contador = 0;

contador = contador + num3;
contador += num3; //contador = contador + num3
console.log(contador)

//NaN
let num4 = 80;
let num5 = 'L10'
let num6 = '10'
let num7 = '17.43'

console.log(num4 * num5) //Focei um NaN
console.log(num4 + num5)//Concatenar
console.log(num4 - num6)//Js vai dar um jeito de fazer kk (A nao ser que seja um +, ai ele concatena)

//Coversao
//De fato js so entende que numero = a Number idependente do valor
//Agora na conversao temos sim uma diferenca entre Int e Float, mas a melhor maneira e converter com Number
let convertNum6 = parseInt(num6)
console.log(convertNum6)
console.log(typeof(convertNum6))

let convertNum7 = parseInt(num7)
console.log(convertNum7)
console.log(typeof(convertNum7))

let convertNum7Float = parseFloat(num7)
console.log(convertNum7Float)
console.log(typeof(convertNum7Float))


//Melhor opcao e converter com Number que vai respeitar tudo
let convertNumber6 = Number(num6)
let convertNumber7 = Number(num7)

console.log(convertNumber6)
console.log(convertNumber7)

