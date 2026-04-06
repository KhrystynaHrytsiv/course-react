import {LeftA} from "./LeftA.tsx";
import {useMemo} from "react";

const LeftBranch = () => {
    const memox = useMemo(() =>{
        for (let i = 0; i < 1000; i++) {
            console.log(i);
        }
        return null
    }, [])
    return (
        <div>
            LeftBranch
            <LeftA/>
        </div>
    );
};

export {LeftBranch};