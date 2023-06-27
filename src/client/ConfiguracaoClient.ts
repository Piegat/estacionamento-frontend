import { Configuracao } from '@/modal/Configuracao'
import axios, { AxiosInstance } from 'axios'

export class ConfiguracaoClient{

    private axiosClient: AxiosInstance
    
    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api',
            headers: { 'Content-type': 'application/json' }
        })
    }




    public async findById(id: number): Promise<Configuracao> {
        try {
            return (await this.axiosClient.get<Configuracao>(`configuracao?id=${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }






    public async save(Condutor: Configuracao): Promise<Configuracao> {
        try {
            return (await this.axiosClient.post('configuracao', Configuracao)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async update(Configuracao: Configuracao): Promise<Configuracao> {
        try {
            return (await this.axiosClient.put<Configuracao>(`configuracao?id=${Configuracao.id}`, Configuracao)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

}