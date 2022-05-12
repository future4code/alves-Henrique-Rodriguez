// Parte 1
// Exercício 1
function minhaFuncao(variavel) {
	return variavel * 5
}
console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
minhaFuncao(2)
minhaFuncao(10)
// a) Vai ser impresso "10" "50"
// b) Nada será impresso no console

//Exercício 2
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
// a) O includes vai me dizer é verdadeiro ou falso o que estiver no texto descrito, e o toLowerCase deixa o texto em letra minuscula
// b) A saída no console será "true" para as 3 frases ditas

// Parte 2
// Exercício 1
// a)
function euSou() {
	console.log("Eu sou Henrique, tenho 26 anos, moro em São Paulo e sou estudante.")
}
euSou()
// b)
function euSou(nome,idade,endereço,profissão) {
	console.log('Eu sou',nome,'tenho',idade,'anos, moro em',endereço,'eu sou',profissão)
	return ('Eu sou'+ nome +'tenho' + idade + 'anos, moro em' + endereço + 'eu sou' + profissão)
}
let nome = prompt('Qual seu nome?')
let idade = prompt('Qual sua idade')
let endereco = prompt('Qual seu endereço?')
let profissao = prompt('Qual sua profrissão?')
(euSou(nome, idade, endereco, profissao))

// Exercício 2
// a)
const calculo = (number1,number2) => {return number1+number2}
console.log(calculo(2,5))
// b)
const comparador = (num1, num2) => {
	const numero = num1>=num2
	return numero
}
console.log(comparador(1,2))
// c)
const duo = (num1) => {return num1%2===0}
console.log(duo(5))
// d)
const usuarioTexto = prompt ('Coloque seu texto')
const mensagem = function (texto) {
	return texto.toUpperCase() +" "+ texto.length
}
console.log(mensagem(usuarioTexto))

// Exercício 3
const soma = 0
const sub = 0
const mult = 0
const div = 0
let conta = function(num1,num2){
	soma = num1 + num2
	sub = num1 - num2
	mult = num1 * num2
	div = num1 / num2
	console.log(`A soma dos dois numeros é ${soma}\n
	A subtração dos dois números é ${sub}\n
	A multiplicação dos dois números é ${mult}\n
	A divisão dos dois números é ${div}`)
}
conta(30, 3)
let number1 = +prompt('Digite um número para calcular')
let number2 = +prompt('Digite o segundo número para calcular')
let conta2 = function(num1, num2){
	soma = num1 + num2
	sub = num1 - num2
	mult = num1 * num2
	div = num1 / num2
	console.log(`A soma dos dois números é ${soma}\n
	A subtração dos dois números é ${sub}\n
	A multiplicação dos dois números é ${mult}\n
	A divisão dos dois números é ${div}`)
}
conta2(number1, number2)