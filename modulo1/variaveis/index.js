/* let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

// Resultado da primeira é 10, da segunda é 10

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

// Todos são 10

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

// Primeiramente o prompt = Abre uma caixa de diálogo no site

const nome = null
const idade = idade

console.log(typeof nome, typeof idade)

// Foi definido como objeto, por ainda não dei um valor a essa variável
*/
nome = prompt("Seu nome")
idade = prompt("Sua idade")

console.log(nome, idade)
console.log(typeof nome, typeof idade)

//As duas variaveis se tornaram String, pois foi digitado em uma caixa de dialogo

alert(`Olá - ${nome} voce tem - ${idade} anos`)

let perg1 = prompt("Voce esta bem?")
let perg2 = prompt("Voce se alimentou hoje?")
let perg3 = prompt("Voce tem grana?")

alert(`Voce esta bem? - ${perg1}`)
alert(`Voce se alimentou hoje? - ${perg2}`)
alert(`Voce tem grana? - ${perg3}`)

let a = 10
let b = 25
console.log("Valor inicial a", a)
console.log("Valor inicial b", b)
let c = a
c = a
b = c
a = b

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)