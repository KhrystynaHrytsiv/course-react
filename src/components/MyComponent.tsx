import type {FC, ReactNode} from "react";
interface IProp {
    title:string,
    children?:ReactNode
}
const MyComponent:FC<IProp> = ({title, children}) => {
    return (
        <div className='text-3xl font-bold underline' >
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    );
};

export {MyComponent};