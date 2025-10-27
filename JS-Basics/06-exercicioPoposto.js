function metodoComum() {
  let a = 10;
  let b = 15;
  let c = 20;

  let aux = 0;

  aux = a;
  a = b;
  b = c;
  c = aux;

  console.log(a, b, c); 
}

function metodoComJsDesestruct() {
  let x = 10;
  let y = 15;
  let z = 20;

  console.log(x, y, z); 

  [x, y, z] = [y, z, x]; 

  console.log(x, y, z);
}

metodoComum();
metodoComJsDesestruct();
