//faça um algoritimo que leia tres numeros e mostre o maior deles. 
let numero1 = parseInt(prompt("digite um o 1° numero:"));
let numero2 = parseInt(prompt("digite um o 2° numero:"));
let numero3 = parseInt(prompt("digite um o 3° numero:"));
let mensagem = "";

if ((numero1 > numero2) && (numero1 > numero3)) {
    mensagem = "o 1° numero é o maior"
}
else if ((numero2 > numero1) && (numero2 > numero3)) {
    mensagem = "o 2° numero é o maior"
}
else if ((numero3 > numero1) && (numero3 > numero2)){
    mensagem = "o 3° numero é o maior"
}
alert(mensagem);
