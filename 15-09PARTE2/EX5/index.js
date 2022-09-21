//5 -  Crie uma função que dado dois valores (passados como parâmetros) mostre no 
//console a soma, subtração, multiplicação e divisão desses valores.

let num1, num2, soma, sub, mult, divi;
num1 = prompt("Digite o 1° numero");
num2 = prompt("Digite o 2° numero");
 function x (num1, num2){
    soma = parseInt(num1) + parseInt(num2);
    sub = parseInt(num1) - parseInt(num2);
    mult = parseInt(num1) * parseInt(num2);
    divi = parseInt(num1) / parseInt(num2);

    return alert("A soma é: "+ soma + "\nA Subtração é: " + sub + "\nA multiplicação é: " + mult + "\nA divisão é: " + divi);
}
x (num1,num2);