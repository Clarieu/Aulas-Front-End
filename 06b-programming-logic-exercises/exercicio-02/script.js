function contar() {
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.style.visibility = 'visible';
  
    var contador = 10;
    var intervalo = setInterval(function() {
      resultadoElement.innerHTML = contador;
      contador--;
  
      if (contador < 1) {
        clearInterval(intervalo);
      }
    }, 1000);
  }
  