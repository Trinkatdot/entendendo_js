//faça um algoritimo que leia tres numeros que mostre o maior e o menor deles ,

let numero1 = parseInt(prompt("insira o 1° numero:"))
let numero2 = parseInt(prompt("insira o 2° numero:"))
let numero3 = parseInt(prompt("insira o 3° numero:"))
let mensagem = "";
let = maior, menor;

//verifica qual é maior
if (numero1 > numero2 && numero3) {
    mensagem = numero1 + "é o maior"
}
else if (numero2 > numero1 && numero3) {
   mensagem = numero2 +"é o maior"
}
else {
    mensagem = numero3 +"é o maior"
}

if (numero1 < numero2 && numero3) {
    mensagem = numero1 + "é o menor"
}
else if (numero2 < numero1 && numero3) {
    mensagem = numero2 + "é o menor"
}
else {
    mensagem = numero3 + "é o menor"
}

alert(mensagem);