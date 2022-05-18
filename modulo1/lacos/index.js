// Parte 1
// Exercício 1
// Código 1
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
//Código 2
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
//  5 loopings totalizando 10 numa soma 0+0+1+2+3+4

// Exercício 2
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
// a)Todos numeros maiores que 18
// b)Não soube responder, acredito que sim mas pode ser mais dificil
// c)adiciona um * em cada linha do numero desejado no prompt 

// Exercício 3
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
// R: Se digitar "4" irá ocorrer as seguintes "*"
// *
// **
// ***
// ****

// Parte 2
// Exercício 1
const Pets = Number(prompt("Quantos pets você tem?"));
const pets1 = []
if (pets1 === 0) {
    console.log("Que pena!Você poderia adotar um!");
} else {
    let nomePet
    for (let i = 0; i < pets1; i++) {
        nomeSeuPet = prompt("Qual o nome dos seus pets?")
        pets1.push(nomeSeuPet)
    }
}
console.log(Pets)

// Exercício 2
// a)
const arrayOriginal = [1,2,3,4,5,6,7,8,9,10]
const arrayA = (array) => {
    for (let valor of array)
        console.log(valor)
}

// b)
const arrayB = (array) => {
    for (let valor of array){ 
    let valor1 = +valor
        console.log(valor1/10)
 }
 }
 
 // c)
 const arrayC = (array) => {
     const arrayPar = []
    for (let valor of array){ 
    let valor2 = + valor
    if(valor2 %2 ===0){
arrayPar.push(valor2)
     }
 }
 console.log(arrayPar)
 }
 arrayC(arrayOriginal)

 // d) 
const arrayD = (array) => { 
const arrayElemento = []
for(let i=0 ; i < array.length; i++){
let valorArray = `O elemento do index ${i} é ${array[i]}`
arrayElemento.push(valorArray)
}
console.log(arrayElemento)
}
arrayD(arrayOriginal)

// e)
const arrayE = (array) =>{
    let valorMaximo = array[0]
    let valorMinimo = array[0]
    for (let valor of array){
if(valor>valorMaximo){ 
    valorMaior = valor
    }
    if(valor<valorMenor){
        valorMenor=valor
    }
 }
 console.log(`o valor maior é ${valorMaior} e o valor menor é ${valorMenor}`)
  }
  arrayE(valorOriginal)