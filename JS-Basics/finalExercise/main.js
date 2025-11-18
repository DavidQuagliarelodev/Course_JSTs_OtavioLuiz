const form = document.getElementById("form");
const btn = document.getElementById("btn")
const content = document.querySelector("#content")
const users = [];

//Factory
function insertData(nome, sobrenome, peso, altura) {
  return {
    nome,
    sobrenome,
    peso,
    altura,
  };
}

btn.addEventListener("click", (e) => {
  e.preventDefault(); //Prevenindo um evento padrao;

  //Diminuindo o escopo ao nao usar o document, porem sou obrigado a usar o querySelector
  let formNome = form.querySelector("#nome").value; //QueySelector juncao do id com class, eu posso decidir, mas so posso acessar os filhos do form ou de qulquer outro elemento usando o querry
  const formSobrenome = form.querySelector("#sobrenome").value;
  const formPeso = form.querySelector("#peso").value;
  const formAltura = form.querySelector("#altura").value;

  users.push(insertData(formNome, formSobrenome, formPeso, formAltura));
  console.log(users);

  content.innerHTML += `<h3>${formNome}, ${formSobrenome}, ${formPeso}, ${formAltura}<h3/>`


  document.getElementById("nome").value = "";
  document.getElementById("sobrenome").value = "";
  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
});
