import { AbstractEntity } from "./AbstractEntity"

export class Configuracao extends AbstractEntity{

    valorHora!: number
    valorMinutoMulta!: number
    inicioExpediente!: Date
    fimExpediente!: Date
    horasParaDesconto!: number
    minutosParaDesconto!: number
    horasDeDesconto!: number
    minutosDeDesconto!: number
    gerarDesconto!: boolean
    vagasMoto!: number
    vagasCarro!: number
    vagasVan!: number

}