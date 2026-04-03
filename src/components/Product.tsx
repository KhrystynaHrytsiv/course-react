import type IProduct from "../interfaces/IProduct.ts";
import type {FC} from "react";

interface IProp{
    item:IProduct
}
const Product:FC<IProp> = ({item}) => {
    return (
        <div>
            <div>{item.id}. {item.title}</div>
            <img src={item.thumbnail} alt={item.title}/>
        </div>
    );
};

export {Product};