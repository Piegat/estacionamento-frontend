import { Modelo } from "@/modal/Modelo"
import axios, { AxiosInstance } from "axios"

export class ModeloClient{
    private axiosClient: AxiosInstance
    
    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/modelo',
            headers: { 'Content-type': 'application/json' }
        })
    }

    public async findById(id: number): Promise<Modelo> {
        try {
            return (await this.axiosClient.get<Modelo>(`?id=1${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }


    public async findByAll(): Promise<Modelo[]> {
        try {
            return (await this.axiosClient.get<Modelo[]>(`/lista`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }


    public async findByAtivos(): Promise<Modelo> {
        try {
            return (await this.axiosClient.get<Modelo>(`/ativo`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }





    public async save(Modelo: Modelo): Promise<Modelo> {
        try {
            return (await this.axiosClient.post('', Modelo)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async update(Modelo: Modelo): Promise<Modelo> {
        try {
            return (await this.axiosClient.put<Modelo>('', Modelo)).data
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

