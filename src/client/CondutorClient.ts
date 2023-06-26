
import { Condutor } from '@/modal/Codutor'
import axios, { AxiosInstance } from 'axios'

export class CondutorClient{

    private axiosClient: AxiosInstance
    
    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api',
            headers: { 'Content-type': 'application/json' }
        })
    }

    public async findByAll(): Promise<Condutor[]> {
        try {
            return (await this.axiosClient.get<Condutor[]>(`condutor/lista`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }



    public async findById(id: number): Promise<Condutor> {
        try {
            return (await this.axiosClient.get<Condutor>(`condutor?id=${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async findByAtivos(): Promise<Condutor> {
        try {
            return (await this.axiosClient.get<Condutor>(`condutor/ativo`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }





    public async save(Condutor: Condutor): Promise<Condutor> {
        try {
            return (await this.axiosClient.post('condutor', Condutor)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async update(Condutor: Condutor): Promise<Condutor> {
        try {
            return (await this.axiosClient.put<Condutor>('condutor', Condutor)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async delete(id: number): Promise<void> {
        try {
            await this.axiosClient.delete(`condutor?id=${id}`)
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }




}