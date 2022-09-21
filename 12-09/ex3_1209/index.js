//Desenvolva um sistema em que:
//Leia 4 (quatro) números;
//Calcule o quadrado de cada um;
//Se o valor resultante do quadrado do terceiro for &gt;= 1000, imprima-o e finalize;
//Caso contrário, imprima os valores lidos e seus respectivos quadrados.
let a, b, c , d, a2, b2, c2, d2
a = prompt("Informe seu primeiro numero")
b = prompt("Informe seu segundo numero")
c = prompt("Informe seu terceiro numero")
d = prompt("Informe seu quarto numero")
a2 = a * a
b2 = b * b
c2 = c * c
d2 = d * d
if(c >= 1000){
    alert("O resultado ddo quadrado do terceiro numero é " + c)
}else{
    alert("O quadrado de " + a + " é " + a2 + "\nO quadrado de " + b + " é " + b2 + "\nO quadrado de " + c + " é " + c2 + "\nO quadrado de " + d + " é " + d2)
}