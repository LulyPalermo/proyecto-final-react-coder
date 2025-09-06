import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";

export const CartView = () => {
    const { cart, removeItem, clear } = useContext(CartContext);

    return (
        <div className="cart-detail">
            {
                cart.map((compra) => (
                    <div className="cart-item" key={compra.id}>
                        <img src={compra.img[0]} alt={compra.name} />
                        <p className="cart-item-name">{compra.name}</p>
                        {/* <p>Cant: {compra.quantity}</p> */}

                        <div className="cart-item-quantity">
                            <span className="remove-item">
                                <IoMdRemove />
                            </span>
                            <p>{compra.quantity}</p>
                            <span className="add-item">
                                <IoMdAdd />
                            </span>
                        </div>

                        <p className="cart-item-price">$ {compra.quantity * compra.price}</p>
                        <button className="cart-remove-item" onClick={() => removeItem(compra.id)}> <span><RiDeleteBinLine /></span>
                        </button>
                    </div>
                ))
            }

            {/* Aca iria la logica con el total a pagar con context */}
            <div className="cart-footer">
                <div className="cart-price">
                    <p>Subtotal: $</p>
                    <p>Total con impuestos: $</p>
                </div>
                <div className="cart-actions">
                    <button className="secondary-button" onClick={clear}>Vaciar carrito</button>
                    <button className="primary-button">Finalizar compra</button>
                </div>
            </div>
        </div>
    )
}
