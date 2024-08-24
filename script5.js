//faça um algoritimo que leia tres numeros que mostre o maior e o menor deles 

let numero1 = parseInt(prompt("insira o 1° numero:"))
let numero2 = parseInt(prompt("insira o 2° numero:"))
let numero3 = parseInt(prompt("insira o 3° numero:"))
let mensagem = "";
let = maior = 0, menor = 0;

//verifica qual é maior
if ((numero1 >= numero2) && (numero1 >= numero3)) {
    maior = numero1
}
else if ((numero2 >= numero1) && (numero2 >= numero3)) {
    maior = numero2
}
else if ((numero3 >= numero1) && (numero3 >= numero2)) {
    maior = numero3
}
if ((numero1 <= numero2) && (numero1 <= numero3)) {
    menor = numero1
}
else if ((numero2 <= numero1) && (numero2 <= numero3)) {
    menor = numero2
}
else if ((numero3 <= numero1) && (numero3 <= numero2)) {
    menor = numero3
}
alert (`o numero ${maior} é o maior 
    e o ${menor} é o menor!`)    