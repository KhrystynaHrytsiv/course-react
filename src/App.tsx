import './App.css'
import {products} from "./data/product-list.ts";
import {Product} from "./components/my-product/Product.tsx";


function App() {

  return (
    <>
      {products.map((product, index) =><Product product={product} key={index}/>)}
    </>
  )
}

export default App
