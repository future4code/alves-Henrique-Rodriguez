// // Parte 1
// // Exercício 1
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
// // a) Ele compara e divide os números
// // b) Para números pares
// // c) Para números impares

// // Exercício 2
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
// // a) Para mostrar qual a fruta tem na lista o valor
// // b) "O preço da fruta  Maçã  é  R$  2.25"
// // c) A mensagem seria "O preço da fruta  Pêra  é  R$  5"

// // Exercício 3
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)
// // a) Está pedindo para inserir um número
// // b) Se fosse "10" a mensagem seria "Esse número passou no teste",
// // se colocar "-10" não terá nenhuma mensagem

// // Parte 2
// // Exercício 1
// // a)
// const idade = Number (prompt("Insira sua idade"))

// // b) c)
// function verificarIdade(idade){
//     if (idade >= 18 ){
//     console.log('Você pode dirigir')
//     } if (idade <= 17){
//     console.log('Você não pode dirigir')
//     }
// }
// verificarIdade(idade)

// Exerncício 2
const turno = prompt('Qual seu turno? Responda com M para matutin, V para vespertino ou N para noturno!')
    if (turno === 'm'){
        console.log('Bom dia!');
    } else if (turno === 'v'){
        console.log('Boa tarde!');
    } else if (turno === 'n'){
        console.log('Boa noite!');
    }

// // Exercício 3
// const turno = prompt('Qual seu turno?')
// const verificaTurno = (turno)=> {
//     switch(turno){
//         case 'm':
//             console.log('Bom dia');
//             break;
//         case 'v':
//             console.log('Boa tarde')
//             break;
//         case 'n':
//             console.log('Boa noite')
//             break;
//         default:
//             console.log('Turno não encontrado!');
//             break;
//     }
// }
// verificaTurno(turno);