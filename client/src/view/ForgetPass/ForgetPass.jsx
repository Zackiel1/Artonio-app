import { useState } from "react";
import style from "./ForgetPass.module.css";
import validations from "../../services/validations";
import { useDispatch } from "react-redux";
import { postForgetPass } from "../../redux/actions";

const ForgetPass = () => {
  const dispatch = useDispatch();

  const [emailState, setEmailState] = useState({
    email: "",
  });

  const [error, setError] = useState({});
  const [message, setMessage] = useState("");
  const [isActive, setIsActive] = useState(true);

  const handlerChange = (event) => {
    let property = event.target.name;
    let value = event.target.value;

    setError(validations({ ...emailState, [property]: value }));
    setEmailState({ ...emailState, [property]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();

    try {
      let response = await dispatch(postForgetPass(emailState));
      setIsActive(false);
      setMessage(response);
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  return (
    <main className={style.container}>
      <section>
        <h2>Recuperar contraseña</h2>

        {isActive && (
          <form onSubmit={handlerSubmit}>
            <div>
              <label>Correo Electronico: </label>
              <input
                type="email"
                name="email"
                value={emailState.email}
                onChange={handlerChange}
              />
            </div>

            <button type="submit">Recuperar Contraseña</button>
          </form>
        )}

        {message && <p>{message}</p>}
      </section>
    </main>
  );
};

export default ForgetPass;
