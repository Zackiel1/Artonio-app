import { useDispatch } from "react-redux";
import style from "./AccountNoVerify.module.css";
import { resendVerifyMessage } from "../../redux/actions";

const AccountNoVerify = (props) => {
  const dispatch = useDispatch();

  const data = {
    email: props.userInfo.email,
    userId: props.userInfo.id,
  };

  const handlerSubmit = () => {
    dispatch(resendVerifyMessage(data));
  };

  return (
    <div className={style.container}>
      <section className={style.section}>
        <h2>No has verificado tu cuenta aun...</h2>

        <p>
          Para verificar tu cuenta tienes que darle click al link que te
          enviamos a <b>{props.userInfo.email}.</b>
          <br />
          Recuerda revisar en correo no deseado y spam.
          <br />
          <br />
          Si no te llego ningun correo de verificacion, dale al siguiente boton
          y te lo volvemos a enviar..
        </p>

        <button className={style.button} onClick={handlerSubmit}>
          Volver a enviar
        </button>
      </section>
    </div>
  );
};

export default AccountNoVerify;
