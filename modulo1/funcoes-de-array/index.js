// Parte 1
// Exercício 1
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })
  // a) Vai imprimir os "nomes" e "apelidos"

// Exercício 2
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)
// a) Vai imprimir os "nomes" e "apelidos" em ordem crescente

// Exercício 3
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)
// a) Vai imprimir os "nomes" e "apelidos", em array correta

// Parte 2
// Exercício 1
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
// a)
const nomes = pets.map((nomesDog) => {
        return nomesDog.nome
    })
// b)
const salchicha = pets.filter((salsicha) => {
    return salsicha.raca ==='Salsicha'
})
// c)
const poodle = pets.filter((dog)=> dog.raca === 'Poodle').map((dog)=>
`Você ganhou um cupom de desconto de 10% para tosar o ${dog.nome}`)
console.log(nomes, salchicha, poodle)

// Exercício 2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 // a)
 const nameProdutos = produtos.map((produto)=> produto.nome)
// b)
const nomePreco = produtos.map((produto)=>{
    let objeto = {
        nome : produto.nome,
        preco : produto.preco - ((produto.preco/100)*5)
    }
    return objeto
 })
 console.log(nomePreco)
// c)
const bebidas = produtos.filter((produto)=> produto.categoria ==="Bebidas")
console.log(bebidas)
// d)
const ype = produtos.filter((produto)=> produto.nome.includes("Ypê"))

console.log (ype)
// e)
const desconto = ype.map((produto)=>`Compre ${produto.nome} por ${produto.preco}`)

console.log(desconto)

//Desafio
// Exercícios 1
// a)
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 const pokemonsNome = pokemons.map((pokemon)=>pokemon.nome)

pokemonsNome.sort((a,z)=> a.localeCompare(z)) //ordem alfabetica

console.log(pokemonsNome)

/ /b)

const pokemonsTipos = new Set(pokemons.map((pokemon, index)=>pokemon.tipo)) //valores únicos
console.log (pokemonsTipos) 