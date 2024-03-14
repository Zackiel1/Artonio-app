import style from "./SpanRedes.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faTiktok,
  faSquareFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SpanRedes = () => {
  return (
    <div className={style.container}>
      <h3>Redes Sociales</h3>
      <section className={style.networks}>
          <Link
            to="https://www.instagram.com/artoniotattoo/?hl=es"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffd300" }} />
          </Link>

          <Link
            to="https://www.instagram.com/artoniotattoo/?hl=es"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faSquareFacebook}
              style={{ color: "#ffd300" }}
            />
          </Link>

          <Link
            to="https://www.instagram.com/artoniotattoo/?hl=es"
            target="_blank"
          >
            <FontAwesomeIcon icon={faXTwitter} style={{ color: "#ffd300" }} />
          </Link>

          <Link
            to="https://www.instagram.com/artoniotattoo/?hl=es"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTiktok} style={{ color: "#ffd300" }} />
          </Link>

          <Link to="https://wa.me/[+541134198811]" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#ffd300" }} />
          </Link>

          <Link to="mailto:artonio@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffd300" }} />
          </Link>
        </section>

    </div>
  );
};

export default SpanRedes;
