import {type SubmitHandler, useForm} from "react-hook-form";
import {carValidator} from "../validation/carValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import type {ICar} from "../interfaces/ICar.ts";
import {carsService} from "../service/carsService.ts";

const CarForm = () => {
    const {register, handleSubmit, formState:{errors, isValid}, reset } = useForm<ICar>({mode:"all", resolver:joiResolver(carValidator)});
    const save:SubmitHandler<ICar> = (car:ICar) =>{
    carsService.createCar(car);
    reset()
    };
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type={'text'} placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <div>{errors.brand.message}</div>}
            <input type={'number'} placeholder={'price'} {...register('price')}/>
            {errors.price && <div>{errors.price.message}</div>}
            <input type={'number'} placeholder={'year'} {...register('year')}/>
            {errors.year && <div>{errors.year.message}</div>}
            <button disabled={!isValid}>save</button>
        </form>

    );
};

export {CarForm};