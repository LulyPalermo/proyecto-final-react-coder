import { HiOutlineShoppingBag } from "react-icons/hi2";

export const CartWidget = () => {
    return (

        <div id="cart-widget">
            {/* <img src="../shopBag.png" alt="Shop bag" /> */}
            <HiOutlineShoppingBag />
            <span className="cart-badge">10</span>
        </div>
    )
}
