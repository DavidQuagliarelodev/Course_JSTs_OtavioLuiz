//Passar os valores das variaveis uma pra outra ex = valor de A = B, B = C, C = A
//Resolucao usando um auxiar 

let a = 10;
let b = 15;
let c = 20;

//resultado esperado : a = 15, b = 20, c = 10

let aux = 0;

aux = a;
a = b;
b = c;
c = aux

console.log(a, b, c)