import { Movimentacao } from "@/modal/Movimentacao"
import { Veiculo } from "@/modal/Veiculo"
import axios, { AxiosInstance } from "axios"

export class VeiculoClient{
    private axiosClient: AxiosInstance
    
    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api',
            headers: { 'Content-type': 'application/json' }
        })
    }

    public async findById(id: number): Promise<Veiculo> {
        try {
            return (await this.axiosClient.get<Veiculo>(`veiculo?id=1${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }


    public async findByAll(): Promise<Veiculo[]> {
        try {
            return (await this.axiosClient.get<Veiculo[]>(`veiculo/lista`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }


    public async findByAtivos(): Promise<Movimentacao> {
        try {
            return (await this.axiosClient.get<Movimentacao>(`veiculo/ativo`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }





    public async save(Veiculo: Veiculo): Promise<Veiculo> {
        try {
            return (await this.axiosClient.post('veiculo', Veiculo)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async update(Veiculo: Veiculo): Promise<Veiculo> {
        try {
            return (await this.axiosClient.put<Veiculo>('veiculo', Veiculo)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async delete(id: number): Promise<void> {
        try {
            await this.axiosClient.delete(`veiculo?id=${id}`)
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }
}

