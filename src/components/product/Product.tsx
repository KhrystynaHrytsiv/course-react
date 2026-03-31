import type {IProduct} from "../../interface/IProduct.ts";
import type {FC} from "react";
import './Product.css'

interface IProp {
    product:IProduct
}
const Product:FC<IProp> = ({product}) => {
    return (
        <div className={'block'}>
            <h3>{product.title}</h3>
            <div>Price: {product.price}</div>
            <div>Brand: {product.brand}</div>
            <div>Category: {product.category}</div>
            <div>{product.description}</div>
            <img src={product.thumbnail} alt={product.title}/>
        </div>
    );
};

export {Product};