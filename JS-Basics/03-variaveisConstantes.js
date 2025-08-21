//Podemos declarar dois tipos de variaveis e uma constante
//var - variavel de escopo global(Pode ser acessado em diferentes tipos de escopo)
{
  var idSistema = 1243142;
}

//let - variavel de escopo de bloco(Pode ser acessado apenas dentro do bloco onde foi definida)
{
  let nomeUsuario = "Pedro";
  console.log(`O nome do usuario e ${nomeUsuario}`);
  nomeUsuario = "David";
  console.log(`O nome do usuario agora e ${nomeUsuario}`);
  console.log(`O id do sistema e ${idSistema}`);
}
//const - constante de escopo de bloco e nao pode ter seu valor fixo alterado
{
  const PI = 3.14;
  console.log(`O valor de PI e ${PI}`);
  console.log(`O id do sistema e ${idSistema}`);
}
