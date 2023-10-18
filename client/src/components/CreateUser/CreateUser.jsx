import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postCreateUser, clearMessage } from "../../redux/actions";
import { useLocation } from "react-router-dom";
import validations from "../../services/validations";
import style from "./CreateUser.module.css";

const CreateUser = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [message, setMessage] = useState("");
  const [error, setError] = useState({});
  const [activeMsgErr, setActiveMsgErr] = useState(false);

  const [createUser, setCreateUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handlerChange = (event) => {
    let property = event.target.name;
    let value = event.target.value;

    setError(validations({ ...createUser, [property]: value }));
    setCreateUser({ ...createUser, [property]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();

    Object.keys(error).length !== 0
      ? setActiveMsgErr(true)
      : setActiveMsgErr(false);

    try {
      let response = await dispatch(postCreateUser(createUser));
      setMessage(response);
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  useEffect(() => {
    dispatch(clearMessage("messageSuccess"));
  }, [location.pathname]);

  return (
    <main className={style.container}>
      <section className={style.section}>
        <h4 className={style.title}>Crear Usuario</h4>

        <form onSubmit={handlerSubmit} className={style.form}>
          <div>
            <label>Nombre: </label>
            <input
              className={style.input}
              type="text"
              name="name"
              onChange={handlerChange}
              value={createUser.name}
              placeholder="Nombre"
            />
            <label className={style.error}>{activeMsgErr && error.name}</label>
          </div>
          <div>
            <label>Email: </label>
            <input
              className={style.input}
              type="text"
              name="email"
              onChange={handlerChange}
              value={createUser.email}
              placeholder="Email"
            />
            <label className={style.error}>{activeMsgErr && error.email}</label>
          </div>
          <div>
            <label>Contraseña: </label>
            <input
              className={style.input}
              type="password"
              name="password"
              onChange={handlerChange}
              value={createUser.password}
              placeholder="Contraseña"
            />
            <label className={style.error}>
              {activeMsgErr && error.password}
            </label>
          </div>

          <div>
            <label>Telefono: </label>
            <input
              className={style.input}
              type="text"
              name="phone"
              onChange={handlerChange}
              value={createUser.phone}
              placeholder="Telefono"
            />
          </div>

          <button type="submit">Crear Cuenta</button>
        </form>

        {message && <p className={style.error}>{message}</p>}
      </section>
    </main>
  );
};

export default CreateUser;
