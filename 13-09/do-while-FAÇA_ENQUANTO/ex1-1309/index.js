//1- Faça um programa que mostre uma contagem na tela de 233 a 456, só que
//contando de 3 em 3 quando estiver entre 300 e 400 e de 5 em 5 quando não estiver.

let c = 233  

do{
    if  (c >= 300 && c <= 400){
        c += 3

    }else {
        c += 5
    }
    alert(c);

} while(c <= 456)
	   
