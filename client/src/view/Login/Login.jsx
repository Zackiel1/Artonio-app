import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postLogin } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import style from "./Login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((state) => state.userInfo);

  const [message, setMessage] = useState("");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handlerChange = (event) => {
    let property = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [property]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();

    try {
      await dispatch(postLogin(user));
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  useEffect(() => {
    if (userInfo !== null) {
      navigate("/");
    }
  }, [userInfo]);

  return (
    <main className={style.container}>
      <section className={style.section}>
        <form className={style.form} onSubmit={handlerSubmit}>
          <h2>Inicia Sesion</h2>
          <p>
            <label>Correo Electronico:</label>
            <input
              className={style.input}
              type="text"
              name="email"
              value={user.email}
              onChange={handlerChange}
              placeholder="Email"
            />
          </p>
          <p>
            <label>Contraseña: </label>
            <input
              type="password"
              name="password"
              className={style.input}
              value={user.password}
              onChange={handlerChange}
              placeholder="Password"
            />
          </p>

          <Link to="/createUser">Crear Usuario</Link>
          <Link to="/forgetPass">¿Olvidaste tu contraseña?</Link>

          <button type="submit">Iniciar</button>
        </form>

        {message && <p>{message}</p>}
      </section>
    </main>
  );
};

export default Login;
