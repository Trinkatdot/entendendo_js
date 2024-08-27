/*Faça um algoritmo em que valida se pode entrar na montanha russa ou não, os critérios são:
Ter 1,70 de altura.
2. Ter mínimo de 1,60 de altura e ser maior de 18 anos
*/
let nome = prompt("informe seu nome");
let idade = parseInt(prompt("informe sua idade:"));
let altura = parseFloat(prompt("informe sua altura.(Ex.1.70):"));

if (altura >=1.70) {
    mensagem = `${nome} voce pode entrar`
}
else if ((altura >=1.60) && (idade >=18)) {
    mensagem = `${nome} voce esta altorizado`
}
else {
    mensagem = `${nome} voce não esta autorizado`
}
alert(mensagem);