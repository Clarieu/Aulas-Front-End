document.addEventListener("DOMContentLoaded", function() {
    mostrarTabuadas();
  });
  
  function mostrarTabuadas() {
    var resultado = document.getElementById("resultado");
  
    for (var i = 1; i <= 10; i++) {
      var tabuadaContainer = document.createElement("div");
      tabuadaContainer.classList.add("tabuada");
  
      var tabuadaTitulo = document.createElement("h2");
      tabuadaTitulo.textContent = "Tabuada do " + i;
  
      tabuadaContainer.appendChild(tabuadaTitulo);
  
      for (var j = 1; j <= 10; j++) {
        var multiplicacao = i * j;
  
        var linha = document.createElement("p");
        linha.textContent = i + " x " + j + " = " + multiplicacao;
  
        tabuadaContainer.appendChild(linha);
      }
  
      resultado.appendChild(tabuadaContainer);
    }
  }
  