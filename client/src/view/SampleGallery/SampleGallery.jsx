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
    
    if (imagenActiva === index) {
      setImagenActiva(null);
    } else {
      setImagenActiva(index);
    }
  };

  return (
    <section className={style.container}>
      <h2>Algunos trabajos</h2>

      <section>
        {imgSampleGallery.map((img, index) => {
          return (
            <img
              key={img.id}
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
    </section>
  );
};

export default SampleGallery;
