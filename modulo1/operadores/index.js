// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)

// console.log("d. ", typeof resultado)
// Primeiro false
// Segundo false
// Terceiro true
// Boolean
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)
// Tem que transforma os dados que recebeu do prompt em Int o mesmo são salvos como String
// para que seja impresso o resultante da soma do primeiro número com o segundo


//Parte 2
//Exercício 1

let idadeUser = prompt('Digite sua idade')
let idadeAmigo = prompt('Qual o nome do seu amigo?')
let compare = idadeUser > idadeAmigo

//Exercício 2
let numbPar = prompt ('Digite um número par')
let resultado = numbPar % 2
console.log(resultado)

//Exercício 3


let idadeE3 = prompt('Digite sua idade')
let idadeHoras = idadeE3*24
let idadeDias = idadeE3*365.25
let idadeMeses = idadeE3*12
console.log(`Você tem ${idadeE3} anos, ou ${idadeHoras} em horas, ou ${idadeDias} em dias, ou ${idadeMeses} em meses`)

// Exercício 4

let numero1 = prompt('Escreva um número')
let numero2 = prompt('Escreva outro número')

console.log(`O primeiro númeor é maior que o segundo?${numero1>numero2}`)
console.log(`O primeiro númeor é maior que o segundo?${numero1--numero2}`)

let resultado = numero1%numero2
console.log(`O primeiro númeor é divisível pelo segundo?${resultado--0}`)

resultado - numero2%numero1
console.log(`O segundo número é divisível pelo primeiro?${resultado--0}`)