const formatMoney = (money) => {
    let USDollar = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
    return USDollar.format(money)
}

export {formatMoney}