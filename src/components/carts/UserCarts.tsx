import {type FC, useEffect, useState} from "react";
import type {ICart} from "../../models/ICart.ts";
import {userService} from "../../service/api.service.ts";
import {Cart} from "./Cart.tsx";
import css from './Cart.module.css'

interface IProp {
    userId:string
}
const UserCarts:FC<IProp> = ({userId}) => {
    const [carts, setCarts] = useState<ICart[]>([]);
    useEffect(() => {
        if (userId){
        userService.getCartsByUserId(+userId).then(({carts}) => setCarts(carts))
        }
    }, []);
    return (
        <div className={css.cartContainer}>
            {carts.map(cart => <Cart cart={cart} key={cart.id}/>)}
        </div>
    );
};

export {UserCarts};