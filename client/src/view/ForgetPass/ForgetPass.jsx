import { useEffect, useState } from "react";
import style from "./ForgetPass.module.css";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage, postForgetPass } from "../../redux/actions";
import { showAlertError, showAlertSuccess } from "../../services/showAlert";
import { useNavigate } from "react-router-dom";

const ForgetPass = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [emailState, setEmailState] = useState({
    email: "",
  });

  const messageSuccess = useSelector((state) => state.messageSuccess);
  const messageError = useSelector((state) => state.messageError);

  useEffect(() => {
    if (messageSuccess !== null) {
      showAlertSuccess(messageSuccess);
      dispatch(clearMessage());
      navigate("/");
    }
  }, [messageSuccess]);

  useEffect(() => {
    if (messageError !== null) {
      showAlertError(messageError);
      dispatch(clearMessage());
    }
  }, [messageError]);

  const handlerChange = (event) => {
    let property = event.target.name;
    let value = event.target.value;

    setEmailState({ ...emailState, [property]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    dispatch(postForgetPass(emailState));
  };

  return (
    <main className={style.container}>
      <section className={style.section}>
        <h2 className={style.tittle}>Recuperar contraseña</h2>

        <form onSubmit={handlerSubmit} className={style.form}>
          <label>Correo Electronico: </label>
          <input
            className={style.input}
            type="text"
            name="email"
            value={emailState.email}
            onChange={handlerChange}
          />

          <button type="submit" className={style.button}>
            Recuperar Contraseña
          </button>
        </form>
      </section>
    </main>
  );
};

export default ForgetPass;
