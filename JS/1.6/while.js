var repete = 1;

while (repete <= 3) {
    alert("Repetições: " + repete);
    repete = repete + 1;
}

/* -------Exemplo 2------ */

var inicio = 2;
var fim = 1000;
var pares = "Números pares ";

while(inicio <= fim) {
    pares = pares + inicio + ", ";

    inicio = inicio + 2;

    alert(pares);
}