import axios from "axios";

const baseUrl = 'https://jsonplaceholder.typicode.com/'
export const apiService = axios.create({baseURL: baseUrl});

export const generalService = async <T> (endpoint:string):Promise<T> =>{
    const {data} = await apiService.get<T>(`${baseUrl}/${endpoint}`);
    return data as T
}
