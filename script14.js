/*Desenvolva um gerador de tabuada, capaz de gerar através de qualquer número inteiro, 
solicitando ao usuário o número e mostrando na tela conforme o exemplo abaixo:
Tabuada de 5:
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
*/
let numero = parseInt(prompt("informe um numero:"));
let coninuar = "s";
do {
    let numero = parseInt(prompt("informe um numero:"));
    let tabuada = "";
    for (let index = 1; index < 10; index++) {
        tabuada += `${numero} x ${index} = ${numero} * ${index} \n`
    }
    alert(tabuada);
    coninuar = prompt("voce deseja outra tabuada? S=sim e N=não")
} while (coninuar == "s");