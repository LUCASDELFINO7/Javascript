//Faça um sistema que leia um número inteiro e mostre uma mensagem indicando se este
//número é par ou ímpar, e se é positivo ou negativo.

let numero
    numero = prompt("Digite um número: ");
    if(numero < 0 && numero % 2!=0){
    alert("O número é negativo e é ímpar");
    }
    if(numero > 0 && numero % 2==0){
        alert("O número é positivo e é par");
    }if(numero < 0 && numero % 2==0){
        alert("O número é negativo e é par");
    }
    if(numero > 0 && numero % 2!=0){
        alert("O número é positivo e é ímpar");
    }