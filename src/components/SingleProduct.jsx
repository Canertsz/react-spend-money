import AmountNavigation from "./AmountNavigation.jsx";
import { useState } from "react";
import {formatMoney} from "../helpers/formatMoney.js";

export default function SingleProduct({ money, setMoney ,title, img, price, basket, setBasket }) {

    const [amount, setAmount] = useState(0)

    return (
        <div className="flex flex-col items-center justify-center w-80 p-5 m-4 bg-white">
            <img width="208px" height="208px" src={img} alt=""/>
            <h2 className="text-2xl">
                <b>{title}</b>
            </h2>
            <h4 className="text-xl text-green-500 mt-3">{formatMoney(price)}</h4>
            <AmountNavigation title={title} money={money} setMoney={setMoney} setAmount={setAmount} amount={amount} price={price} basket={basket} setBasket={setBasket}/>
        </div>
    )
}