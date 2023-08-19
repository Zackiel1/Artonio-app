const Card = (props) => {
  return (
    <div>
      <img src={props.url} alt={props.name} />
      <button onClick={() => props.ekis(props.filename)}>X</button>
    </div>
  );
};

export default Card;
