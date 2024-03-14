import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import style from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage, postContact } from "../../redux/actions";
import { useEffect } from "react";
import { showAlertError, showAlertSuccess } from "../../services/showAlert";

const Contact = () => {
  const dispatch = useDispatch();

  const messageSuccess = useSelector((state) => state.messageSuccess);
  const messageError = useSelector((state) => state.messageError);

  useEffect(() => {
    if (messageSuccess !== null) {
      showAlertSuccess(messageSuccess);
    }
    dispatch(clearMessage("messageSuccess"));
    setMessage({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }, [messageSuccess]);

  useEffect(() => {
    if (messageError !== null) {
      showAlertError(messageError);
    }
    dispatch(clearMessage("messageError"));
  }, [messageError]);

  const [message, setMessage] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handlerChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setMessage({ ...message, [property]: value})
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    if(!message.email){
      showAlertError("debes poner un Correo Electronio");
    } else if(message.email) {
      dispatch(postContact(message));
    }
    
  }

  return (
    <div className={style.container}>
      <h2>Conctacto</h2>

      <div className={style.contactWapper}>
        <div className={style.contactForm}>
          <form onSubmit={handlerSubmit}>
            <p>
              <label>Nombre</label>
              <input type="text" name="name" value={message.name} onChange={handlerChange}/>
            </p>
            <p>
              <label>Correo Electronico</label>
              <input type="email" name="email" value={message.email} onChange={handlerChange}/>
            </p>
            <p>
              <label>Telefono</label>
              <input type="text" name="phone" value={message.phone} onChange={handlerChange}/>
            </p>
            <p>
              <label>Asunto</label>
              <input type="text" name="subject" value={message.subject} onChange={handlerChange}/>
            </p>
            <div className={style.block}>
              <label>Mensaje</label>
              <textarea name="message" rows="5" value={message.message} onChange={handlerChange}></textarea>
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
