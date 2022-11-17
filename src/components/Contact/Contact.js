import { FaInstagram, FaFacebook } from "react-icons/fa";
import './Contact.css';

export const Contact = () => {

    return(
    <div className="contact-section">
        <p>Nos podes encontrar en San Bernardo, La Costa. Tucuman 2943, </p>
        <p>O a través de nuestras redes: </p>
        <div className="social-media-container">
            <a href="https://www.instagram.com/mibebep/" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-media-icons ig-icon" /></a>
            <a href="https://www.facebook.com/fabrizzio.panalera" target="_blank" rel="noopener noreferrer"><FaFacebook className="social-media-icons fb-icon"/></a>
        </div>
    </div>
    )
}