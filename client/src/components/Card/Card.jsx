import style from "../Card/Card.module.css";

const Card = (props) => {
  //console.log(props);

  return (
    <div key={props.id} className={style.cardCotainer}>
      <img className={style.image} src={props.imageUrl} alt={props.name} />
    </div>
  );
};

export default Card;
