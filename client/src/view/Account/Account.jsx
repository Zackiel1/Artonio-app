import { useDispatch, useSelector } from "react-redux";
import { clearMessage, clearUserInfo, putPass } from "../../redux/actions";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validations from "../../services/validations";
import Cookies from "universal-cookie";
import style from "./Account.module.css";
import AccountNoVerify from "../AccountNoVerify/AccountNoVerify";

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //const userInfo = useSelector((state) => state.userInfo);
  const userInfo = JSON.parse(localStorage.userInfo);
  console.log(userInfo.is_verified);
  const discountData = userInfo.discount;

  const [message, setMessage] = useState("");
  const [error, setError] = useState({});

  const [newPass, setNewPass] = useState({
    newPassword: "",
    confirmPassword: "",
    chancePass: false,
  });

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

  const handlerLogout = async (event) => {
    event.preventDefault();

    localStorage.removeItem("userInfo");
    dispatch(clearUserInfo());
    navigate("/");
  };

  return !userInfo.is_verified ? (
    <AccountNoVerify userInfo={userInfo} />
  ) : (
    <div className={style.container}>
      <section className={style.sectionGrid}>
        <h2 className={`${style.item1}  ${style.tittle}`}>Cuenta</h2>

        {userInfo.isAdmin && (
          <Link to="/admin" className={style.admin}>
            Admin
          </Link>
        )}

        <div className={`${style.item3} ${style.info}`}>
          <h4>Informacion</h4>
          <p className={`${style.name}`}>Nombre: {userInfo?.name}</p>
          <p className={`${style.email}`}>Correo: {userInfo?.email}</p>
          <p className={`${style.phone}`}>Telefono: {userInfo?.phone}</p>
        </div>

        <div className={`${style.item6}  ${style.discount}`}>
          <h3>descuentos</h3>
          <div>
            {discountData.map((item, index) => (
              <div className={style.chillDiscount} key={index}>
                <p>Motivo: {item.reason}</p>
                <p>Descuento: {item.discount}</p>
              </div>
            ))}
          </div>
        </div>

        {!newPass.chancePass && (
          <button
            className={`${style.item7}  ${style.changePass}`}
            onClick={() => setNewPass({ ...newPass, chancePass: true })}
          >
            Cambiar contraseña
          </button>
        )}

        {newPass.chancePass && (
          <form
            className={`${style.item8}  ${style.formChangePass}`}
            onSubmit={handlerSubmit}
          >
            <div>
              <label>Nueva contraseña:</label>
              <input
                type="password"
                name="newPassword"
                onChange={handlerChange}
                value={newPass.newPassword}
                placeholder="Nueva Contraseña"
              />
              <label className={style.errorMsg}>{error.newPassword}</label>
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
              <label className={style.errorMsg}>{error.confirmPassword}</label>
            </div>
            <label className={style.errorMsg}>{comparisonPass}</label>

            <button
              type="submit"
              disabled={
                !newPass.newPassword ||
                !newPass.confirmPassword ||
                comparisonPass.length !== 0
              }
            >
              Enviar nueva contraseña
            </button>
          </form>
        )}
        {message && <p className={`${style.item9}  ${style.msg}`}>{message}</p>}

        <button
          className={`${style.item10}  ${style.logout}`}
          onClick={handlerLogout}
        >
          Cerrar Seccion
        </button>
      </section>
    </div>
  );
};

export default Account;
