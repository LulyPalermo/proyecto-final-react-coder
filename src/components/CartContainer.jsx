import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { EmptyCart } from "./EmptyCart"
import { CartView } from "./CartView"
import { IoIosCloseCircle } from "react-icons/io";

export const CartContainer = () => {

    const { cart } = useContext(CartContext)
    return (
        <>
            <div id="cart">
                <div className="cart-header">
                    <h2>Carrito de compras</h2>
                    <div className="close-cart">
                        <IoIosCloseCircle />
                    </div>
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
