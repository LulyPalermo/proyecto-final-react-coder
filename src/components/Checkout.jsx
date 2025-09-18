import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react"
import { db } from "../service/firebase";
import { CartContext } from "../context/CartContext";
import { EmptyCart } from "./EmptyCart";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useForm } from "react-hook-form";

export const Checkout = () => {

    const { cart, cartTotal, clear } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const { register, handleSubmit, formState: { errors, touchedFields, isSubmitted }, getValues } = useForm();
    const [purchasedItems, setPurchasedItems] = useState([]);
    const [purchaseTotal, setPurchaseTotal] = useState(0);

    const finalizarCompra = (data) => {
        console.log(data, 'data')

        let order = {
            comprador: {
                name: data.name,
                lastname: data.lastname,
                address: data.address,
                email: data.email
            },
            compras: cart,
            total: cartTotal(),
            date: serverTimestamp()
        }

        //se sube la info a firebase
        const ventas = collection(db, "orders")
        //se agrega el documento nuevo
        addDoc(ventas, order)
            .then((res) => {
                setOrderId(res.id);
                setPurchasedItems(cart); // Guardo los productos comprados para mostrarlos en el detalle de compra antes de vaciar el carrito
                setPurchaseTotal(cartTotal()); // Guardo el total antes de vaciar el carrito
                clear();
            })
            .catch((error) => console.log(error))
    }

    if (!cart.length && !orderId) {
        return (
            <>
                <section id="checkout">
                    <EmptyCart />
                </section>
            </>
        )
    }

    return (
        <>
            <section id="checkout">
                <div className="cart-header">
                    <h2 className="product-detail-name">Checkout</h2>

                    <Link to="/" className="link-back">
                        <span><IoIosArrowBack /></span>
                        <span>Volver al inicio</span>
                    </Link>
                </div>
                {
                    orderId ? (
                        <>
                            <section className="checkout-content">
                                <div className="checkout-info">
                                    <h3 className="checkout-info-title">Gracias por tu compra 🙌🏼</h3>
                                    <p className="checkout-info-copy">Recibimos correctamente tu pedido. Recibirás un correo cuando esté listo para ser enviado.</p>
                                </div>
                            </section>

                            <section className="checkout-order-detail">
                                <div className="checkout-order-title">
                                    <p>Detalle de tu compra</p>
                                </div>

                                <div className="checkout-order-number">
                                    <p>Orden N°:</p>
                                    <p className="checkout-order-copy">{orderId}</p>
                                </div>

                                {
                                    purchasedItems.map((compra) => (
                                        <div className="checkout-item-detail" key={compra.id}>
                                            <img src={compra.img[0]} alt={compra.name} />
                                            <div className="checkout-item-content">
                                                <p className="checkout-item-name">{compra.name}</p>
                                                <p className="checkout-item-price">Precio unitario: $ {compra.price}</p>
                                                <p className="checkout-item-quantity">Cantidad: {compra.quantity}</p>
                                                <p className="checkout-item-price">Precio total: $ {compra.quantity * compra.price}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                                <div className="checkout-order-total">
                                    <p>Total de la compra con envío:</p>
                                    <p>$ {purchaseTotal + 200}</p>
                                </div>
                            </section>
                        </>)
                        : (
                            <section className="checkout-content">
                                <div className="checkout-info">
                                    <h4 className="checkout-info-title">Estás a un paso de tus productos 🙌🏼</h4>
                                    <p className="checkout-info-copy">Completa el formulario con tus datos para finalizar la compra.</p>
                                </div>

                                <form className="form-checkout" onSubmit={handleSubmit(finalizarCompra)}>
                                    <div className="form-row">
                                        <label>Ingresa tu nombre:</label>
                                        <input placeholder="Nombre" type="text" name="name"
                                            {...register("name", { required: true, minLength: 3 })}
                                            className={`form-input ${errors.name && (isSubmitted || touchedFields.name) ? "input-error" : ""}`}
                                        />
                                        {errors?.name?.type === 'required' && <p className="form-error">El nombre es obligatorio</p>}
                                        {errors?.name?.type === 'minLength' && <p className="form-error">El nombre debe contener un mínimo de 3 caracteres</p>}
                                    </div>

                                    <div className="form-row">
                                        <label>Ingresa tu apellido:</label>
                                        <input placeholder="Apellido" type="text" name="lastname"
                                            {...register("lastname", { required: true })}
                                            className={`form-input ${errors.lastname && (isSubmitted || touchedFields.lastname) ? "input-error" : ""}`}
                                        />
                                        {errors?.lastname?.type === 'required' && <p className="form-error">El apellido es obligatorio</p>}

                                    </div>

                                    <div className="form-row">
                                        <label>Ingresa tu dirección:</label>
                                        <input placeholder="Dirección" type="text" name="address"
                                            {...register("address", { required: true, maxLength: 30 })}
                                            className={`form-input ${errors.address && (isSubmitted || touchedFields.address) ? "input-error" : ""}`}
                                        />
                                        {errors?.address?.type === 'required' && <p className="form-error">La dirección es obligatoria</p>}
                                        {errors?.address?.type === 'maxLength' && <p className="form-error">La dirección es demasiado larga</p>}
                                    </div>

                                    <div className="form-row">
                                        <label>Ingresa tu correo:</label>
                                        <input placeholder="Correo" type="email" name="email"
                                            {...register("email", { required: true })}
                                            className={`form-input ${errors.email && (isSubmitted || touchedFields.email) ? "input-error" : ""}`}
                                        />
                                        {errors?.email?.type === 'required' && <p className="form-error">El email es obligatorio</p>}

                                    </div>

                                    <div className="form-row">
                                        <label>Repite tu correo:</label>
                                        <input placeholder="Correo" type="email" name="second-email"
                                            {...register("secondemail", { required: true, validate: { repeatedMail: mail2 => mail2 === getValues().email } })}
                                            className={`form-input ${errors.secondemail && (isSubmitted || touchedFields.secondemail) ? "input-error" : ""}`}
                                        />
                                        {errors?.secondemail?.type === 'required' && <p className="form-error">Debes repetir tu email</p>}
                                        {errors?.secondemail?.type === 'repeatedMail' && <p className="form-error">Los mails no coinciden</p>}

                                    </div>

                                    <div className="checkout-button">
                                        <button className="primary-button" type="submit">Finalizar compra</button>
                                    </div>
                                </form>
                            </section>
                        )}
            </section>
        </>
    )
}
