import { useState } from "react";
import { useLocation } from "react-router-dom";
import style from "./RecoverPass.module.css";
import validations from "../../services/validations";
import { getVerifyToken, putPass } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const RecoverPass = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  let userId;

  useEffect(() => {
    userId = dispatch(getVerifyToken(token));
  }, []);

  const [error, setError] = useState({});
  const [activeMsgErr, setActiveMsgErr] = useState(false);
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handlerChange = (event) => {
    let property = event.target.name;
    let value = event.target.value;

    setError(validations({ ...password, [property]: value }));
    setPassword({ ...password, [property]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();

    Object.keys(error).length !== 0
      ? setActiveMsgErr(true)
      : setActiveMsgErr(false);

    try {
      let resolvedUserId = await userId;
      let data = {
        userId: resolvedUserId,
        newPassword: password.newPassword,
      };
      let response = await dispatch(putPass(data));
      setMessage(response);
    } catch (error) {
      //setMessage(error.response.data);
      console.log(error);
    }
  };

  return (
    <div className={style.container}>
      <h2>Nueva Contraseña</h2>
      <form onSubmit={handlerSubmit}>
        <div>
          <label>Nueva contraseña</label>
          <input
            type="password"
            name="newPassword"
            onChange={handlerChange}
            value={password.newPassword}
          />
          <label>{activeMsgErr && error.newPassword}</label>
        </div>
        <div>
          <label>Repite la contraseña</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handlerChange}
            value={password.confirmPassword}
          />
          <label>{activeMsgErr && error.confirmPassword}</label>
        </div>

        <button type="submit">Cambiar Pass</button>

        {error.differentPassword && <p>{error.differentPassword}</p>}
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RecoverPass;
