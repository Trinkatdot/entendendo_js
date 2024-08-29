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
let operação_informada = (prompt(texto_menu));
//let mumero1 = parseFloat(prompt("informe o primeiro n°"));
//let mumero2 = parseFloat(prompt("informe o segundo n°"));
let numero1, numero2, total = 0;
let resultado = 0;

switch (operação_informada) {
    case 1:
        numero1 = parseFloat(prompt("informe o primeiro n°"));
        numero2 = parseFloat(prompt("informe o segundo n°"));
        alert = (`${numero1} + ${numero2} = ${numero1 + numero2}`);
        break;
    case 1:
        numero1 = parseFloat(prompt("informe o primeiro n°"));
        numero2 = parseFloat(prompt("informe o segundo n°"));
        alert = (`${numero1} - ${numero2} = ${numero1 - numero2}`);
        break;
    case 1:
        numero1 = parseFloat(prompt("informe o primeiro n°"));
        numero2 = parseFloat(prompt("informe o segundo n°"));
        alert = (`${numero1} x ${numero2} = ${numero1 * numero2}`);
        break;
    case 1:
        numero1 = parseFloat(prompt("informe o primeiro n°"));
        numero2 = parseFloat(prompt("informe o segundo n°"));
        if (numero2 === 0) {
            alert("Operação Invalida!");
        } else {
            resultado = numero1 / numero2;
            alert(`${numero1} / ${numero2} = ${total.toFixed(2)}`);
        }
        break;
    case 1:
        numero1 = parseFloat(prompt("informe o primeiro n°"));
        numero2 = parseFloat(prompt("informe o segundo n°"));
        alert = (`${numero1} exp ${numero2} = ${numero1 ** numero2}`);
        break;
    case 1:
        numero1 = parseFloat(prompt("informe o primeiro n°"));
        numero2 = parseFloat(prompt("informe o segundo n°"));
        let operacao = ""
        if (numero2 == 2) {
            operacao = "quadrada";
        } else if (numero2 == 3) {
            operacao = "cúbica";
        } else {
            operacao = numero2.toString();
        }
        alert(`A raiz ${operacao} de ${numero1} = ${numero1 ** (1 / numero2)}`);
        break;
    default:
        alert("Operação Inválida");
        break;
}

alert(mensagem);