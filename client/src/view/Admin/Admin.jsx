import axios from "axios";
import style from "../Admin/Admin.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadImg } from "../../redux/actions";

const Admin = () => {
  const dispatch = useDispatch();
  const [img, setImg] = useState({
    name: "",
    image: "",
    description: "",
    price: 0,
    destination: "",
  });

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
    formData.append("description", img.description);
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

  return (
    <div className={style.container}>
      <form onSubmit={handlerSubmit}>
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
    </div>
  );
};

export default Admin;
