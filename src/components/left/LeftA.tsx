import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";

const LeftA = () => {
    const {counterValue} = useContext(MyContext);
    return(
        <div>
            left Branch A
            <p>Current counter value is: {counterValue}</p>
        </div>
    );
};

export {LeftA};