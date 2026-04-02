import type { FC,} from "react";
import type {ICart} from "../../models/ICart.ts";
import css from './Cart.module.css'

interface IProps {
    cart:ICart
}

const Cart: FC<IProps> = ({cart}) => {
    return (
        <div className={css.cart}>
             <div>UserId:{cart.userId}</div>
             <ul>Products:{cart.products.map(item => <li key={item.id}>{item.title} </li>)}</ul>
             <div>Total:{cart.total}</div>
             <div>Discounted Total:{cart.discountedTotal}</div>
             <div>Total Products:{cart.totalProducts}</div>
             <div>Total Quantity: {cart.totalQuantity}</div>
        </div>
    );
};

export { Cart };