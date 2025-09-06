import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";

export const ItemCount = ({ stock, onAdd }) => {

    // Estado para el contador (inicia en 1)
    const [count, setCount] = useState(1);

    // Sumar 1, pero no pasarse del stock
    const handleAdd = () => {
        setCount(prev => (prev < stock ? prev + 1 : prev));
    };

    // Restar 1, sin bajar de 1
    const handleRemove = () => {
        setCount(prev => (prev > 1 ? prev - 1 : 1));
    };

    // Función para agregar al carrito
    const addProduct =()=>{
        onAdd(count)
    }

    return (
        <>
            <section id="buy-actions">
                <div className="buy-product">
                    <span className="remove" onClick={handleRemove}>
                        <IoMdRemove />
                    </span>
                    <p className="quantity">{count}</p>
                    <span className="add" onClick={handleAdd}>
                        <IoMdAdd />
                    </span>
                </div>

            {/* Esta función también podría ser anónima: onClick={() => onAdd(count)}*/}
                <button className="shop-button" onClick={addProduct}> 
                    <HiOutlineShoppingBag className="shop-button-icon" />
                    <span className="shop-button-text">Comprar</span>
                </button>
            </section>
        </>


    )
}
