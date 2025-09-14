import { createContext, useEffect, useState } from "react";

// Se crea el contexto
export const CartContext = createContext()

//provider es el encargado de darle acceso a cada uno de los componentes, es el proveedor
export const CartProvider = ({ children }) => {

    // Se inicializa con lo que haya en localStorage (si es que hay algo)
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Cada vez que cambia el carrito, se guarda en localStorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Agregar producto al carrito y contemplar que el producto no se repita
    const addItem = (item, qty) => {

        const existingItem = cart.find((prod) => prod.id === item.id);
        const currentQuantity = existingItem ? existingItem.quantity : 0;

        // Validación para no superar el stock
        if (currentQuantity + qty > item.stock) {
            return false;
        }

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
        return true;
    };

    // Vaciar todo el carrito y limpiar localStorage
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

    //Sumar cantidad de productos 
    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity, 0)
    }

    //Total del carrito
    const cartTotal = () => {
        return cart.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0)
    }

    //Total con impuestos
    const totalEnvIncl = () => {
        return cartTotal() + 200;
    }

    // Aumentar cantidad de un producto dentro del carrito
    const incrementQuantity = (itemId) => {
        let success = true;

        const updatedCart = cart.map((item) => {
            if (item.id === itemId) {
                if (item.quantity >= item.stock) {
                    success = false;
                    return item;
                }
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });

        setCart(updatedCart);
        return success;
    };

    // Disminuir cantidad de un producto dentro del carrito (mínimo 1)
    const decrementQuantity = (itemId) => {
        const updatedCart = cart.map((item) => {
            if (item.id === itemId && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCart(updatedCart);
    }

    // La prop value es el valor del contexto, dentro de value esta toda la info disponible para que los componentes puedan pedir al contexto
    return (
        <CartContext.Provider value={{ cart, addItem, clear, removeItem, isInCart, cartQuantity, cartTotal, totalEnvIncl, incrementQuantity, decrementQuantity }}> {children}</CartContext.Provider>
    )
}



