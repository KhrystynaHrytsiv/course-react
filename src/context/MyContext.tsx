import {createContext} from "react";

type MyContextType ={
    theme: string,
    toggle:(theme:string) => void
}
export const MyContext = createContext<MyContextType>({
    theme: 'light',
    toggle:(theme:string) => {
        console.log(theme);
    }
});