




let   e=0, h=0,s=0,es=0
h = prompt("Informe as horas que você trabalhou esse mês")
if(h <= 50){
    s = h * 10
    alert("O valor a ser pago é " + s)
}else{
    e = h - 50;
    es = e * 20;
    s = 500+ es;
alert("O valor total é de " + s + "\nO valor exedente foi de " + es)
}