import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";

export const CartView = () => {
    const { cart, removeItem, clear, cartTotal, totalEnvIncl, incrementQuantity, decrementQuantity } = useContext(CartContext);

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [showConfirmModal, setShowConfirmModal] = useState(false);


    const handleIncrement = (item) => {
        const success = incrementQuantity(item.id);
        if (!success) {
            setModalMessage(`No hay más stock disponible para el producto ${item.name}.`);
            setShowModal(true);
        }
    };

    const handleClearCart = () => {
        setShowConfirmModal(true);
    };

    const confirmClearCart = () => {
        clear();
        setShowConfirmModal(false);
    };

    const cancelClearCart = () => {
        setShowConfirmModal(false);
    };


    return (
        <>
            <div className="cart-detail">
                <div className="cart-items">
                    <div className="cart-item-header">
                        <p className="cart-item-name">Producto</p>
                        <p className="cart-item-price">Precio</p>
                        <p className="cart-item-quantity-header">Cantidad</p>
                        <p className="cart-item-total-price-header">Precio Total</p>
                    </div>

                    {
                        cart.map((compra) => (
                            <div className="cart-item" key={compra.id}>
                                <img src={compra.img[0]} alt={compra.name} />
                                <p className="cart-item-name">{compra.name}</p>
                                {/* <p>Cant: {compra.quantity}</p> */}

                                <p className="cart-item-price">$ {compra.price}</p>

                                <div className="cart-item-quantity">
                                    <span className="remove-item" onClick={() => decrementQuantity(compra.id)}>
                                        <IoMdRemove />
                                    </span>
                                    <p className="quantity-item">{compra.quantity}</p>
                                    <span className="add-item" onClick={() => handleIncrement(compra)}>
                                        <IoMdAdd />
                                    </span>

                                </div>

                                <p className="cart-item-total-price">$ {compra.quantity * compra.price}</p>
                                <button className="cart-remove-item" onClick={() => removeItem(compra.id)}> <span><RiDeleteBinLine /></span>
                                </button>
                            </div>
                        ))
                    }
                </div>

                {/* Total a pagar con context */}
                <div className="order-summary">
                    <h3 className="order-summary-title">Resumen de la compra</h3>
                    <div className="order-summary-detail">
                        <div className="order-summary-price">
                            <div className="order-summary-subtotal">
                                <p>Subtotal:</p>
                                <p>$ {cartTotal()}</p>
                            </div>
                            <div className="order-summary-subtotal">
                                <p>Envío:</p>
                                <p>$ 200</p>
                            </div>
                            <div className="order-summary-total">
                                <p>Total con impuestos:</p>
                                <p>$ {totalEnvIncl()}</p>
                            </div>
                        </div>
                        <div className="order-summary-actions">
                            <button className="secondary-button" onClick={handleClearCart}>Vaciar carrito</button>
                            <Link to="/checkout" className="primary-button">Ir al checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && (
                <Modal
                    message={modalMessage}
                    onClose={() => setShowModal(false)}
                />
            )}

            {showConfirmModal && (
                <Modal
                    message="¿Estás seguro de que querés vaciar el carrito?"
                    onClose={cancelClearCart}
                    onConfirm={confirmClearCart}
                    showConfirmButtons={true}
                />
            )}
        </>
    )
}
