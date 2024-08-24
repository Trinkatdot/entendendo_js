/*faça um algoritimo que pergunte o nome do usuario, o quanto ganha por hora e 
numero de horas trabalhadas no mes, calcule o resultado e mostre o nome e o 
total de renda recebida no mês.*/
let nome = prompt("informe seu nome");
let valor_por_hora = parseFloat(prompt("informe quanto ganha por hora"));
let hora_trabalhadas = parseFloat(prompt("infome quantas horas"));
let total_recebido = 0;
mensagem = "";

total_recebido = (valor_por_hora * hora_trabalhadas);

mensagem = (`${nome} tem a renda mensal de R$${total_recebido}`)

alert(mensagem)













//mensagem = `o ${nome} tem a reda de ${total_recebido}`