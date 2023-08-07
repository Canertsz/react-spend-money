import {formatMoney} from "../helpers/formatMoney.js";

export default function Basket({ basket, setBasket, setMoney }) {

    const listItems = basket.map(item =>
        <div className="text-lg">
            <h4>
                {item.title}
                <span className="opacity-30"> x {item.amount}</span>
            </h4>
        </div>
    );

    const resetBasket = () => {
        setBasket([])
        setMoney(100000000)
    }

    if (basket.length !== 0) {

        const current = basket.map(item => item.price * item.amount)
        const total = current.reduce((t, i) => t + i)

        return (
            <div className="max-w-6xl mx-auto mb-4">
                <div className="bg-white mx-16">
                    <h2 className="text-2xl pt-4 pl-4">
                        <b>Shopping Details</b>
                    </h2>
                    <div className="text-2xl pt-3 pl-4 pb-4">{listItems}</div>
                    <div className="flex justify-between">
                        <button className="ml-4 mb-4 bg-green-400 px-3 py-2 rounded-md" onClick={resetBasket}>Reset Basket</button>
                        <span className="text-green-400 text-lg mr-4">total: {formatMoney(total)}</span>
                    </div>
                </div>
            </div>
        )
    }
}