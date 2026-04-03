import {useEffect, useState} from "react";
import {loadAuthProducts, refresh} from "../services/apiService.ts";
import type IProduct from "../interfaces/IProduct.ts";
import {Product} from "./Product.tsx";

const AuthProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        loadAuthProducts().then(value => setProducts(value))
            .catch(reason => {
                console.log(reason);
                refresh().then(() => loadAuthProducts()) //онови токени і виведи продукти
                    .then(value => setProducts(value))
            })
    }, []);
    return (
        <div>
            {products.map(item =><Product item={item} key={item.id}/>)}
        </div>
    );
};

export {AuthProducts};