//escopo e mutabilidade
{
  let a = 10;
  {
    console.log(a);
  }
}

const a = [];
a.push(12);
a.push(10);

{
  console.log(a);
}
