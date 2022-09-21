//1 - Faça um Algoritmo que receba o preço de custo de um produto e
 //mostre o valor da venda. sabe-se que o preço de custo receberá um acréscimo 
 //de acordo com um percentual informado pelo usuário 


let custo, venda, acrescimo

custo = prompt ("digite o valor do produto: ");
acrescimo =prompt("digite o acrescimo do produto: ");
venda = parseFloat (custo) + custo * acrescimo / 100;
alert("o valor da venda é? " + venda);