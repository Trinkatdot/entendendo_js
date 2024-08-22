/*
Informe se um aluno está aprovado, de recuperação ou reprovado
seguindo os seguintes critérios:
informar 3 notas.
media > 6: aprovado.
media < 4: reprovado.

Obs use o prompt e exiba os resultado em alert.
*/

//inicio
let = nome1 = "";
let nota1 = 0, nota2 = 0, nota3 = 0;

/*verificar o porque esta errado
let = nota1, nota2, nota3 = 0
*/

//entrada de dados
nome1 = prompt("Digite o nome");
nota1 = parseFloat(prompt("digite a 1° nota"));
nota2 = parseFloat(prompt("digite a 2° nota"));
nota3 = parseFloat(prompt("digite a 3° nota"));

//calculo da media
let media = (nota1 + nota2 + nota3) / 3;

//logica do alerta 
if (media > 6) {
    alert(nome1 + ", esta aprovado");
} else if (media < 4) {
    alert(nome1 + ", esta reprovado");
}