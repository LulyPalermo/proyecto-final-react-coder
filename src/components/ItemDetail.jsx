export const ItemDetail = ({ product }) => {
    return (
        <div className="product-detail">
            <div className="product-detail-img">
                <img src={product.img} alt={product.name} />
            </div>
            <div className="product-detail-info">
                <h2 className="product-detail-name">{product.name}</h2>
                <p className="product-detail-price">$ {product.price}.00</p>
                <div className="product-detail-description">
                    <p>Descripción</p>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    );
};
