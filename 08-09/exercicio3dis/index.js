//3 - Faça um algoritmo que efetua a apresentação do valor da conversão em real (R$) 
//de um valor lido em dólar (US$). o algoritmo deverá solicitar o 
//valor da cotação do dólar

let r, d , cotacao
d = prompt ("digite seu valor em dólar: ")
cotacao = prompt ("qual a cotação de hoje? ")
r =(d * cotacao)
alert ("seu valor em real é: " + r)