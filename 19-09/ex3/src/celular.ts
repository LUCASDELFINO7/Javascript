//3-Crie uma classe produto eletrônico e apresente os atributos e 
//métodos referentes a esta classe, em seguida crie um objeto 
//produto eletrônico, defina as instâncias deste 
//objeto e apresente as informações deste objeto no console.

export class celular {
    marca: string;
    preço: string;
    cor: string;
    modelo: string;  

    constructor(
        marca: string,
        preço: string,
        cor: string,
        modelo: string,
    ){
        this.marca = marca
        this.preço = preço
        this.cor = cor
        this.modelo= modelo
    } 

    Marca(){
        console.log(` A marca do celular é: ${this.marca} `);
    }
    Preço(){
        console.log(` preço do celular é: ${this.preço} `);
    }
    Cor(){
        console.log(` A Cor do celular é: ${this.cor} `);
    }
    Modelo(){
        console.log(` O telefone È: ${this.modelo} `);
    }

 }