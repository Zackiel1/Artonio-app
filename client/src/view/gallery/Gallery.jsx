import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImg } from "../../redux/actions";
import CardsContainer from "../../components/CardsContainer/CardsContainer";

const Gallery = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImg());
  }, []);

  const ekis = (e) => {
    console.log(e);
  };
  return (
    <div>
      soy gallery
      <div>
        <CardsContainer ekis={ekis} />
      </div>
    </div>
  );
};

export default Gallery;
