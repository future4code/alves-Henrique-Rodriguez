// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a,b)=>a-b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter((value)=>{if(value%2==0)
return value})
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 return array.filter((value)=> {if (value%2===0) return value}).map ((value)=>value**2)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = array[0]
    for (let i=0;i<array.length; i++){
    if(array[i]>maior){
        maior = array[i]
    }
  }
  return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let maior
let menor
    if (num1>num2){maior=num1, menor=num2}else{maior=num2, menor=num1}
let divi
    if (maior%menor===0){divi = true}else{divi = false}
let objetoNumero = {
    maiorNumero : maior ,
    maiorDivisivelPorMenor : divi ,
    diferenca : maior - menor
}
return objetoNumero
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let nPares = []
     for (let i = 0 ;i <=2*(n-1) ; i++)
        if (i%2===0){
            nPares.push(i)
        }
        return nPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoA == ladoC){
        return "Equilátero"
    }else if (ladoA != ladoB && ladoB == ladoC || ladoA==ladoC && ladoA != ladoB
        || ladoB==ladoA && ladoB != ladoC){
            return "Isósceles"
        }else {
            return "Escaleno"
        }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a,b)=>a-b)
    let arraySegundo = [array[array.length-2],array[1]]
    return arraySegundo
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    for (let i = 0; i < filme.atores.length; i++) {
        if (filme.atores[i] != filme.atores[0]) {
            filme.atores[i] = ' ' + filme.atores[i]
        }
    }
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let obj = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return obj
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasAlt = pessoas.filter((item) => item.altura >= 1.5)
    pessoasAlt = pessoasAlt.filter((item) => item.idade > 14)
    pessoasAlt = pessoasAlt.filter((item) => item.idade < 60)
    return pessoasAlt
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = pessoas.filter((pessoas) => {
        if (pessoas.altura <= 1.5 || pessoas.idade <= 14 || pessoas.idade >= 60) {
            return pessoas
        }
    })
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let total = contas.map((conta) => {
        let soma = conta.compras.reduce((itemAnt, itemAtual) => itemAnt + itemAtual, 0)
        let saldo = conta.saldoTotal
        return { ...conta, saldoTotal: saldo - soma, compras: [] }
    })
    return total
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    let listaOrde = consultas.sort(function (a, b) {
        return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0
    })
    return listaOrde
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}