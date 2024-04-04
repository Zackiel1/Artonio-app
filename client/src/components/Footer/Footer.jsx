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
          <Link
            to="https://www.instagram.com/artoniotattoo/?hl=es"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#000000" }} />
          </Link>

          <Link
            to="https://www.instagram.com/artoniotattoo/?hl=es"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faSquareFacebook}
              style={{ color: "#000000" }}
            />
          </Link>

          <Link
            to="https://www.instagram.com/artoniotattoo/?hl=es"
            target="_blank"
          >
            <FontAwesomeIcon icon={faXTwitter} style={{ color: "#000000" }} />
          </Link>

          <Link
            to="https://www.instagram.com/artoniotattoo/?hl=es"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTiktok} style={{ color: "#000000" }} />
          </Link>

          <Link to="https://wa.me/[+541134198811]" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#000000" }} />
          </Link>

          <Link to="mailto:artonio@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#000000" }} />
          </Link>
        </section>

        <section className={style.logo}>
          <img src="/../../../images/artonio-negro.png" alt="logo Artonio" />
        </section>
      </div>

      <span className={style.copyright}>© 2023 ArtonioTatto.com</span>
    </footer>
  );
};

export default Footer;
