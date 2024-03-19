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
import { deleteImg, isFavoriteImg } from "../../redux/actions";
import { jwtDecode } from "jwt-decode";

const CardsContainer = (props) => {
  const dispach = useDispatch();

  //const userInfo = JSON.parse(localStorage.userInfo);
  let userInfo = localStorage.userInfo
    ? JSON.parse(localStorage.userInfo)
    : null;

  const tatto = useSelector((state) => state.tatto);
  const paint = useSelector((state) => state.paint);

  //ordena las fotos asi la primera siempre sera la ultima y cada foto que agrege saldra de primero.
  const orderTatto = tatto.sort((a, b) => b.id - a.id);

  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [current, setCurrent] = useState("");
  const [payloadUser, setPayloadUser] = useState("");

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

  const handlerDeleteImg = (value) => {
    dispach(deleteImg(value));
  };

  const currentTattoFav = tatto.filter((tatto) => tatto.isFavorite == true);

  const handleAddFavorite = (value) => {
    if (currentTattoFav.length < 10) {
      dispach(isFavoriteImg({ id: value }));
    } else {
      alert("tiene ya los 8 favoritos");
    }
  };

  const handleDeleteFavorite = (value) => {
    dispach(isFavoriteImg({ id: value }));
  };

  useEffect(() => {
    if (userInfo !== null) {
      setPayloadUser(jwtDecode(userInfo.token));
    }
  }, []);

  //console.log(currentTattoFav.length);
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
        ? orderTatto.map((img, index) => {
            return (
              <div key={img.id}>
                <div key={index} onClick={() => handlerOpenModal(index)}>
                  <Card
                    key={img.id}
                    id={img.id}
                    imageUrl={img.imageUrl}
                    name={img.name}
                    nameCloud={img.nameCloud}
                    description={img.description}
                  />
                </div>

                {payloadUser.isAdmin && (
                  <div >
                    <button onClick={() => handlerDeleteImg(img.nameCloud)}>
                      Delete Img
                    </button>

                    {img.isFavorite ? (
                      <button onClick={() => handleDeleteFavorite(img.id)}>
                        ❤️
                      </button>
                    ) : (
                      <button onClick={() => handleAddFavorite(img.id)}>
                        🤍
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })
        : paint.map((img, index) => {
            return (
              <div key={img.id}>
                <div key={index} onClick={() => handlerOpenModal(index)}>
                  <Card
                    key={img.id}
                    id={img.id}
                    imageUrl={img.imageUrl}
                    name={img.name}
                    description={img.description}
                  />
                </div>
                <button onClick={() => handlerDeleteImg(img.nameCloud)}>
                  Delete Img
                </button>
              </div>
            );
          })}
    </div>
  );
};

export default CardsContainer;
