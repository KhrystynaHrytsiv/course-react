import type {FC} from "react";
interface IProp {
    text:string
}
const MyComponent:FC<IProp> = ({text}) => {
    return (
        <div className='text-3xl font-bold underline' >
            {text}
        </div>
    );
};

export {MyComponent};