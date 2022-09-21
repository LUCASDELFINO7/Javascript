//1- A prefeitura de uma cidade fez uma pesquisa entre 20 de seus habitantes,
//coletando dados sobre o salário e número de filhos. A prefeitura deseja saber:  
//  a) média do salário da população;
//  b) média do número de filhos;
//  c) maior salário;
//  d) percentual de pessoas com salário até R$100,00.

let mediaS, mediaF, maiorS = 0, S100 = 0, sal = 0, y, z, filhos = 0
for(x = 1; x <= 4; x++){
    y = prompt("Informe quanto você ganha")
    z = prompt("Informe quantos filhos você tem")
    sal = sal + parseFloat(y);
    if(maiorS < y){
        maiorS = parseFloat(y);
    }if(y > 100){
        S100 += 1;
      //S100 = S100 * 100 / 4
    }
    mediaS = sal / 20;
    filhos = filhos + parseInt(z);
    mediaF = filhos / 20;
    //

}alert("A média salarial da população é de " + mediaS + " Reais." + "\nA média de filhos da população é de " + mediaF + " filhos" + "\nO maior salario é de " + maiorS + " Reais." + "\nO percentual de pessoas com até R$100 é de " + S100 + " pessoas.")