import {useEffect, useState} from "react";
import type {ICar} from "../../interfaces/ICar.ts";
import {Car} from "./Car.tsx";
import {carsService} from "../../service/carsService.ts";
import './Cars.css'

const Cars = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    useEffect(() => {
        carsService.getAllCars().then(({data})=> setCars(data))
    }, []);
    return(
        <div className={'carContainer'}>
            {cars.map(car => <Car car={car} key={car.id}/>)}
        </div>
    );
};

export {Cars};