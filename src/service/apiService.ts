import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL
const apiService = axios.create({baseURL});
export {apiService, baseURL}