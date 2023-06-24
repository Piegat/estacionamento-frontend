
import { Condutor } from '@/modal/Codutor'
import axios, { AxiosInstance } from 'axios'

export class CondutorClient{

    private axiosClient: AxiosInstance
    
    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/condutor',
            headers: { 'Content-type': 'application/json' }
        })
    }

    public async findByAll(): Promise<Condutor[]> {
        try {
            return (await this.axiosClient.get<Condutor[]>(`/lista`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }



    public async findById(id: number): Promise<Condutor> {
        try {
            return (await this.axiosClient.get<Condutor>(`?id=${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async findByAtivos(): Promise<Condutor> {
        try {
            return (await this.axiosClient.get<Condutor>(`/ativo`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }





    public async save(Condutor: Condutor): Promise<Condutor> {
        try {
            return (await this.axiosClient.post('', Condutor)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async update(Condutor: Condutor): Promise<Condutor> {
        try {
            return (await this.axiosClient.put<Condutor>('', Condutor)).data
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