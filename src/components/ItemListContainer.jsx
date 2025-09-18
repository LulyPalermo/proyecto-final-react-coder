import { useEffect, useState } from "react"
// import { getProducts } from "../mock/AsyncMock"
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { LoaderComponent } from "./LoaderComponent";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";
import { ErrorComponent } from "./ErrorComponent";

const validCategories = ["cocina", "deco", "textiles"];

export const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);
    const [isValidCategory, setIsValidCategory] = useState(true);
    const { category } = useParams();


    useEffect(() => {
        if (category && !validCategories.includes(category)) {
            setIsValidCategory(false);
            return;
        } else {
            setIsValidCategory(true);
        }

        setLoader(true); // Lo primero que hace el useEffect es prender el loader

        // Primer paso: nos contectamos con la coleccion
        const productsCollection = category
            ? query(collection(db, "products"), where("category", "==", category)) // Esto lo que dice es: que si existe category, hacé una query a la colección products, donde category sea exactamente igual al category de params
            : collection(db, "products")

        //Segundo paso: le pido los datos o documentos, como es un método lo llamo entre (), y recibe como parámetro a donde tiene que traernos esos documentos (productsCollection)
        // Este metodo nos devuelve una promesa
        getDocs(productsCollection)
            .then((res) => {
                // console.log(res.docs)
                const list = res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data() //data extrae los datos almacenados dentro del documento, para poder usarlos en el codigo
                    }
                })
                setProducts(list)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoader(false))
    }, [category])

    // Función para mostrar título según categoría
    const renderCategoryTitle = () => {
        if (!category) return null;
        // return category
        return category.charAt(0).toUpperCase() + category.slice(1);  // Capitaliza la primera letra y deja el resto igual
    };

    // Si la categoría no es válida → mostramos la página de error
    if (!isValidCategory) {
        return (
            <section id="detail-section">
                <div className="no-results">
                    <h4 className="product-detail-name">No se encontró ninguna categoría</h4>
                </div>
            </section>
        )
    }

    return (
        <>

            {loader
                ? <LoaderComponent />
                :
                <>
                    <section className="hero">
                        <img src="/hero1.jpg" alt="" />
                    </section>

                    <section className="main-container">
                        {/* Título de categoría */}
                        <div className="category-name">
                            {category && <h2>{renderCategoryTitle()}</h2>}

                            {/* Cantidad de artículos */}
                            {category && (
                                <p> Mostrando {products.length} producto{products.length !== 1 ? "s" : ""}</p>
                            )}
                        </div>

                        <section id="products-section">
                            <ItemList products={products} />
                        </section>
                    </section>
                </>
            }
        </>

    )
}
