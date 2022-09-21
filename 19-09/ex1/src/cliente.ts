//1-Crie uma classe cliente e apresente os atributos e métodos referentes a 
//esta classe, em seguida crie um objeto cliente, 
//defina as instâncias deste objeto e apresente as informações 
//deste objeto no console.


export class cliente {
    nome: string;
    idade: number;
    cpf: string;
    telefone: string;  

    constructor(
        nome: string,
        idade: number,
        cpf: string,
        telefone: string,
    ){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
        this.telefone = telefone
    } 

    Nome(){
        console.log(` O nome da pessoa È: ${this.nome} `);
    }
    Idade(){
        console.log(` idade: ${this.idade} `);
    }
    Cpf(){
        console.log(` O Cpf È: ${this.cpf} `);
    }
    Telefone(){
        console.log(` O telefone È: ${this.telefone} `);
    }

 }

