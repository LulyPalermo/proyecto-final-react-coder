import { Link } from "react-router-dom"

export const EmptyCart = () => {
    return (
        <>
            <div className="empty-cart">
                <img src="/public/empty-cart-color.svg" alt="" />
                <div className="empty-cart-info">
                    <h3 className="empty-cart-title">Tu carrito de compras está vacío</h3>
                    <p className="empty-cart-copy">Te invitamos a navegar por nuestras categorías y llenarlo de cosas lindas 🙂</p>
                </div>

                <div className="empty-cart-acctions">
                <Link className="primary-button" to='/'>Ir al home</Link>
                </div>
            </div>
        </>
    )
}
