//1- Elaborar um programa que efetue a leitura sucessiva de valores numéricos e
//apresente no final o total do somatório, a média e o total de valores lidos. O programa
//deve fazer as leituras dos valores enquanto o usuário estiver fornecendo valores
//positivos. Ou seja, o programa deve parar quando o usuário fornecer um valor
//negativo.

let num = 0.0, soma = 0.0, media, total = 0.0;

while(num >=0){
    num = prompt("Digite o número: ");

    if(num>=0){
        soma = parseInt(soma) + parseInt(num)
        total ++
    }
}
    media = soma / total;

    alert("soma de todos o numeros digitados: " + soma);
    alert("media de todos o numeros digitados: " + media);
    alert("total de numeros digitados: " + total);