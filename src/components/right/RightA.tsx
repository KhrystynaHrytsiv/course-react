import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";

const RightA = () => {
    const {counterValue, increment} = useContext(MyContext);
    return (
        <div>
            Right A
            <button onClick={()=> increment(counterValue)}>increment to left branch A </button>
        </div>
    );
};

export {RightA};