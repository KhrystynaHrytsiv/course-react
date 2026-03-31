import type {FC} from "react";

interface IProp{
    text:string
}
const MyComponent:FC<IProp> =  ({text}) =>{
    return (
        <div>
            {text}
        </div>
    );
};

export default MyComponent;