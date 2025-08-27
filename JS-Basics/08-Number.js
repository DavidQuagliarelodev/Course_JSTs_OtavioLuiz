//+ Alguns metodos com Number

//Conversao Number para String
let num1 = 130
console.log(typeof(num1))
console.log( typeof(num1.toString()) + " " + num1)

//Converter Number para String porem Binario
let num2 = 340;
let num2Binario = num2.toString(2);
console.log(num2Binario)
console.log(typeof(num2Binario))

//Arredondar Casas Decimais
let num3 = 32.95933443
console.log(num3)
console.log(num3.toFixed(2))
console.log(num3.toFixed(1))

//Conferir dados
console.log(isNaN(num3))
console.log(Number.isInteger(num1))