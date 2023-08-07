import SingleProduct from "./SingleProduct.jsx";

const products = {
    car: {
        title: "Car",
        price: 24000,
        img: "https://www.pngall.com/wp-content/uploads/2016/07/Car-PNG-File.png"
    },
    cola: {
        title: "Cola",
        price: 2,
        img: "https://www.pngmart.com/files/1/Coca-Cola-PNG-Photos.png"
    },
    gum: {
        title: "Gum",
        price: 0.10,
        img: "https://images.marul.com/thumbs/016/0165061_falim-damla-5li_320.png"
    },
    hundredTurkishLira: {
        title: "100 Turkish Lira",
        price: 3.71,
        img: "https://i.pinimg.com/originals/84/97/b1/8497b19c2b262ebbb9a8e1690ec2ec04.png"
    },
    ipad: {
        title: "Ipad",
        price: 800,
        img: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/TeoriV2-106818-1_large.jpg"
    },
    sneaker: {
        title: "shoe",
        price: 150,
        img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1679571751-120380-195-m-ghost-15-womens-neutral-cushion-running-shoe.png?crop=1xw:1xh;center,top&resize=980:*"
    },
    boat: {
        title: "Boat",
        price: 55000000,
        img: "https://i.ibb.co/sCbmRKV/Ekran-Resmi-2021-04-16-13-45-31.png"
    },
    monalisa: {
        title: "Mona Lisa",
        price: 2000000000,
        img: "https://render.fineartamerica.com/images/rendered/square-product/small/images/artworkimages/mediumlarge/1/monalisa-with-white-background-sushil-deokar.jpg"
    },
    oneTurkishLira: {
        title: "1 Turkish Lira",
        price: 0.037,
        img: "https://iasbh.tmgrup.com.tr/802b79/0/0/0/0/0/0?u=http://i.sabah.com.tr/sb/galeri/dunya/1-tlnin-diger-ulke-paralari-karsisindaki-degeri/1.jpg"
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