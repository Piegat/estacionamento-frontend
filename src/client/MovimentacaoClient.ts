import { Movimentacao } from "@/modal/Movimentacao"
import axios, { AxiosInstance } from "axios"

export class MovimentacaoClient{
    private axiosClient: AxiosInstance
    
    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api',
            headers: { 'Content-type': 'application/json' }
        })
    }

    public async findById(id: number): Promise<Movimentacao> {
        try {
            return (await this.axiosClient.get<Movimentacao>(`movimentacao?id=${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }


    public async finByAll(): Promise<Movimentacao[]> {
        try {
            return (await this.axiosClient.get<Movimentacao[]>(`movimentacao/lista`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async findByAbertas(): Promise<Movimentacao[]> {
        try {
            return (await this.axiosClient.get<Movimentacao[]>(`movimentacao/abertas`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }



    public async findByAtivos(): Promise<Movimentacao> {
        try {
            return (await this.axiosClient.get<Movimentacao>(`movimentacao/ativo`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }





    public async save(Movimentacao: Movimentacao): Promise<Movimentacao> {
        try {
            return (await this.axiosClient.post('movimentacao', Movimentacao)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async update(Movimentacao: Movimentacao): Promise<Movimentacao> {
        try {
            return (await this.axiosClient.put<Movimentacao>('movimentacao', Movimentacao)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async delete(id: number): Promise<void> {
        try {
            await this.axiosClient.delete(`movimentacao?id=${id}`)
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }
}

