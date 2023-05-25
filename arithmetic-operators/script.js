function performOperations() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    var sum = parseFloat(num1) + parseFloat(num2);
    var subtraction = parseFloat(num1) - parseFloat(num2);
    var multiplication = parseFloat(num1) * parseFloat(num2);
    var division = parseFloat(num1) / parseFloat(num2);

    var resultElement = document.getElementById("result");
    resultElement.textContent = "Soma: " + sum + ", Subtração: " + subtraction + ", Multiplicação: " + multiplication + ", Divisão: " + division;
}
