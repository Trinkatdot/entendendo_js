/*
Informe se um aluno está aprovado, de recuperação ou reprovado
seguindo os seguintes critérios:
informar 3 notas.
media > 6: aprovado.
media < 4: reprovado.

Obs use o prompt e exiba os resultado em alert.
*/
let = nome1 = "";
let = nota1, nota2, nota3 = 0;

nome1 = prompt("Digite o nome");
nota1 = parseFloat(prompt("diite a 1° nota"));
nota2 = parseFloat(prompt("diite a 2° nota"));
nota3 = parseFloat(prompt("diite a 3° nota"));

let = media1 = 0;
 media1 = (nota1 + nota2 + nota3) /3;

let = media = media1
if (media > 6) { 
    prompt("aluno aprovado")
}
