import type IUser from "./IUser.ts";

export interface IRes {
    total:number,
    skip:number,
    limit:number,
    users:IUser[],
}