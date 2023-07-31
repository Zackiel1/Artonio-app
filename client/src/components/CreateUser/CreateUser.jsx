import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postCreateUser, clearMessage } from "../../redux/actions";
import { useLocation } from "react-router-dom";
import validations from "../../services/validations";

const CreateUser = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [message, setMessage] = useState("");
  const [error, setError] = useState({});

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
    <div>
      <h4>Crear Usuario</h4>

      <form onSubmit={handlerSubmit}>
        <div>
          <label>Nombre: </label>
          <input
            type="text"
            name="name"
            onChange={handlerChange}
            value={createUser.name}
            placeholder="Nombre"
          />
          <label>{error.name}</label>
        </div>
        <div>
          <label>Email: </label>
          <input
            type="text"
            name="email"
            onChange={handlerChange}
            value={createUser.email}
            placeholder="Email"
          />
          <label>{error.email}</label>
        </div>
        <div>
          <label>Contraseña: </label>
          <input
            type="password"
            name="password"
            onChange={handlerChange}
            value={createUser.password}
            placeholder="Contraseña"
          />
          <label>{error.password}</label>
        </div>

        <div>
          <label>Telefono: </label>
          <input
            type="text"
            name="phone"
            onChange={handlerChange}
            value={createUser.phone}
            placeholder="Telefono"
          />
        </div>

        <button type="submit">Crear Cuenta</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateUser;
