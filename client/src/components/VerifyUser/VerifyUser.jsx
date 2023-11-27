import { Link, useNavigate, useParams } from "react-router-dom";
import style from "./VerifyUser.module.css";
import { useEffect, useState } from "react";
import { showAlertRedirectHome } from "../../services/showAlert";
import Swal from "sweetalert2";

const VerifyUser = () => {
  const { infoUser } = useParams();
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <section>
        <h2>Verificacion</h2>

        <p>{infoUser}</p>

        <button onClick={() => navigate("/")} className={style.button}>
          Continuar
        </button>
      </section>
    </div>
  );
};

export default VerifyUser;
