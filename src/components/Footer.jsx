import { GrDeliver } from "react-icons/gr";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { MdOutlinePayment } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


export const Footer = () => {
    return (
        <footer id="footer">
            <div className="social-media">
                <h3 className="social-media-title">Seguinos en nuestras redes sociales</h3>
                <div className="social-media-logos">
                    <AiFillInstagram />
                    <FaTiktok />
                    <FaFacebookF />
                </div>
            </div>

            <div className="footer-content">
                <div className="footer-info">
                    <GrDeliver />
                    <h5 className="footer-title">Envíos a todo el país</h5>
                    <p className="footer-copy">Recibí tu pedido sin moverte de tu casa</p>
                </div>

                <div className="footer-info">
                    <LiaExchangeAltSolid />
                    <h5 className="footer-title">Cambios y devoluciones</h5>
                    <p className="footer-copy">Realizá tus cambios o devoluciones sin cargo</p>
                </div>
                <div className="footer-info">
                    <MdOutlinePayment />
                    <h5 className="footer-title">Medios de pago</h5>
                    <p className="footer-copy">Aboná en cuotas sin interés, transferencia o efectivo</p>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright © 2025 - Lucía Palermo - Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}
