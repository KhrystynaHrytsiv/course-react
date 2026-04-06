import {useEffect, useState} from "react";

export const useFetch =<T,> (url:string) =>{
    const [resState, setResState] = useState<T>();
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(value => setResState(value))
    }, []);
    return resState
}