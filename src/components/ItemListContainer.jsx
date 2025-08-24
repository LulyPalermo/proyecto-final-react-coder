import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncMock"
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ saludo, mensaje }) => {

    const [products, setProducts] = useState([]);
    const { category } = useParams()

    useEffect(() => {
        getProducts()
            .then((res) => {
                if (category) {
                    //filtro
                    setProducts(res.filter((item) => item.category === category));
                } else {
                    //data sin filtrar
                    setProducts(res)
                }

                // Mover la página al inicio
                window.scrollTo({
                    top: 0,
                    behavior: "smooth" // opcional: scroll suave
                });

            })
            .catch((error) => console.log(error))

    }, [category])
    // console.log(category);

    // Función para mostrar título según categoría
    const renderCategoryTitle = () => {
        if (!category) return null;
        // return category
        return category.charAt(0).toUpperCase() + category.slice(1);  // Capitaliza la primera letra y deja el resto igual
    };

    return (
        <>
            <div className="main-container">
                <section>
                    <p>{saludo}</p>
                    <p>{mensaje}</p>
                    {/* Título de categoría */}

                    <div className="category-name">
                        {category && <h2>{renderCategoryTitle()}</h2>}

                        {/* Cantidad de artículos */}
                        {category && (
                            <p> Mostrando {products.length} artículo{products.length !== 1 ? "s" : ""}</p>
                        )}
                    </div>
                </section>

                <section id="products-section">
                    <ItemList products={products} />
                </section>
            </div>


        </>

    )
}
