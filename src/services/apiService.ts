import axios from "axios";

const baseUrl = 'https://jsonplaceholder.typicode.com/'
export const apiService = axios.create({baseURL: baseUrl});