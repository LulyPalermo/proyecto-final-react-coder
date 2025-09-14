import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { EmptyCart } from "./EmptyCart"
import { CartView } from "./CartView"
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export const CartContainer = () => {

    const { cart } = useContext(CartContext);


    return (
        <>
            <div id="cart">
                <div className="cart-header">
                    <h2 className="product-detail-name">Carrito de compras</h2>

                    <Link to="/" className="link-back">
                        <span><IoIosArrowBack /></span>
                        <span>Volver al inicio</span>
                    </Link>
                </div>


                <div className="cart-content">
                    {!cart.length
                        ? <EmptyCart />
                        : <CartView />
                    }
                </div>
            </div>
        </>
    )
}
