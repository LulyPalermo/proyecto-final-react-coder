import { Link } from "react-router-dom";

function Item({ prod }) {
    return (
        <>
            {/* Acá se crea la card del producto */}
            <li className="product-description">
                <div className="product-image">
                    {/* <img src={prod.img} alt={prod.name} /> */}
                    <img src={prod.img[0]} alt={prod.name} />
                </div>
                <div className="product-info">
                    <p className="product-name">{prod.name}</p>
                    <p className="product-price">$ {prod.price}</p>
                </div>                
                <Link className="primary-button" to={`/item/${prod.id}`}>Ver detalle</Link>
            </li>
        </>
    )
}

export default Item;