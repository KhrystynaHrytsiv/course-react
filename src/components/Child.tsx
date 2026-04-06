import {type FC, memo, useMemo} from "react";

const Child:FC<{callBack:() => void, count:number}> = memo(({ count}) => {
    const memory = useMemo(() => {
        for (let i = 0; i < 100; i++) {
            console.log(i);
        }
        return null
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
        </div>
    );
});

export {Child};