
function Item({ prod }) {
    return (
        <>
            {/* Acá se crea la card del producto */}
            <li className="product-description">
                <div className="product-image">
                   <img src={prod.img} alt={prod.name} />
                </div>
                <div className="product-info">
                    <p className="product-name">{prod.name}</p>
                    <p className="product-price">$ {prod.price}</p>
                </div>
                <button className="primary-button">Ver detalle</button>
            </li>
        </>
    )
}

export default Item;