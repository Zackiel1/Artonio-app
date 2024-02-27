import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { postLogin } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import style from "./Login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //pegao en login solucionar.............
  //const userInfo = useSelector((state) => state.userInfo);
  //const userInfos = JSON.parse(localStorage.userInfo);
  //console.log(userInfo);

  const urlParams = new URLSearchParams(window.location.search);
  const serializedUser = urlParams.get('userGoogle'); 
  window.localStorage.setItem("userInfo", serializedUser);

  let userOnline = localStorage.userInfo;

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
      navigate("/");
    } catch (error) {
      //console.log(error);
      setMessage(error.response.data);
    }
  };

  useEffect(() => {
    if (userOnline !== undefined) {
      navigate("/");
    }
  }, [userOnline]);

  return (
    <main className={style.container}>
      <section className={style.section}>
        <form className={style.form} onSubmit={handlerSubmit}>
          <h2>Inicia Sesion</h2>
          <p>
            <label>Correo Electronico</label>
            <input
              className={style.input}
              type="text"
              name="email"
              value={user.email}
              onChange={handlerChange}
              placeholder="Correo Electronico"
            />
          </p>
          <p>
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              className={style.input}
              value={user.password}
              onChange={handlerChange}
              placeholder="Contraseña"
            />
          </p>

          <Link to="/createUser">Crear Usuario</Link>
          <Link to="/forgetPass">¿Olvidaste tu contraseña?</Link>

          <button type="submit">Iniciar</button>
        </form>

        {message && <p className={style.message}>{message}</p>}
      </section>
    </main>
  );
};

export default Login;
