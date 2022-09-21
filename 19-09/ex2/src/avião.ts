//Crie uma classe avião e apresente os atributos e métodos referentes
// a esta classe, em seguida crie um objeto avião, defina as instâncias
// deste objeto e apresente as informações deste objeto no console.

export class avião {
    nome: string;
    idade: number;
    destino: string;
    horarioSaida: string;  
    horarioChegada: string;  

    constructor(
        nome: string,
        idade: number,
        destino: string,
        horarioSaida: string,
        horarioChegada: string,
    ){
        this.nome = nome
        this.idade = idade
        this.destino = destino
        this.horarioSaida = horarioSaida
        this.horarioChegada = horarioChegada
    } 


    Nome(){
        console.log(` O nome da pessoa È: ${this.nome} `);
    }
    Idade(){
        console.log(` idade: ${this.idade} `);
    }
    Destino(){
        console.log(` O Destino é: ${this.destino} `);
    }
    Saida(){
        console.log(` O horario de saida È: ${this.horarioSaida} `);
    }
    Chegada(){
        console.log(` O horario de chegada: ${this.horarioChegada} `);
    }

}