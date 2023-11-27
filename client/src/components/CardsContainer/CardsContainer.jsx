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
import tatto from "./tatto";

const CardsContainer = (props) => {
  // const tatto = props.tatto;
  // const paint = props.paint;

  let paint = [
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

  useEffect(() => {
    setCurrent(tatto);
  }, [tatto]);

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
