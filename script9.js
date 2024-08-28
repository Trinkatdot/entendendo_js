/* Faça um algoritmo que pergunte em que turno o usuário estuda. 
Peça para digitar M- matutino, V- Vespertino ou N- Noturno. 
Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso digitado.
*/

let texto_menu = `Em qual turno voce estuda?:
                M- matutino
                v- vespertino
                N - noturno`;
let turno_informado = (prompt(texto_menu));
let turno_atual;

switch (turno_informado) {
    case "m":
        turno_atual = "olá Bom dia";
        break;
    case "v":
        turno_atual = "olá Boa Tarde";
        break;
    case "n":
        turno_atual = "olá boa noite";
        break;
    default:
         turno_atual = "turno invalido";
        break;
}
alert(`${turno_atual}`);
