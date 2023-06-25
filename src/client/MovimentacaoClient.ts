import { Movimentacao } from "@/modal/Movimentacao"
import axios, { AxiosInstance } from "axios"

export class MovimentacaoClient{
    private axiosClient: AxiosInstance
    
    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/movimentacao',
            headers: { 'Content-type': 'application/json' }
        })
    }

    public async findById(id: number): Promise<Movimentacao> {
        try {
            return (await this.axiosClient.get<Movimentacao>(`?id=1${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }


    public async finByAll(): Promise<Movimentacao[]> {
        try {
            return (await this.axiosClient.get<Movimentacao[]>(`/lista`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async findByAbertas(): Promise<Movimentacao[]> {
        try {
            return (await this.axiosClient.get<Movimentacao[]>(`/abertas`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }



    public async findByAtivos(): Promise<Movimentacao> {
        try {
            return (await this.axiosClient.get<Movimentacao>(`/ativo`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }





    public async save(Movimentacao: Movimentacao): Promise<Movimentacao> {
        try {
            return (await this.axiosClient.post('', Movimentacao)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async update(Movimentacao: Movimentacao): Promise<Movimentacao> {
        try {
            return (await this.axiosClient.put<Movimentacao>('', Movimentacao)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async delete(id: number): Promise<void> {
        try {
            await this.axiosClient.delete(`?id=${id}`)
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }
}

