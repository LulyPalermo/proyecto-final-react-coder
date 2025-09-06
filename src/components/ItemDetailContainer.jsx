import { useEffect, useState } from "react";
// import { getProductById } from "../mock/AsyncMock";
import { ItemDetail } from "./ItemDetail";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { LoaderComponent } from "./LoaderComponent";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const [loader, setLoader] = useState(false);
    const [invalid, setInvalid] = useState(null);

    const { id } = useParams()

    //Con firebase
    useEffect(() => {
        setLoader(true)

        //Conectamos con la coleccion y crear una referencia
        const docRef = doc(db, "products", id) //Este metodo recibe 3 parametros. Primero: a que proyecto tiene que ir. Segundo: a que coleccion tiene que ir. Tercero: que documento tiene que buscar

        //Ahora se trae el documento
        getDoc(docRef)
            .then((res) => {
                if (res.data()) {
                    setProduct({ id: res.id, ...res.data() })
                } else {
                    setInvalid(true)
                }
            })
            .catch((error) => console.error(error))
            .finally(() => setLoader(false))
    }, [id])

    //Con promesa
    /* useEffect(() => {
        setLoader(true)
        // Por ahora dejo un id fijo, luego lo tomo de la URL con useParams
        getProductById(id)
            .then((res) => setProduct(res)) // Si la promesa se resuelve, se guarda el producto en estado.
            .catch((error) => console.error(error))
            .finally(() => setLoader(false))
    }, [id]); */

    if (invalid) {
        return (
            <section id="detail-section">
                <div>
                    <h4 className="product-detail-name">Ese producto no existe</h4>
                </div>
            </section>
        )
    }

    return (
        <>
            {loader
                ? <LoaderComponent />
                : <section id="detail-section">
                    <Link to="/" className="link-back">
                        <span><IoIosArrowBack /></span>
                        <span>Volver al listado</span>
                    </Link>

                    {product ? (
                        <ItemDetail product={product} />
                    ) : (
                        null
                    )}
                </section>

            }
        </>
    );
};
