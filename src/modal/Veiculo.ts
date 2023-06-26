import { AbstractEntity } from "./AbstractEntity";
import { Cor } from "./Cor";
import { Modelo } from "./Modelo";
import { Tipo } from "./Tipo";

export class Veiculo extends AbstractEntity{

    modelo!: Modelo
    placa!: string
    cor!: Cor
    tipoVeiculos!: Tipo
    ano!: number

}