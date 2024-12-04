import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faTiktok,
  faSquareFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import logoFooter from "../../images/logo-artonio-blanco.png"

const Footer = () => {
  return (
    <footer className={style.container}>
      <div className={style.setionsFooter}>
        <section className={style.links}>
          <Link to={{ pathname: "/", hash: "#home" }}>Inicio</Link>
          <Link to={{ pathname: "/", hash: "#about" }}>Quien Soy</Link>
          <Link to="/gallery">Galeria</Link>
          <Link to={{ pathname: "/", hash: "#contact" }}>Contacto</Link>
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
              to="https://www.instagram.com/artoniotattoo/?hl=es"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faSquareFacebook}
                style={{ color: "#fdfefe" }}
              />
            </Link>

            <Link
              to="https://www.instagram.com/artoniotattoo/?hl=es"
              target="_blank"
            >
              <FontAwesomeIcon icon={faXTwitter} style={{ color: "#fdfefe" }} />
            </Link>

            <Link
              to="https://www.instagram.com/artoniotattoo/?hl=es"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTiktok} style={{ color: "#fdfefe" }} />
            </Link>

            <Link to="https://wa.me/[+541134198811]" target="_blank">
              <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#fdfefe" }} />
            </Link>

            <Link to="mailto:artonio@gmail.com" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#fdfefe" }} />
            </Link>
          </div>
          <span className={style.copyright}>© 2024 ArtonioTatto.com</span>
        </section>

        {/* <section className={style.logo}>
        </section> */}

        <img src={logoFooter} className={style.logo} alt="logo" />
      </div>

    </footer>
  );
};

export default Footer;
