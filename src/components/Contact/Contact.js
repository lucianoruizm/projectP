import { FaInstagram, FaFacebook } from "react-icons/fa";
import './Contact.css';

const Contact = () => {

    return(
    <div className="contact-section">
        Nos podes encontrar en: San Bernardo, La Costa. Tucuman 2943.
        <div className="social-media-container">
            <a href="https://www.instagram.com/mibebep/" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-media-icons ig-icon" /></a>
            <a href="https://www.facebook.com/fabrizzio.panalera" target="_blank" rel="noopener noreferrer"><FaFacebook className="social-media-icons fb-icon"/></a>
        </div>
    </div>
    )
}

export default Contact;