//Confirm
//Pode retornar um boolean(True or False)
alert("Bem Vindo ao Site");

let returnDiv = document.getElementById("return");
let returnDiv2 = document.getElementById("return2");

const confirmReturn = confirm("Gostaria de Acessar este site?");
//Todo propt = String, caso queira coletar um dado numerico ira ter que converter
const returnPrompt = prompt("Qual seu Nome");

if (confirmReturn === true) {
  returnDiv.innerHTML = `<h1>Bem vindo !<h1>`;
  returnDiv2.innerHTML = `<h1>Ola ${returnPrompt}<h1>`;
} else {
  returnDiv.innerHTML = `<h1>Vai te lascar entao Caba safado<h1>`;
}
