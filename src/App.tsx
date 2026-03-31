import './App.css'
import {MyComponent} from "./components/MyComponent.tsx";


function App() {

  return (
    <>
      <MyComponent title={'hello 1'}>
          mkgovsdkmvc
      </MyComponent>
      <MyComponent title={'title 2'}/>
      <MyComponent title={'title 3'}/>
      {/*{MyComponent({text: 'hello 2'})}*/}
    </>
  )
}

export default App
