const btnSubt = document.querySelector(".subt");
const btnSom = document.querySelector(".soma");

btnSubt.addEventListener ('click', () => {
   
   const exibir = document.querySelector(".result");
   exibir.innerHTML = `Resultado = ${subtrair()}`
});

btnSom.addEventListener ('click', () => {

   const exibir = document.querySelector(".result");
   exibir.innerHTML = `Resultado = ${somar()}`
});

function subtrair() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    let result = num1 - num2;

    return result;
}

function somar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    let result = num1 + num2;

    return result;
}
