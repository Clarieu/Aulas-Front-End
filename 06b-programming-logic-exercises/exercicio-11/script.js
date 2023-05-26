function criarTriangulo(altura) {
    let triangulo = "";
  
    for (let i = 1; i <= altura; i++) {
      for (let j = 1; j <= i; j++) {
        triangulo += "* ";
      }
      triangulo += "<br>";
    }
  
    return triangulo;
  }
  
  const alturaTriangulo = parseInt(prompt("Digite a altura do triângulo:"));
  
  const resultadoTriangulo = criarTriangulo(alturaTriangulo);
  document.write(resultadoTriangulo);
  