// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
    altura = prompt('Insira a altua')
    largura = prompt('Insira a largura')
    const area = altura * largura
 console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoDeNascimento) {
    anoAtual = prompt('Insira seu nascimento')
    anoDeNascimento = prompt('Insira o ano atual')
  const idade = anoAtual - anoDeNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura)
  console.log(imc)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
    let nome = prompt('Qual seu nome?')
    let idade = prompt('Qual sua idade')
    let email = prompt('Qual seu email?')
    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  }

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() { 
    let cor1 = prompt('Qual sua primeira cor?')
    let cor2 = prompt('Qual sua segunda cor')
    let cor3 = prompt('Qual sua terceira cor')
    let cores = [cor1,cor2,cor3]
    console.log(cores)
}


// EXERCÍCIO 06
let usuarioTexto = prompt(`Coloque seu texto`)
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}
console.log(retornaStringEmMaiuscula(usuarioTexto))

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
    const lucro = custo / valorIngresso
    return lucro
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
    let texto1 = string1.length
    let texto2 = string2.length
    let dados = string1 > string2
    return dados
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
    let array1 = [1, 2, 3]
    return array [0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
    let array2 = [1, 2, 3, 4, 5]
    return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
    let troca1 = array.length
    let troca2 = array[0]
    array[0] = array[troca1 -1]
    array[troca1 -1] = troca2
    return array
}
console.log(trocaPrimeiroEUltimo)

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
    return string1.toLowerCase() == string2.toLowerCase()
}
console.log(checaIgualdadeDesconsiderandoCase)

// EXERCÍCIO 13
function checaRenovacaoRG() {
    let anoAtual = prompt('Insira o ano atual')
    let anoDeNascimento = prompt('Insira o ano do seu nasciment')
    let anoEmissao = prompt('Insira o que foi emitida')
    let idade = anoAtual - anoDeNascimento
    let renova =
    (idade <= 20 && anoAtual - anoEmissao >= 5) ||
    (idade > 20 && idade <= 50 && anoAtual - anoEmissao >= 10) ||
    (idade > 50 && anoAtual - anoEmissao >= 15);
    console.log(renova)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
    let multiplos400 = ano % 400 === 0
    let multiplos4 = ano % 4 === 0
    let multiplos100 = ano % 100 === 0
    let condicoes = multiplos400 || (multiplos4 && !multiplos100) || multiplos400
    return condicoes
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
}