import { useState } from "react";
import style from "./SampleGallery.module.css";
import { Link } from "react-router-dom";

const SampleGallery = () => {
  const [imagenActiva, setImagenActiva] = useState(null);

  let images = [
    {
      id: 8,
      name: "Cucui",
      nameCloud: "vdnz140q7pgnrzz4zkdf",
      imageUrl:
        "https://res.cloudinary.com/artonio/image/upload/v1694005287/vdnz140q7pgnrzz4zkdf.jpg",
      description: "Ave CUCUI en puntillismo",
      price: 0,
      destination: "tatto",
      createdAt: "2023-09-06T13:01:28.564Z",
      updatedAt: "2023-09-06T13:01:28.564Z",
    },
    {
      id: 9,
      name: "Copa del Mundo",
      nameCloud: "o2zmvyc6shl9npe6berw",
      imageUrl:
        "https://res.cloudinary.com/artonio/image/upload/v1694005352/o2zmvyc6shl9npe6berw.jpg",
      description: "Gano Argentina papá",
      price: 0,
      destination: "tatto",
      createdAt: "2023-09-06T13:02:33.489Z",
      updatedAt: "2023-09-06T13:02:33.489Z",
    },
    {
      id: 10,
      name: "Qloq",
      nameCloud: "corckpxeyi2ivqajsmao",
      imageUrl:
        "https://res.cloudinary.com/artonio/image/upload/v1694005376/corckpxeyi2ivqajsmao.jpg",
      description: "",
      price: 0,
      destination: "tatto",
      createdAt: "2023-09-06T13:02:57.441Z",
      updatedAt: "2023-09-06T13:02:57.441Z",
    },
    {
      id: 11,
      name: "Corazon",
      nameCloud: "ap2ziml7pkzughed6qob",
      imageUrl:
        "https://res.cloudinary.com/artonio/image/upload/v1694005407/ap2ziml7pkzughed6qob.jpg",
      description: "Corazon de seda, que no lo quiere cualquiera. Ozuna",
      price: 0,
      destination: "tatto",
      createdAt: "2023-09-06T13:03:28.452Z",
      updatedAt: "2023-09-06T13:03:28.452Z",
    },
    {
      id: 20,
      name: "Flora",
      nameCloud: "mnj2jhsnipbdvhnovviy",
      imageUrl:
        "https://res.cloudinary.com/artonio/image/upload/v1694119699/mnj2jhsnipbdvhnovviy.jpg",
      description: "",
      price: 0,
      destination: "tatto",
      createdAt: "2023-09-07T20:48:19.565Z",
      updatedAt: "2023-09-07T20:48:19.565Z",
    },
  ];

  const handlerImg = (index) => {
    if (imagenActiva === index) {
      setImagenActiva("");
    } else {
      setImagenActiva(index);
    }
  };

  return (
    <div className={style.container}>
      <h2>Ultimos trabajos</h2>

      <section>
        {images.map((img, index) => {
          return (
            <img
              className={`${style.img} ${
                imagenActiva === index ? style.active : ""
              }`}
              onClick={() => handlerImg(index)}
              src={img.imageUrl}
              alt={img.name}
            />
          );
        })}
      </section>

      <p>
        Mira mas diseños <Link to="/gallery">Aqui...</Link>
      </p>
    </div>
  );
};

export default SampleGallery;
