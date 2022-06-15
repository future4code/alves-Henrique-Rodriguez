// Exercício 1
let array
console.log('a. ', array)
// Aqui é indefinido

array = null
console.log('b. ', array)
// Aqui não vi diferença ele só vai aparecer o que está escrito "null"

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// Aqui ele mostra quantos elementos existe na array

let i = 0
console.log('d. ', array[i])
// Aqui ele mostra quando caracteres existe na array

array[i+1] = 19
console.log('e. ', array)
// Aqui ele monstra quando elementos existe na array e mostra o elementos na sequência

const valor = array[i+6]
console.log('f. ', valor)
// Aqui ele mostra o resultado de "i" (que é 3) + 6

// Exercício 2
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// O valor é de 27

// Parte 2
// Exercício 1
let nome = prompt (`Digite seu nome`)
let email = prompt (`Digite seu e-mail`)
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

// Exercício 2
let arrayComidas = ["Lasanha", "Sushi", "Pizza", "Sopa de queijos", "Hamburguer" ]
console.log(arrayComidas)
console.log('"Essas são as minhas comidas preferidas:\n',arrayComidas[0] ,'\n',arrayComidas[1] ,'\n',arrayComidas[2] ,'\n',arrayComidas[3] ,'\n',arrayComidas[4])

// Exercício 3
const listaDeTarefas = []
listaDeTarefas.push(prompt("Adicione a tarefa número 0!"), prompt("Adicione a tarefa número 1!"),prompt("Adicione a tarefa número 2!"))
console.log(listaDeTarefas)