import { useEffect, useState } from "react";
import { getProductById } from "../mock/AsyncMock";
import { ItemDetail } from "./ItemDetail";
import { IoIosArrowBack } from "react-icons/io";

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null); // Inicialmente null ya que no hay producto aún. setProduct lo actualiza cuando llega la respuesta del mock.

    useEffect(() => {
        // Por ahora dejo un id fijo, luego lo tomo de la URL con useParams
        getProductById("01")
            .then((res) => setProduct(res)) // Si la promesa se resuelve, se guarda el producto en estado.
            .catch((error) => console.error(error));
    }, []);

    return (
        <section id="detail-section">
        
            
                <a href="" className="link-back">
                    <span> <IoIosArrowBack /></span>
                    <span>Volver al listado</span>
                </a>
           
            {product ? (
                <ItemDetail product={product} /> // Si product tiene datos, se renderiza <ItemDetail product={product} /> pasándole el objeto como prop.
            ) : (
                <p>Cargando producto...</p> // Mientras product sea null se muestra "Cargando producto..."
            )}
        </section>
    );
};
