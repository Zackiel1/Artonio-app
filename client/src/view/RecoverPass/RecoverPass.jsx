import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import style from "./RecoverPass.module.css";
import validations from "../../services/validations";
import { clearMessage, getVerifyToken, putPass } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { showAlertSuccess } from "../../services/showAlert";

const RecoverPass = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  useEffect(() => {
    dispatch(getVerifyToken(token)).then((resolvedUserId) => {
      setUserId(resolvedUserId);
    });
  }, []);

  const messageSuccess = useSelector((state) => state.messageSuccess);

  const [userId, setUserId] = useState("");
  const [error, setError] = useState({});
  const [activeMsgErr, setActiveMsgErr] = useState(false);
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState(true);

  const handlerChange = (event) => {
    let property = event.target.name;
    let value = event.target.value;

    setError(validations({ ...password, [property]: value }));
    setPassword({ ...password, [property]: value });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    let data = {
      userId: userId,
      newPassword: password.newPassword,
    };
    dispatch(putPass(data));
  };

  useEffect(() => {
    if (messageSuccess !== null) {
      showAlertSuccess(messageSuccess);
      dispatch(clearMessage());
      navigate("/");
    }
  }, [messageSuccess]);

  return (
    <main className={style.container}>
      <section className={style.section}>
        <h2 className={style.tittle}>Nueva Contraseña</h2>
        <form onSubmit={handlerSubmit} className={style.form}>
          <div>
            <label className={style.label}>Nueva contraseña</label>
            <input
              type="password"
              name="newPassword"
              className={style.input}
              onChange={handlerChange}
              value={password.newPassword || ""}
            />
          </div>
          <label>
            {error.newPassword && (
              <p className={style.message}>{error.newPassword}</p>
            )}
          </label>

          <div>
            <label className={style.label}>Repite la contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              className={style.input}
              onChange={handlerChange}
              value={password.confirmPassword || ""}
            />
          </div>
          <label>
            {error.confirmPassword && (
              <p className={style.message}>{error.confirmPassword}</p>
            )}
          </label>

          <button
            disabled={Object.keys(error).length !== 0 || password === true}
            type="submit"
            className={style.button}
          >
            Cambiar Contraseña
          </button>

          {error.differentPassword && (
            <p className={style.message}>{error.differentPassword}</p>
          )}
        </form>
        {message && <p className={style.message}>{message}</p>}
      </section>
    </main>
  );
};

export default RecoverPass;
