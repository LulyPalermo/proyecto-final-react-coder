import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CartContext } from "../context/CartContext"; //se importa el contexto que se quiere usar
import { useContext } from "react";
import { Link } from "react-router-dom";

export const CartWidget = () => {

    const { cart, cartQuantity } = useContext(CartContext);
    // console.log(cart, 'context');

    return (
        <Link to='/cart'>
            <div id="cart-widget">
                <HiOutlineShoppingBag />
                {cart.length > 0 && (<span className="cart-badge">{cartQuantity()}</span>)}
            </div>
        </Link>
    )
}
