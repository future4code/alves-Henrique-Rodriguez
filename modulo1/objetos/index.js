// // Parte 1
// // Exercício 1
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])
// // a) Aqui aparece o nome do "Matheus Nachtergaele", "Virginia Caverndish", "object canal:Globo. horario:14h".

// // Exercício 2
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)
// // a) Aparece nome: "Juca","Juba" e "Jubo". Idade: "3","3" e "3". Raça: "SRD","SRD" e "SRD",
// // b) Os trê pontos copian

// // Exercício 3
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))
// // a) vai aparecer "false"
// // b) Ele vai veirifcar o "objeto" "backender" pra conferir se é "true or false"

// // Parte 2
// // Exercício 1
// // a)
// const pessoa = {
//     nome: "Henrique", 
//     apelidos: ["Ricks", "Ricks2D", "Eneias"]
//  }
//  console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)

//  // b)
// pessoa.apelidos = ["Roger", "rique", "Oclinhos"]
// console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)

// // Exercício 2
// // a)
//  const pessoa = {
// 	nome: "Rogerio", 
//     idade: 23, 
// 	profissao: "Estudante"
// }

// minhaFuncao(pessoa)
// // b)
// const pessoa1 = {
//     nome: "João",
//     idade: 50,
//     profissao: "Borracheiro"
// }
// const pessoa2 = {
//     nome: "Renan",
//     idade: "27",
//     profissao: "Entregador"
// }
// let retornar = (pessoa1, pessoa2) =>{
//     let formatacao = (`${pessoa1.nome}, ${pessoa1.nome.length}, ${pessoa1.idade}, ${pessoa1.profissao} ${pessoa1.profissao.length}`)
//     return formatacao
// }
// let teste1 = retornar(pessoa1)
// let teste2 = retornar(pessoa2)
// console.log(teste1, teste2)

// Exercício 3
// a)
const carrinho = []

// b)
const melao = {
    nome: "Melão",
    disponibilidade: true
}
const pera = {
    nome: "Pêra",
    disponibilidade: true
}
const morango = {
    nome: "Morango",
    disponibilidade: true
}

// c)
const inserir = (fruta) => carrinho.push(fruta)
inserir(melao)
inserir(pera)
inserir(morango)

// d)
console.log(carrinho)