// Exemplo de código em JavaScript para criar um quadrado de asteriscos com base no tamanho do lado fornecido

function criarQuadrado(tamanho) {
  let quadrado = "";

  for (let i = 0; i < tamanho; i++) {
    for (let j = 0; j < tamanho; j++) {
      quadrado += "* ";
    }
    quadrado += "\n";
  }

  return quadrado;
}

const tamanhoLado = parseInt(prompt("Digite o tamanho do lado do quadrado:"));

const resultado = criarQuadrado(tamanhoLado);
console.log(resultado);
