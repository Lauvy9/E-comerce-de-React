import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <p>Derechos Reservados © 2025 - E-Shop.</p>
            <div className="footer-items-container">
                <a href="https://www.facebook.com/" target="_blank">
                    <img src="/img/common/logo-facebook.png" alt="logo-facebook" />
                </a>

                <a href="https://www.instagram.com/" target="_blank">
                    <img src="/img/common/logo-instagram.png" alt="logo-instagram" />
                </a>

                <a href="https://www.whatsapp.com/?lang=es_LA" target="_blank">
                    <img src="/img/common/logo-whatsapp.png" alt="logo-whatsapp" />
                </a>
            </div>
        </footer>
    );
}
export default Footer;