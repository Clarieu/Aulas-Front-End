function mostrarNumeros() {
    var inputNumero = document.getElementById('numero');
    var numero = parseInt(inputNumero.value);
    
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
  
    var numerosPares = [];
    var numerosImpares = [];
  
    for (var i = 1; i <= numero; i++) {
      if (i % 2 === 0) {
        numerosPares.push(i);
      } else {
        numerosImpares.push(i);
      }
    }
  
    resultado.innerHTML += '<p class="numeros-pares">Números Pares: ' + numerosPares.join(', ') + '</p>';
    resultado.innerHTML += '<p class="numeros-impares">Números Ímpares: ' + numerosImpares.join(', ') + '</p>';
  }
  