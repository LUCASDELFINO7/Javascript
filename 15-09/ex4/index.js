// 4 - Crie uma um programa de saúde, nesse programa 
//desenvolva uma função que calcula o imc de pacientes,
//a função deverá receber os  seguintes parâmetros, peso e altura.

let PESO, ALTURA, RESULTADO 
PESO = prompt ("Digite SEU PESO:  ");
ALTURA = prompt ("Digite SUA ALTURA: ");
    function X(PESO, ALTURA) {
    RESULTADO = PESO / (ALTURA*ALTURA);
   return alert("SEU IMC É: " + RESULTADO.toFixed(2));
}

X(PESO,ALTURA);  