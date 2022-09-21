import { Animal } from "./animal";

export class preguica extends Animal{

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
        console.log("Estou latindo uma preguiça")
    }

    subiremarvore(): void {
        console.log("Estou correndo igual uma preguiça")
    
    }
}