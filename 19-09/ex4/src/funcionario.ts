//Crie uma classe funcionário e apresente os atributos e 
//métodos referentes esta classe, em seguida crie um objeto funcionário, 
//defina as instâncias deste objeto e apresente as informações deste objeto no console.



export class funcionario {
    nome: string;
    idade: number;
    cpf: string;
    cargo: string;  

    constructor(
        nome: string,
        idade: number,
        cpf: string,
        cargo: string,
    ){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
        this.cargo = cargo
    } 

    Nome(){
        console.log(` O nome do funcionario È: ${this.nome} `);
    }
    Idade(){
        console.log(` idade: ${this.idade} `);
    }
    Cpf(){
        console.log(` O Cpf È: ${this.cpf} `);
    }
    Cargo(){
        console.log(` O cargo È: ${this.cargo} `);
    }

 }
