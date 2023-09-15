import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";
import style from "../CardsContainer/CardsContainer.module.css";
import { useEffect, useState } from "react";

const CardsContainer = (props) => {
  const tatto = useSelector((state) => state.tatto);
  const paint = useSelector((state) => state.paint);

  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    if (props.galleryState === "tatto") {
      setCurrent(tatto);
    } else {
      setCurrent(paint);
    }
  }, [props.galleryState]);

  const handlerOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const closeImg = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(current.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === current.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div className={style.container}>
      {openModal && (
        <div className={style.fullImage}>
          <FontAwesomeIcon
            onClick={prevSlide}
            icon={faChevronLeft}
            className={`${style.iconArrow} ${style.arrowLeft}`}
          />

          <img src={current[slideNumber].imageUrl} />

          <FontAwesomeIcon
            onClick={nextSlide}
            icon={faChevronRight}
            className={`${style.iconArrow} ${style.arrowRight}`}
          />

          <FontAwesomeIcon
            onClick={closeImg}
            icon={faXmark}
            className={style.iconClose}
          />
        </div>
      )}

      {props.galleryState === "tatto"
        ? tatto.map((img, index) => {
            return (
              <div key={index} onClick={() => handlerOpenModal(index)}>
                <Card
                  key={img.id}
                  id={img.id}
                  imageUrl={img.imageUrl}
                  name={img.name}
                  description={img.description}
                />
              </div>
            );
          })
        : paint.map((img, index) => {
            return (
              <div key={index} onClick={() => handlerOpenModal(index)}>
                <Card
                  key={img.id}
                  id={img.id}
                  imageUrl={img.imageUrl}
                  name={img.name}
                  description={img.description}
                />
              </div>
            );
          })}
    </div>
  );
};

export default CardsContainer;
