import { useEffect, useState } from "react";
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

    if (invalid) {
        return (
            <section id="detail-section">
                <div className="no-results">
                    <h4 className="product-detail-name">No se encontró ningún producto</h4>
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
