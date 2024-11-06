function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    console.log(peso)
    console.log(altura)

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById("resultado").innerText = "Insira valores válidos.";
        return;
    }

    const imc = peso / (altura * altura);
    document.getElementById("resultado").innerText = "Seu IMC: " + imc.toFixed(2);

    

}
document.querySelector("#calcularBtn").addEventListener("click", calcularIMC);

console.log('test')