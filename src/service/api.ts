import type {IProduct} from "../interface/IProduct.ts";

const getProducts = async () =>{
    const response:{products:IProduct[]} =  await fetch(import.meta.env.VITE_API_URL)
              .then(response => response.json())
    return response
}
export {getProducts}