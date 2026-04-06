import {useCallback, useState} from "react";
import {Child} from "./components/Child.tsx";

function App() {
    const [count, setCount] = useState<number>(0);
    const callback = useCallback(() =>{
        console.log('useCallback');
    }, []);

  return (
    <div>
        <button onClick={() =>setCount(count+1)}> increment </button>
        <Child callBack={callback} count={count}/>
    </div>
  )
}

export default App
