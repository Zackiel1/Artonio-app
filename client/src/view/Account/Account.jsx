import { useDispatch, useSelector } from "react-redux";
import { clearMessage, putPass } from "../../redux/actions";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import validations from "../../services/validations";
import Cookies from "universal-cookie";

//tengo que implementas contraseña actual y verificar bien lo de si coinsiden las contraseñas

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((state) => state.userInfo);

  const [message, setMessage] = useState("");
  const [error, setError] = useState({});

  const [newPass, setNewPass] = useState({
    newPassword: "",
    confirmPassword: "",
    chancePass: false,
  });

  useEffect(() => {
    if (userInfo === null) {
      navigate("/");
    }
  }, [userInfo]);

  const handlerChange = (event) => {
    let property = event.target.name;
    let value = event.target.value;

    setError(validations({ ...newPass, [property]: value }));
    setNewPass({ ...newPass, [property]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();

    let data = { userId: userInfo.id, newPassword: newPass.newPassword };

    try {
      let response = await dispatch(putPass(data));
      setMessage(response);
      setNewPass({ ...newPass, chancePass: false });
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  let comparisonPass = "";
  if (newPass.newPassword !== newPass.confirmPassword) {
    comparisonPass = "Las contraseñas no coinsiden";
  }

  const handlerLogout = (event) => {
    event.preventDefault();

    localStorage.removeItem("userInfo");
    dispatch(clearMessage("userInfo"));
  };

  return (
    <div>
      <h3>Hola {userInfo?.name}</h3>
      <h4>email: {userInfo?.email}</h4>
      {!newPass.chancePass && (
        <button onClick={() => setNewPass({ ...newPass, chancePass: true })}>
          Cambiar contraseña
        </button>
      )}

      {newPass.chancePass && (
        <form onSubmit={handlerSubmit}>
          <div>
            <label>Nueva contraseña:</label>
            <input
              type="password"
              name="newPassword"
              onChange={handlerChange}
              value={newPass.newPassword}
              placeholder="Nueva Contraseña"
            />
            <label>{error.newPassword}</label>
          </div>
          <div>
            <label>Confirma la nueva contraseña:</label>
            <input
              type="password"
              name="confirmPassword"
              onChange={handlerChange}
              value={newPass.confirmPassword}
              placeholder="repite la nueva Contraseña"
            />
            <label>{error.confirmPassword}</label>
          </div>
          <label>{comparisonPass}</label>

          <button type="submit" disabled={comparisonPass.length !== 0}>
            Enviar nueva contraseña
          </button>
        </form>
      )}
      {message && <p>{message}</p>}

      <button onClick={handlerLogout}>logout</button>
    </div>
  );
};

export default Account;
