import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postCreateUser, clearMessage } from "../../redux/actions";
import { useLocation } from "react-router-dom";

const CreateUser = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const messageUser = useSelector((state) => state.messageUser);

  const [createUser, setCreateUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handlerChange = (event) => {
    let property = event.target.name;
    let value = event.target.value;

    setCreateUser({ ...createUser, [property]: value });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    dispatch(postCreateUser(createUser));
  };

  useEffect(() => {
    dispatch(clearMessage());
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
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            onChange={handlerChange}
            value={createUser.email}
            placeholder="Email"
          />
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

      {messageUser && <p>{messageUser}</p>}
    </div>
  );
};

export default CreateUser;
