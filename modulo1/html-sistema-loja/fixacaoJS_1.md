```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
  let salario = 2000
  let comicao = 100 * qtdeCarrosVendidos
  let porcentagem = ((valorTotalVendas * 5) / 100)
  porcentagem += comicao
  salario += porcentagem
  return salario
}```