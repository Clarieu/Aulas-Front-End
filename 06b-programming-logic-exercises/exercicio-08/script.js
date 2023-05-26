function calcularMedia() {
    var inputIdades = document.getElementsByClassName('idade');
    var totalIdades = 0;
  
    for (var i = 0; i < inputIdades.length; i++) {
      var idade = parseInt(inputIdades[i].value);
      totalIdades += idade;
    }
  
    var media = totalIdades / inputIdades.length;
  
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = 'A média das idades é: ' + media.toFixed(2);
  }
  