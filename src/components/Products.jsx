import SingleProduct from "./SingleProduct.jsx";

const products = {
    car: {
        title: "Car",
        price: 24000,
        img: "src/images/car.jpg"
    },
    cola: {
        title: "Cola",
        price: 2,
        img: "src/images/cola.jpg"
    },
    gum: {
        title: "Gum",
        price: 0.10,
        img: "src/images/gum.jpg"
    },
    hundredTurkishLira: {
        title: "100 Turkish Lira",
        price: 3.71,
        img: "src/images/hundredTurkishLira.png"
    },
    ipad: {
        title: "Ipad",
        price: 800,
        img: "src/images/ipad.jpg"
    },
    sneaker: {
        title: "shoe",
        price: 150,
        img: "src/images/sneaker.jpg"
    },
    boat: {
        title: "Boat",
        price: 55000000,
        img: "src/images/boat.png"
    },
    monalisa: {
        title: "Mona Lisa",
        price: 2000000000,
        img: "src/images/monalisa.jpg"
    },
    oneTurkishLira: {
        title: "1 Turkish Lira",
        price: 0.037,
        img: "src/images/oneTurkishLira.jpg"
    }
}

export default function Products({ money, setMoney, basket, setBasket }) {
    return (
        <div className="flex flex-wrap justify-center max-w-6xl w-full mx-auto">
            <SingleProduct
                money={money}
                setMoney={setMoney}
                title={products.car.title}
                price={products.car.price}
                img={products.car.img}
                basket={basket}
                setBasket={setBasket} />
            <SingleProduct
                money={money}
                setMoney={setMoney}
                title={products.cola.title}
                price={products.cola.price}
                img={products.cola.img}
                basket={basket}
                setBasket={setBasket} />

            <SingleProduct
                money={money}
                setMoney={setMoney}
                title={products.gum.title}
                price={products.gum.price}
                img={products.gum.img}
                basket={basket}
                setBasket={setBasket} />
            <SingleProduct
                money={money}
                setMoney={setMoney}
                title={products.hundredTurkishLira.title}
                price={products.hundredTurkishLira.price}
                img={products.hundredTurkishLira.img}
                basket={basket}
                setBasket={setBasket} />
            <SingleProduct
                money={money}
                setMoney={setMoney}
                title={products.ipad.title}
                price={products.ipad.price}
                img={products.ipad.img}
                basket={basket}
                setBasket={setBasket} />
            <SingleProduct
                money={money}
                setMoney={setMoney}
                title={products.boat.title}
                price={products.boat.price}
                img={products.boat.img}
                basket={basket}
                setBasket={setBasket} />
            <SingleProduct
                money={money}
                setMoney={setMoney}
                title={products.monalisa.title}
                price={products.monalisa.price}
                img={products.monalisa.img}
                basket={basket}
                setBasket={setBasket} />
            <SingleProduct
                money={money}
                setMoney={setMoney}
                title={products.oneTurkishLira.title}
                price={products.oneTurkishLira.price}
                img={products.oneTurkishLira.img}
                basket={basket}
                setBasket={setBasket} />
            <SingleProduct
                money={money}
                setMoney={setMoney}
                title={products.sneaker.title}
                price={products.sneaker.price}
                img={products.sneaker.img}
                basket={basket}
                setBasket={setBasket} />
        </div>
    )
}