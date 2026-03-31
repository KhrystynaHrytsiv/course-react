import {useEffect, useState} from "react";
import type {IProduct} from "../../interface/IProduct.ts";
import {getProducts} from "../../service/api.ts";
import {Product} from "../product/Product.tsx";

const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        getProducts().then(({products}) => setProducts(products))
    }, []);
    return (
        <div>
            {products.map(product => <Product product={product} key={product.id}/>)}
        </div>
    );
};

export {Products};