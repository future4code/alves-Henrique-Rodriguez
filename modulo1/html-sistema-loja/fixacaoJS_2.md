```function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let maca = 0
  if(quantidade<12){
    maca = 1.30
    return quantidade*maca
  } else {
    maca = 1
    return quantidade*maca
  }
}```