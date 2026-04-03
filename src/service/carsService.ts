import {apiService, baseURL} from "./apiService.ts";
import type {ICar} from "../interfaces/ICar.ts";
import type {IRes} from "../interfaces/IRes.ts";

const carsService ={
    getAllCars:  async ():IRes<ICar[]> =>  await apiService.get<ICar[]>(baseURL),
    createCar: async (car:ICar)=> await apiService.post(baseURL, car)
}
export {carsService}
