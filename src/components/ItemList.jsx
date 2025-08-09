import Item from "./Item"

export const ItemList = ({ products }) => {
    return (
        <ul className="products-grid">
            {products.map((prod) => <Item key={prod.id} prod={prod}/>
            )}
        </ul>
    )
}
