import { Link } from "react-router-dom"

export const ErrorComponent = () => {
    return (
        <section className="main-error">
            <img src="/empty-state-location.svg" alt="Imagen error en la página" />
            <div className="main-error-text">
                <h3>Lo sentimos</h3>
                <p>La ubicación a la que intentas acceder no existe</p>
            </div>
            <Link className="text-link" to='/'>Volver al home</Link>
        </section>
    )
}
