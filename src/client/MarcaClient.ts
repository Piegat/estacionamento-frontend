import { Marca } from "@/modal/Marca"
import axios, { AxiosInstance } from "axios"

export class MarcaClient{
    private axiosClient: AxiosInstance
    
    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/marca',
            headers: { 'Content-type': 'application/json' }
        })
    }

    public async findById(id: number): Promise<Marca> {
        try {
            return (await this.axiosClient.get<Marca>(`?id=1${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }


    public async findAll(): Promise<Marca[]> {
        try {
            return (await this.axiosClient.get<Marca[]>(`/lista`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }


    public async findByAtivos(): Promise<Marca> {
        try {
            return (await this.axiosClient.get<Marca>(`/ativo`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }





    public async save(Marca: Marca): Promise<Marca> {
        try {
            return (await this.axiosClient.post('', Marca)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async update(Marca: Marca): Promise<Marca> {
        try {
            return (await this.axiosClient.put<Marca>('', Marca)).data
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


