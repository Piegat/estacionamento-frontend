import { AbstractEntity } from "./AbstractEntity";
import { Condutor } from "./Codutor";
import { Veiculo } from "./Veiculo";

export class Movimentacao extends AbstractEntity{

    veiculo!: Veiculo
    
    condutor!: Condutor
    
    entrada!: Date
    
    saida!: Date
    
    horasTempo!: number
    
    minutosTempo!: number
    
    horasDesconto!: number
    
    minutosDesconto!: number
    
    horasMulta!: number
    
    minutosMulta!: number
    
    valorMulta!: number
    
    valorMinutoMulta!: number

    valorDesconto!: number
    
    valorTotal!: number
    
    valorHora!: number
    

}