import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";

export const ItemCount = () => {

    // Estado para el contador (inicia en 1)
    const [quantity, setQuantity] = useState(1);

    // Sumar 1
    const handleAdd = () => {
        setQuantity(prev => prev + 1);
    };

    // Restar 1, sin bajar de 1
    const handleRemove = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };
    return (
        <>
            <section id="main-actions">
                <div className="buy-product">
                    <span className="remove" onClick={handleRemove}>
                        <IoMdRemove />
                    </span>
                    <p className="quantity">{quantity}</p>
                    <span className="add" onClick={handleAdd}>
                        <IoMdAdd />
                    </span>
                </div>

                <button className="shop-button">
                    <HiOutlineShoppingBag className="shop-button-icon" />
                    <span className="shop-button-text">Comprar</span>
                </button>
            </section>
        </>


    )
}
