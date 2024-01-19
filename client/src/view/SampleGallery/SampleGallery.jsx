import { useState } from "react";
import style from "./SampleGallery.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SampleGallery = () => {
  const [imagenActiva, setImagenActiva] = useState(null);

  const tatto = useSelector((state) => state.tatto);

  const tattoFav = tatto.filter((tatto) => tatto.isFavorite == true);
  const imgSampleGallery = tattoFav.slice(0, 10);

  const handlerImg = (index) => {
    // console.log(index);
    // console.log(imagenActiva);
    if (imagenActiva === index) {
      setImagenActiva("");
    } else {
      setImagenActiva(index);
    }
  };

  return (
    <div className={style.container}>
      <h2>Algunos trabajos</h2>

      <section>
        {imgSampleGallery.map((img, index) => {
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
