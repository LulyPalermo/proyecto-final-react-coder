import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CartContext } from "../context/CartContext"; //se importa el contexto que se quiere usar
import { useContext } from "react";

export const CartWidget = () => {

    const {cart} = useContext(CartContext);
    console.log(cart,'context');

    return (

        <div id="cart-widget">
            {/* <img src="../shopBag.png" alt="Shop bag" /> */}
            <HiOutlineShoppingBag />
            <span className="cart-badge">0</span>
        </div>
    )
}
