import { Link } from "react-router-dom"

export const ErrorComponent = () => {
    return (
        <section className="main-error">
            <img src="/public/empty-state-location.svg" alt="Imagen error en la página" />
            <div className="main-error-text">
                <h1>Lo sentimos</h1>
                <p>La ubicación a la que intentas acceder no existe</p>
            </div>
            <Link to='/' className="primary-button">Volver al home</Link>
        </section>
    )
}
