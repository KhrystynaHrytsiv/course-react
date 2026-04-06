import {useEffect, useState} from "react";
import type IProduct from "../interfaces/IProduct.ts";
import {getProducts, refresh} from "../services/axios.ts";
import {Product} from "./Product.tsx";

const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        getProducts().then(value => setProducts(value))
            .catch(reason => {
                console.log(reason);
                refresh().then(() => getProducts()).then(value => setProducts(value))
            })
    }, []);
    return (
        <div>
            {products.map(item => <Product item={item} key={item.id}/>)}
        </div>
    );
};

export {Products};