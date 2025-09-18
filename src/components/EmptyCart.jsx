import { Link } from "react-router-dom"

export const EmptyCart = () => {
    return (
        <>
            <div className="empty-cart">
                <img src="/empty-cart-color.svg" alt="" />
                <div className="empty-cart-info">
                    <h4 className="empty-cart-title">Tu carrito de compras está vacío</h4>
                    <p className="empty-cart-copy">Te invitamos a navegar por nuestras categorías y llenarlo de cosas lindas 🙂</p>
                </div>

                <div className="empty-cart-acctions">
                <Link className="text-link" to='/'>Ir al home</Link>
                </div>
            </div>
        </>
    )
}
