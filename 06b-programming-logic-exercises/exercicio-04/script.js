function verificarPrimo(numero) {
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero > 1;
  }
  
  function mostrarNumerosPrimos() {
    var ul = document.getElementById("resultado");
  
    for (var i = 0; i <= 100; i++) {
      if (verificarPrimo(i)) {
        var li = document.createElement("li");
        li.textContent = i;
        ul.appendChild(li);
      }
    }
  }
  
  mostrarNumerosPrimos();
  