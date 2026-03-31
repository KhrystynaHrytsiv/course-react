import type {IProduct} from "../../models/IProduct.ts";
import type {FC} from "react";
type PropType = {product:IProduct}

const Product:FC<PropType> = ({product}) => {
    return (
        <div>
            <h2>{product.title}. {product.price}</h2>
            <img src={product.image} alt={product.title}/>
        </div>
    );
};

export {Product};