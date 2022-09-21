//2- Desenvolver um sistema que efetue a soma de todos os números ímpares que são
//múltiplos de três e que se encontram no conjunto dos números de 1 até 500.


let n , resultado = 0
    for(x = 1 ; x<= 500 ; x ++ )
    if(x % 3 == 0 && x % 2 == 1) {
        resultado = resultado  + x
    }alert("soma de todos os números ímpares que é multiplo de 3 de 1 a 500 É: " + resultado)

    
    