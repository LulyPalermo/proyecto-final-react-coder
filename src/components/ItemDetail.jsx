import { useContext, useState } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Modal } from "./Modal";

export const ItemDetail = ({ product }) => {

    const [purchase, setPurchase] = useState(false); //este estado es para la logica de que una vez que se agregan productos, desaparezca el contador y se muestre un boton de comprar
    const { addItem } = useContext(CartContext);

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");


    // Responsable de la lógica de agregar un producto al carrito
    const onAdd = (quantity) => {
        const success = addItem(product, quantity);

        if (!success) {
            setModalMessage(`Este producto tiene un stock de ${product.stock} unidades. No puedes agregar más.`);
            setShowModal(true);
            return;
        }

        setPurchase(true);
    };

    return (
        <>
            <div className="product-detail">
                {/* <div className="product-detail-img">
                <img src={product.img} alt={product.name} />
            </div> */}
                <div className="product-detail-img">
                    {product.img.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`${product.name} ${index + 1}`}
                        />
                    ))}
                </div>

                <div className="product-detail-info">
                    <h2 className="product-detail-name">{product.name}</h2>
                    <p className="product-detail-price">$ {product.price}</p>
                    <div className="product-detail-description">
                        <p>Descripción</p>
                        <p>{product.description}</p>
                    </div>

                    {purchase
                        ?
                        <div className="product-actions">
                            <Link to='/cart' className="shop-button">
                                <HiOutlineShoppingBag className="shop-button-icon" />
                                <span className="shop-button-text">Ir al carrito</span>
                            </Link>
                        </div>

                        : <div className="product-actions">
                            <ItemCount stock={product.stock} onAdd={onAdd} />
                            <p className="product-detail-stock">Stock disponible: {product.stock}</p>
                        </div>
                    }
                </div>
            </div>

            {/* Aca se renderiza el modal si showModal es true */}
            {showModal && (
                <Modal
                    message={modalMessage}
                    onClose={() => setShowModal(false)}
                />
            )}
        </>
    );
};
