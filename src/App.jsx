import Header from "./components/Header.jsx";
import {useState} from "react";
import Products from "./components/Products.jsx";
import Basket from "./components/Basket.jsx";
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import {document} from "postcss";

function App() {

    const [money, setMoney] = useState(100000000)
    const [basket, setBasket] = useState([])

    return (
    <div className="relative">
      <Header money={money}/>
      <Products money={money} setMoney={setMoney} basket={basket} setBasket={setBasket} />
      <Basket basket={basket} setBasket={setBasket} setMoney={setMoney} />
    </div>
  )
}

export default App