import './App.css'
import {LeftBranch} from "./components/left/LeftBranch.tsx";
import {RightBranch} from "./components/right/RightBranch.tsx";
import {MyContext} from "./context/MyContext.tsx";
import {useState} from "react";


function App() {
    const [themeColor, setThemeColor] = useState<string>('light')
  return (
    <>
        <MyContext.Provider value={{theme: themeColor,
            toggle:(theme:string) =>{
            setThemeColor(theme)}
        }}>
        <LeftBranch/>
        <RightBranch/>

        </MyContext.Provider>
    </>
  )
}

export default App
