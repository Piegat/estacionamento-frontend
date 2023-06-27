import { Modelo } from "@/modal/Modelo"
import axios, { AxiosInstance } from "axios"

export class ModeloClient{
    private axiosClient: AxiosInstance
    
    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api',
            headers: { 'Content-type': 'application/json' }
        })
    }

    public async findById(id: number): Promise<Modelo> {
        try {
            return (await this.axiosClient.get<Modelo>(`modelo?id=${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }


    public async findByAll(): Promise<Modelo[]> {
        try {
            return (await this.axiosClient.get<Modelo[]>(`modelo/lista`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }


    public async findByAtivos(): Promise<Modelo[]> {
        try {
            return (await this.axiosClient.get<Modelo[]>(`modelo/ativo`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }





    public async save(Modelo: Modelo): Promise<Modelo> {
        try {
            return (await this.axiosClient.post('modelo', Modelo)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async update(Modelo: Modelo, id: number): Promise<Modelo> {
        try {
            return (await this.axiosClient.put<Modelo>(`modelo?id=${id}`, Modelo)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async delete(id: number): Promise<void> {
        try {
            await this.axiosClient.delete(`modelo?id=${id}`)
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }
}

