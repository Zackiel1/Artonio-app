import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";

const CardsContainer = (props) => {
  const images = useSelector((state) => state.images);

  return (
    <div>
      {images.map((i) => {
        return (
          <Card
            key={i.id}
            id={i.id}
            url={i.url}
            name={i.name}
            filename={i.filename}
            description={i.description}
            ekis={props.ekis}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
