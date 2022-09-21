//1 - Criar uma função para calcular a 
//porcentagem de um número


let n1, n2, resultado 
n1 = prompt ("Digite um numero:  ")
n2 = prompt ("Digite a porcentagem que deseja de: " +n1)
    function x (n1, n2) {
    resultado = parseInt(n1 / 100) * parseInt (n2)
   return alert(resultado);
}

x(n1, n2);