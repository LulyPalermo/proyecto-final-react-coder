import { useEffect, useState } from "react"
// import { getProducts } from "../mock/AsyncMock"
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { LoaderComponent } from "./LoaderComponent";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";
// import { products as productsMock } from "../mock/AsyncMock";

export const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);
    const { category } = useParams()

    //Con firebase
    useEffect(() => {
        setLoader(true); // Lo primero que hace el useEffect es prender el loader

        // Primer paso: nos contectamos con nuestra coleccion
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

    //Con promesa
    /*  useEffect(() => {
         setLoader(true); // Lo primero que hace el useEffect es prender el loader
         // console.log("Loader ON")
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
             .finally(() => setLoader(false)) // Se apaga cuando se cargan los productos, cuando se filtran o cuando hay error.
     }, [category]) */

    // console.log(category);

    // Función para mostrar título según categoría
    const renderCategoryTitle = () => {
        if (!category) return null;
        // return category
        return category.charAt(0).toUpperCase() + category.slice(1);  // Capitaliza la primera letra y deja el resto igual
    };


    /* //Función para subir dinámicamente los productos a firebase
    const subirData = async () => {
        console.log("Subiendo data...");
        const collectionAagregar = collection(db, "products");

        for (const prod of productsMock) {
            try {
                await addDoc(collectionAagregar, prod);
                console.log(`Producto agregado: ${prod.name}`);
            } catch (error) {
                console.error("Error subiendo producto:", error);
            }
        }
    }; */

    return (
        <>

            {loader
                ? <LoaderComponent />
                :
                <>
                    <section className="hero">
                        <img src="/public/hero1.jpg" alt="" />
                    </section>

                    <section className="main-container">
                        {/* Título de categoría */}
                        <div className="category-name">
                            {category && <h2>{renderCategoryTitle()}</h2>}

                            {/* Cantidad de artículos */}
                            {category && (
                                <p> Mostrando {products.length} artículo{products.length !== 1 ? "s" : ""}</p>
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
