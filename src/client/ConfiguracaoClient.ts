import { Configuracao } from '@/modal/Configuracao'
import axios, { AxiosInstance } from 'axios'

export class CodutorClient{

    private axiosClient: AxiosInstance
    
    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/configuracao',
            headers: { 'Content-type': 'application/json' }
        })
    }




    public async findById(id: number): Promise<Configuracao> {
        try {
            return (await this.axiosClient.get<Configuracao>(`?id=1${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }






    public async save(Condutor: Configuracao): Promise<Configuracao> {
        try {
            return (await this.axiosClient.post('', Configuracao)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async update(Configuracao: Configuracao): Promise<Configuracao> {
        try {
            return (await this.axiosClient.put<Configuracao>('', Configuracao)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

}