/*Faça um algoritmo que faz uma conversão de temperaturas onde . 
1. Converter Celsius para Fahrenheit. formula: (celsius * 9/5) + 32
2. Converter Fahrenheit para Celsius. formula: (fahrenheit - 32) * 5/9
*/
let texto_menu = `Qual operação você deseja?:
                1 - celsius
                2 - fahrenheit`;
let celsius = 0, fahrenheit = 0;
let conversão = prompt(texto_menu);

switch (conversão) {
    case "1":
        celsius = parseFloat(
            prompt("informe quantos garus celsius deseja converter:"));
        fahrenheit = (celsius * 9 / 5) + 32;
        alert(`${celsius}ºC representa ${fahrenheit.toFixed(2)}ºF!`);
        break;
    case "2":
        fahrenheit = parseFloat(
            prompt(`informe quantos garus fahrenheit deseja converter:`));
        celsius = (fahrenheit - 32) * 5 / 9;
        alert(`${fahrenheit}ºF representa ${celsius.toFixed(2)}ºC!`);
        break;
    default:
        alert("Opção Inválida!");
        break;
}


