import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import style from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className={style.container}>
      <h2>Conctacto</h2>

      <div className={style.contactWapper}>
        <div className={style.contactForm}>
          <form>
            <p>
              <label>Nombre</label>
              <input type="text" name="name" />
            </p>
            <p>
              <label>Correo Electronico</label>
              <input type="email" name="email" />
            </p>
            <p>
              <label>Telefono</label>
              <input type="text" name="phone" />
            </p>
            <p>
              <label>Asunto</label>
              <input type="text" name="subject" />
            </p>
            <div className={style.block}>
              <label>Mensaje</label>
              <textarea name="message" rows="8"></textarea>
            </div>
            <button className={style.button} type="submit">
              Enviar
            </button>
          </form>
        </div>

        <div className={style.contactInfo}>
          <h4>Mas info</h4>

          <ul>
            <li>
              <FontAwesomeIcon icon={faLocationDot} />
              San Martin
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              +5411-3419-8811
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              Artonio@tatto.com
            </li>
          </ul>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            cumque excepturi voluptatibus eveniet alias. Suscipit dignissimos
            voluptatum et magni ex.
          </p>
          <p>Artonio.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
