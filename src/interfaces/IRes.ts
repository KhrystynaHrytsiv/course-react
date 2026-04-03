import type IProduct from "./IProduct.ts";

export interface IRes {
    total:number,
    skip:number,
    limit:number,
    products:IProduct[]
}