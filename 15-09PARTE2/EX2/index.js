//2 - Faça um programa com uma função chamada somaImposto.
// A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto 
//sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. 
//A função “altera” o valor de custo para incluir o imposto sobre vendas.


let taxaImposto, custo, vendaFinal

custo = prompt ("Digite o custo do produto: ")
taxaImposto = prompt ("Digite o imposto sobre a venda em porcentagem: ")

function somalImposto (custo, taxaImposto) {
    vendaFinal = parseFloat(custo) + parseFloat((taxaImposto/100) * custo)
    return alert (vendaFinal)
}
somalImposto (custo, taxaImposto)