import { createContext, useState } from "react";

// Se crea el contexto
export const CartContext = createContext()

//provider es el encargado de darle acceso a cada uno de los componentes, es el proveedor
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);



    // Agregar producto al carrito y contemplar que el producto no se repita
    const addItem = (item, qty) => {
        if (isInCart(item.id)) {
            //sumar cantidades del producto q se repite 
            const cartActualizado = cart.map((prod) => {
                if (item.id === prod.id) {
                    //se actualiza y suman las cantidades
                    return { ...prod, quantity: prod.quantity + qty }
                } else {
                    //los demas productos que no se repiten los retorno tal cual
                    return prod
                }
            })
            setCart(cartActualizado) //Actualizo el estado con el nuevo array
        } else {
            setCart([...cart, { ...item, quantity: qty }]); //yo aca tengo que modificar el carrito, mantener el array y agregar el item, este objeto ahora tiene la propiedad quantity
            //se agrega tambien el spread operator del estado cart (...cart,) porque si agrego un item y vuelvo hacia atras para agregar otro el valor nuevo se pisa con el viejo, en vez de mantener ambos
        }
        // console.log(item, quantity, 'parametros');
    }

    // Vaciar todo el carrito
    const clear = () => {
        setCart([])
    }

    //Eliminar un solo item del carrito
    const removeItem = (itemId) => {
        setCart(cart.filter((prod) => prod.id !== itemId))
    }

    // Verificar duplicados en el carrito
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }
    // La prop value es el valor del contexto, dentro de value esta toda la info disponible para que los componentes puedan pedir al contexto
    return (
        <CartContext.Provider value={{ cart, addItem, clear, removeItem, isInCart }}>
            {children}
        </CartContext.Provider>
    )
}



