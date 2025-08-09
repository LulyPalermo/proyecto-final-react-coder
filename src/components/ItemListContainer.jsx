import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncMock"
import { ItemList } from "./ItemList";

export const ItemListContainer = ({ saludo, mensaje }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            // .then((res)=>console.log(res,'respuesta'))
            .then((res) => setProducts(res))
            .catch((error) => console.error(error))
    }, [])
    console.log(products);

    return (
        <>
            <div className="main-container">
                <section>
                    <p>{saludo}</p>
                    <p>{mensaje}</p>
                </section>

                <section id="products-section">
                    <ItemList products={products} />
                </section>
            </div>


        </>

    )
}
