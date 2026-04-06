import {type FC, memo, useMemo} from "react";

const Child:FC<{callBack:() => void, count:number}> = memo(({ count}) => {
    //запам'ятовує компонент і не дає йому переренджувтись, якщо пропси не змінились
    const memory = useMemo(() => {
        for (let i = 0; i < 10; i++) {
            console.log(i);
        }
        return null
    }, []);//запам'ятовує результат обчислень і рендеритьься лише у випадку зміни результату
    return (
        <div>
            <p>Count: {count}</p>
        </div>
    );
});

export {Child};