import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../service/firebase";
import { ItemList } from "./ItemList";
import { LoaderComponent } from "./LoaderComponent";
import { IoCloseSharp } from "react-icons/io5";


export const SearchResultsContainer = () => {
    const { query: searchTerm } = useParams();
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoader(true);
            try {
                const productsRef = collection(db, "products");
                const snapshot = await getDocs(productsRef);
                const allProducts = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                const filtered = allProducts.filter((prod) =>
                    prod.name.toLowerCase().includes(searchTerm.toLowerCase())
                );

                setProducts(filtered);
            } catch (error) {
                console.error("Error al buscar productos:", error);
            } finally {
                setLoader(false);
            }
        };

        fetchProducts();
    }, [searchTerm]);

    const handleClearSearch = () => {
        // Redirige al inicio
        navigate("/");
    };

    if (loader) return <LoaderComponent />;

    return (
        <section className="search-container">
            {products.length > 0 ? (
                <>
                    <div className="search-results-top">
                        <div className="search-results">
                            <p>Estás filtrando por:</p>
                            <div className="filter-results-pill">
                                <p>{searchTerm}</p>
                                <span onClick={handleClearSearch}><IoCloseSharp /></span>
                            </div>
                        </div>
                        <p>Mostrando {products.length} producto{products.length !== 1 ? "s" : ""}</p>
                    </div>

                    <section id="products-section">
                        <ItemList products={products} />
                    </section>
                </>
            ) : (
                <div className="no-results">
                    <h4>¡Lo sentimos! No hay coincidencias para la búsqueda "{searchTerm}".</h4>
                    <p> Inténtalo nuevamente con otros criterios de filtrado o busca en otras secciones de nuestro catálogo.</p>
                </div>
            )}
        </section>
    );
};

