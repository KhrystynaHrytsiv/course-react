import {type FC,  } from "react";
import type {ICar} from "../../interfaces/ICar.ts";
import './Cars.css'

interface IProps {
    car:ICar
}

const Car: FC<IProps> = ({car}) => {
    return (
        <div className={'car'}>
             <div>id: {car.id}</div>
             <div>brand: {car.brand}</div>
             <div>price: {car.price}</div>
             <div>year: {car.year}</div>
        </div>
    );
};

export { Car };