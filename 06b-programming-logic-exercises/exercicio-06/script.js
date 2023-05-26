function mostrarTabuada() {
    var numeroInput = document.getElementById("numero");
    var resultado = document.getElementById("resultado");
  
    // Limpar o resultado anterior, se houver
    resultado.innerHTML = "";
  
    // Obter o número digitado pelo usuário
    var numero = parseInt(numeroInput.value);
  
    // Verificar se o número é válido
    if (isNaN(numero)) {
      resultado.textContent = "Digite um número válido.";
      return;
    }
  
    // Gerar e exibir a tabuada
    for (var i = 1; i <= 10; i++) {
      var multiplicacao = numero * i;
      resultado.innerHTML += "<p>" + numero + " x " + i + " = " + multiplicacao + "</p>";
    }
  }
  