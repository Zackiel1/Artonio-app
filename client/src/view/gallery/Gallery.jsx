import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../gallery/gallery.module.css";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImg } from "../../redux/actions";
import CardsContainer from "../../components/CardsContainer/CardsContainer";

const Gallery = () => {
  const dispatch = useDispatch();
  const [galleryState, setGalleryState] = useState("tatto");
  const dataImgs = useSelector((state) => state.dataImgs);

  useEffect(() => {
    if (dataImgs.length === 0) {
      dispatch(getImg());
    }
  }, []);

  const handlerGallery = (event) => {
    setGalleryState(event.target.value);
  };

  return (
    <div className={style.container}>
      <h1>Galleria</h1>

      <div className={style.containerButton}>
        <button
          value="tatto"
          onClick={handlerGallery}
          className={
            galleryState === "tatto"
              ? style.activeTattoButton
              : style.tattoButton
          }
        >
          Tatto
        </button>
        <button
          value="paint"
          onClick={handlerGallery}
          className={
            galleryState === "paint"
              ? style.activePaintButton
              : style.paintButton
          }
        >
          Pinturas
        </button>
      </div>

      <section className={style.containerImages}>
        <CardsContainer galleryState={galleryState} />
      </section>
    </div>
  );
};

export default Gallery;
