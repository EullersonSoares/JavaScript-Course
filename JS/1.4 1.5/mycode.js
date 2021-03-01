var nota1 = 4;
var nota2 = 7;
var nota3 = 10;
var media = (nota1+nota2+nota3)/3;

if(media >= 7) {
    alert("Congratulations, you've been approved. You grade was " + media);
} else {
    alert("You were not approved. You grade was " + media);
}

var sair = confirm("Would you like to leave this page for google?");

if(sair == 1) {
    window.location = "https://www.google.com.br/";
    
}