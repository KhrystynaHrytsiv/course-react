import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";
import './LeftA.css'

const LeftA = () => {
    const {theme} = useContext(MyContext);
    return (
        <div className={theme}>
        </div>
    );
};

export {LeftA};