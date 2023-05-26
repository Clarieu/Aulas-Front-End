function contar() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultado = "";
  
    for (var i = 1; i <= numero; i++) {
      resultado += i + " ";
    }
  
    document.getElementById("resultado").textContent = resultado;
  }
  