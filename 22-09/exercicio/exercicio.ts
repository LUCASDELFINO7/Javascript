//Crie uma um programa para trabalhar com estoque de uma loja, o programa 
//deverá trabalhar com Collection do tipo Array de JavaScript para manipular os dados desse estoque,
//o programa deverá atender as seguintes funcionalidades:

//Armazenar dados da Array
//Remover dados da Array;
//Atualizar dados da Array.
//Apresentar todos os dados da Array.



let estoque: string[] = []

estoque.push('livro', 'caderno', 'caneta', 'borraçha');

console.log(estoque);

estoque.splice(1,1)
console.log(estoque);