import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import logoFooter from "../../images/logo-artonio-blanco.png"

const Footer = () => {

  //Verifica si esta en mobile o no, para saber si lo manda al whatsapp web o al la app mobile.
  const isMobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  return (
    <footer className={style.container}>
      <div className={style.setionsFooter}>

        <section className={style.links}>
          <Link to="/">Inicio</Link>
          <Link to="/about">Quien Soy</Link>
          <Link to="/gallery">Galeria</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/createUser">Crear Cuenta</Link>
          <Link to="/login">Iniciar Sesion</Link>
        </section>

        <section className={style.networks}>
          <div className={style.networksList}>
            <Link
              to="https://www.instagram.com/artoniotattoo/?hl=es"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} style={{ color: "#fdfefe" }} />
            </Link>

            <Link
              to="https://www.tiktok.com/@artoniotattoo8"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTiktok} style={{ color: "#fdfefe" }} />
            </Link>
              
            <Link className={style.mobileWhatsapp}  to={`${isMobileRegex ? "https://wa.me/[+541128586391]" : "https://web.whatsapp.com/send?phone=+541128586391"} `} target="_blank">
              <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#fdfefe" }} />
            </Link>


            <Link to="mailto:ArtonioTatto@gmail.com" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#fdfefe" }} />
            </Link>
          </div>
          <span className={style.copyright}>© 2024 ArtonioTatto</span>
        </section>


        <img src={logoFooter} className={style.logo} alt="logo" />
      </div>

    </footer>
  );
};

export default Footer;
