import {apiService, baseURL} from "./apiService.ts";
import type {ICar} from "../interfaces/ICar.ts";

const carsService ={
    getAllCars: async () => await apiService.get<ICar[]>(baseURL),
    createCar: async (car:ICar)=> await apiService.post<ICar>(baseURL, car)
}
export {carsService}