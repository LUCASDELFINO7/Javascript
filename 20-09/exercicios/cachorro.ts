import { Animal } from "./animal";

export class cachorro extends Animal{

    raca: string;
    cor: string;

    constructor(
        raca: string,
        cor: string,
       idade: number,
       nome: string
    ){
        super(idade,nome)
        this.raca = raca
        this.cor = cor
    }

    emitirSom(): void {
        console.log("Estou latindo um cachorro")
    }

    correr(): void {
        console.log("Estou correndo igual um cachorro")
    
    }
}