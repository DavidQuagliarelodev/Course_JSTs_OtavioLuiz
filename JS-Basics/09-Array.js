let nomes = ["david","ana", "paulo"]
console.log(nomes)
console.log(nomes[2])

//Adcionar itens ao array
nomes[nomes.length] = "Julia" //meio paia de fazer
console.log(nomes)

nomes.push("Ricardo") //Melhor maneira de fazer - adiciona ao final
console.log(nomes)

nomes.unshift("Otavio") //Adicionando ao inicio - porem mudando todos os index posteriores
console.log(nomes)

//Remover dados
nomes.pop() //remover o ultimo index
console.log(nomes)

nomes.shift()//remover o primeiro index
console.log(nomes)

delete nomes[2]//deletar o dado porem nao vai deletar o index = undefined
console.log(nomes)
console.log(nomes[2])


//Boa parte das funcoes que aprendemos em String.js funcionam aqui tambem
console.log(nomes.indexOf("paulo"))
console.log(nomes.slice(0, 2))

