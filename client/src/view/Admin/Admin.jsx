import axios from "axios";
import style from "../Admin/Admin.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddDiscount,
  clearMessage,
  uploadImg,
  useDiscount,
} from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { searchUser } from "../../redux/actions";
import { showAlertError, showAlertSuccess } from "../../services/showAlert";

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((state) => state.userInfo);
  const searchInfoUser = useSelector((state) => state.searchInfoUser);
  const messageSuccess = useSelector((state) => state.messageSuccess);
  const messageError = useSelector((state) => state.messageError);
  console.log(userInfo);
  useEffect(() => {
    if (messageSuccess !== null) {
      showAlertSuccess(messageSuccess.data.message);
      dispatch(clearMessage());
    }
  }, [messageSuccess]);

  useEffect(() => {
    if (messageError !== null) {
      showAlertError(messageError.data);
      dispatch(clearMessage());
    }
  }, [messageError]);

  const infoSession = userInfo ? userInfo.isAdmin : {};

  useEffect(() => {
    if (!infoSession) {
      navigate("/");
    }
  }, []);

  const [img, setImg] = useState({
    name: "",
    image: "",
    description: "",
    price: 0,
    destination: "",
  });

  const [user, setUser] = useState("");

  const [addDiscount, setAddDiscount] = useState({
    email: "",
    discount: "",
    reason: "",
  });

  const handlerChangeAddDiscount = (event) => {
    let property = event.target.name;
    let value = event.target.value;

    setAddDiscount({ ...addDiscount, [property]: value });
  };

  const handlerButtonAddDiscount = () => {
    dispatch(AddDiscount(addDiscount));

    setAddDiscount({
      email: "",
      discount: "",
      reason: "",
    });
  };

  const handlerGetUserChange = (event) => {
    const value = event.target.value;
    setUser(value);
  };

  const handlerButtonGetUser = () => {
    dispatch(searchUser(user));

    document.getElementById("search_user_input").value = "";
  };

  const handlerButtonUpdateUser = () => {
    dispatch(searchUser(user));
  };

  const handlerImgchange = (event) => {
    let property = event.target.name;
    let value = event.target.value;

    if (property === "image") {
      value = event.target.files[0];
    }

    setImg({ ...img, [property]: value });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", img.name);
    formData.append("image", img.image);
    formData.append("price", img.price);
    formData.append("destination", img.destination);
    dispatch(uploadImg(formData));

    //limpiar state img y form
    resetForm();
  };

  const resetForm = () => {
    setImg({
      name: "",
      image: "",
      description: "",
      price: 0,
      destination: "",
    });

    document.getElementById("file_input").value = "";
    document.getElementById("destination_select").selectedIndex = 0;
  };

  const handlerUserDiscount = async (email, discountId) => {
    //console.log(email, discountId);
    await dispatch(useDiscount(email, discountId));
    dispatch(searchUser(user));
  };

  return (
    <div className={style.container}>
      <form className={style.formUploadImg} onSubmit={handlerSubmit}>
        <h2>Subir Imagenes</h2>
        <div>
          <label>Img: </label>
          <input
            id="file_input"
            type="file"
            name="image"
            onChange={handlerImgchange}
            placeholder="Image"
          />
        </div>

        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={img.name}
            onChange={handlerImgchange}
            placeholder="Name"
          />
        </div>

        <div>
          <label>price: </label>
          <input
            type="text"
            name="price"
            value={img.price === 0 ? "" : img.price}
            onChange={handlerImgchange}
            placeholder="price"
          />
        </div>

        <div>
          <label>description: </label>
          <textarea
            name="description"
            id=""
            onChange={handlerImgchange}
            value={img.description}
            cols="30"
            rows="10"
          />
        </div>

        <select
          id="destination_select"
          name="destination"
          onClick={handlerImgchange}
        >
          <option value="" defaultValue>
            Tatto/Paint
          </option>
          <option value="tatto">Tatto</option>
          <option value="paint">Paint</option>
        </select>

        <button type="submit" disabled={!img.image || !img.destination}>
          Subir Img
        </button>
      </form>

      <div className={style.addDiscount}>
        <h4>Agregar Descuento</h4>
        <label>Correo: </label>
        <input
          type="text"
          name="email"
          onChange={handlerChangeAddDiscount}
          value={addDiscount.email}
        />
        <label>Descuento: </label>
        <input
          type="text"
          name="discount"
          onChange={handlerChangeAddDiscount}
          value={addDiscount.discount}
        />
        <label>motivo: </label>
        <input
          type="text"
          name="reason"
          onChange={handlerChangeAddDiscount}
          value={addDiscount.reason}
        />

        <button onClick={handlerButtonAddDiscount}>Agregar Descuento</button>
      </div>

      <div className={style.searchUser}>
        <h4>Buscar Usuario</h4>
        <label>Correo: </label>
        <input
          id="search_user_input"
          type="text"
          onChange={handlerGetUserChange}
        />
        <button onClick={handlerButtonGetUser}>Buscar Usuario</button>
        <button onClick={handlerButtonUpdateUser}>Actualizar</button>
      </div>

      {searchInfoUser ? (
        <div>
          <div className={style.info}>
            <h4>Informacion</h4>
            <p className={style.name}>Nombre: {searchInfoUser?.name}</p>
            <p className={style.email}>Correo: {searchInfoUser?.email}</p>
            <p className={style.phone}>Telefono: {searchInfoUser?.phone}</p>
            <p>Verificado: {!searchInfoUser.is_verified ? "No" : "Si"}</p>
          </div>

          <div className={style.discount}>
            <h3>descuentos</h3>
            <div>
              {searchInfoUser.discount.map((item, index) => (
                <div className={style.chillDiscount} key={index}>
                  <p>Motivo: {item.reason}</p>
                  <p>Descuento: {item.discount}</p>
                  <button
                    onClick={() =>
                      handlerUserDiscount(searchInfoUser.email, item.discountId)
                    }
                  >
                    Usar Descuento
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Admin;
