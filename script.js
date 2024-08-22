//Faça um algoritmo onde o usuário informe o nome e 4 notas de dois alunos e mostre as médias desses 2 alunos.
var nome1, nome2 = "";
var nota1, nota2, nota3, nota4, nota5, nota6, nota7, nota8 = 0;
nome1 = prompt("Digite o nome do aluno 1:");
nota1 = parseFloat(prompt("Digite a nota 1 do aluno 1"));
nota2 = parseFloat(prompt("Digite a nota 2 do aluno 1"));
nota3 = parseFloat(prompt("Digite a nota 3 do aluno 1"));
nota4 = parseFloat(prompt("Digite a nota 4 do aluno 1"));


nome2 = prompt("Digite o nome do aluno 2:");
nota5 = parseFloat(prompt("Digite a nota 1 do aluno 2"));
nota6 = parseFloat(prompt("Digite a nota 2 do aluno 2"));
nota7 = parseFloat(prompt("Digite a nota 3 do aluno 2"));
nota8 = parseFloat(prompt("Digite a nota 4 do aluno 2"));

var media1, media2 = 0;
media1 = (nota1 + nota2 + nota3 + nota4) /4;
media2 = (nota5 + nota6 + nota7 + nota8) /4;

var mensagem = `
${nome1}, sua media é ${media1}, parabéns!
${nome2}, sua media é ${media2}, parabéns!`;

alert(mensagem);
