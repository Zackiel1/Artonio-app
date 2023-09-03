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
    dispatch(uploadImg(formData));
    //limpiar state img y form
  };

  return (
    <div className={style.container}>
      <form onSubmit={handlerSubmit}>
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
          <label>Img: </label>
          <input
            type="file"
            name="image"
            onChange={handlerImgchange}
            placeholder="Image"
          />
        </div>
        <div>
          <label>price: </label>
          <input
            type="text"
            name="price"
            value={img.price}
            onChange={handlerImgchange}
            placeholder="price"
          />
        </div>
        <div>
          <label>description: </label>
          <input
            type="text"
            name="description"
            value={img.description}
            onChange={handlerImgchange}
            placeholder="description"
          />
        </div>

        <button type="submit">Subir Img</button>
      </form>
    </div>
  );
};

export default Admin;
