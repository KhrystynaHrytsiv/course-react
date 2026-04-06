import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";

const RightA = () => {
    const {toggle} = useContext(MyContext)
    const changeToDark = () =>{
        toggle('dark');
    };
    const changeToLight = () =>{
        toggle('light');
    };
    return (
        <div>
            <button onClick={changeToDark}> change theme to dark</button>
            <button onClick={changeToLight}> change theme to light</button>
        </div>
    );
};

export {RightA};