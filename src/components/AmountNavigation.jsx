export default function AmountNavigation({ money, setMoney, amount, setAmount, price, basket, setBasket, title }) {

    const handleBuyClick = () => {
        setAmount(amount + 1)
        setMoney(money - price)

        const checkBasket = basket.find(item => item.title === title)

        if (checkBasket) {
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.title !== title ), checkBasket])
        } else {
            setBasket([...basket, {title: title, amount: amount + 1, price: price}])
        }
    }

    const handleSellClick = () => {
        amount !== 0 && setAmount(amount - 1)
        setMoney(money + price)

        const checkBasket = basket.find(item => item.title === title)

        if (checkBasket) {

            if (checkBasket.amount === 1) {
                setBasket([...basket.filter(item => item.title !== title )])
            } else {
                checkBasket.amount -= 1
                setBasket([...basket.filter(item => item.title !== title ), checkBasket])
            }
        }
    }

    const basketItem = basket.find(item => item.title === title)

    return (
        <div className="mt-5 flex w-full text-center">
            <button
                className={
                price > money
                    ? "bg-slate-200 opacity-20 p-3 w-1/3 rounded-l-md"
                    : "bg-green-400 p-3 w-1/3 rounded-l-md"}
                disabled={price > money}
                onClick={handleBuyClick} >Buy</button>

            <div className="p-3 w-1/3 border-solid border-y-2 border-slate-50">{basketItem ? basketItem.amount : amount}</div>

            <button disabled={amount === 0} onClick={handleSellClick}  className={amount === 0
                ? "bg-slate-200 opacity-20 p-3 w-1/3 rounded-r-md"
                : "bg-slate-200 p-3 w-1/3 rounded-r-md"} >Sell</button>
        </div>
    )
}