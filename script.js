var vagasjs = "";
var telasjs = "";
var sensor = 15.28;
var totultra = "";
var valorultra = "";
var arduino = 101.58;
var lm35 = 15.35;
var monitor = 600;
var mo = 800;

function calcular() {
    vagasjs = document.getElementById('vagas').value;
    telasjs = document.getElementById('telas').value;
    totultra = vagasjs + 4;
    valorultra = totultra * sensor;
    valortela = telasjs * monitor;
    totmaterial = valorultra + arduino + lm35 + valortela;
    total = totmaterial + mo * vagasjs;
    totalRS = `R\$${total}`;
    document.getElementById('valorcalculado').innerHTML = totalRS;
}
