import { AbstractEntity } from "./AbstractEntity"

export class Condutor extends AbstractEntity {

    nome!: string
    cpf!: string
    telefone!: string
    horasDesconto!: number
    minutosDEsconto!: number
    horasPagas!: number
    minutosPagos!: number

}