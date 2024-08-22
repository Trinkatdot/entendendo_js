/*faça um algoritimo para a leitura de duas notas 
parciais de um aluno. o algoritimo deve calcular 
a média alcançada:
-media >=7: aprovado
-media <5: reprovado
-media entre 5 e 7: recuperação
*/

//inicio
let nome1 = "";
let nota1 = 0, nota2 = 0;
let mensagem = "";

/*verificar o porque esta errado
let = nota1, nota2, nota3 = 0
*/

//entrada de dados
nome1 = prompt("Digite o nome");
nota1 = parseFloat(prompt("digite a 1° nota"));
nota2 = parseFloat(prompt("digite a 2° nota"));


//calculo da media
let media = (nota1 + nota2) / 2;

//logica do alerta 
if (media >= 7) {
    mensagem = ", esta Aprovado";
}
else if (media >= 5) {
    mensagem = ", esta de Recuperação";
}
else {
    mensagem = ", esta Reprovado";
}
alert(nome1 + mensagem);



