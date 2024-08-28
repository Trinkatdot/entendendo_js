/*Faça um algoritmo para montar uma calculadora simples, onde o usuário vai optar em escolher conforme o menu 
adiante. 
Observação: no caso de divisão, o denominador não pode ser zero, invalidando a operação.
1. Soma.
2. Subtração.
3. Multiplicação.
4. Divisão
5. Potenciação
6. Radiciação
*/
let texto_menu = `Qual operação você deseja?:
                1 - soma
                2 - subtração
                3 - multiplicação
                4 - divisão
                5 - potenciação
                6 - radiciação`;
let operação_informada = parseInt(prompt(texto_menu));
let mumero1 = parseFloat(prompt("informe o primeiro n°"));
let mumero2 = parseFloat(prompt("informe o segundo n°"));
let numero1, numero2 = 0;
let resultado = 0;
let mensagem = ``;

switch (operação_informada) {
    case 1:
        resultado = numero1 + numero2;
        mensagem = (`o total da soma é ${resultado}`);
        break;
}

alert(mensagem);