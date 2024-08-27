/*Faça um algoritmo que o usuário escreva o nome e o preço de três produtos e assim que terminar de escrever o ultimo 
produto, mostre o nome e o valor do produto mais barato*/
let nome_produto1 = prompt("informe o nome do 1° produto ");
let valor_produto1 = parseFloat(prompt("informe o valor do 1° produto "));
///////////////////////////////////////////////////////////////////////////
let nome_produto2 = prompt("informe o nome do 2° produto ");
let valor_produto2 = parseFloat(prompt("informe o valor do 2° produto "));
///////////////////////////////////////////////////////////////////////////
let nome_produto3 = prompt("informe o nome do 3° produto ");
let valor_produto3 = parseFloat(prompt("informe o valor do 3° produto "));
///////////////////////////////////////////////////////////////////////////
let mensagem = ``;
let menor_produto = 0;
let menor_valor = 0; 

if ((valor_produto1 < valor_produto22) && (valor_produto1 < valor_produto3)){
    menor_produto = nome_produto1;
    menor_valor = valor_produto1;
}
else if ((valor_produto2 < valor_produto1) && (valor_produto2 < valor_produto3)){
    menor_produto = nome_produto2;
    menor_valor = valor_produto2;
}
else if ((valor_produto3 < valor_produto1) && (valor_produto3 < valor_produto2)){
    menor_produto = nome_produto3;
    menor_valor = valor_produto3;
}
mensagem = `o produto ${menor_produto} é o mais barado e custa ${menor_valor}`

alert(mensagem);