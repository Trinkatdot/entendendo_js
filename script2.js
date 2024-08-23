//entrada de dados
let dia_semana = prompt("informe o dia da semana que deseja");
let mensagem = "";


if(dia_semana == 1) {
    mensagem = "Domingo"
}
else if (dia_semana == 2) {
    mensagem = "segunda-feira"
}
else if (dia_semana == 3) {
    mensagem = "terça-feira"
}
else if (dia_semana == 4) {
    mensagem = "quarta-feira"
}
else if (dia_semana == 5) {
    mensagem = "quinta-feira"
}
else if (dia_semana == 6) {
    mensagem = "sexta-feira"
}
else if (dia_semana == 7) {
    mensagem = "sabado"
}
else {
    mensagem = "dia indefinido"
}
alert(mensagem)
