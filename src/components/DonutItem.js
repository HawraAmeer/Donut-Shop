import { Donut } from "../styles";

const DonutItem = (props) => {
  return (
    <Donut>
      <img src={props.donut.image} alt={props.donut.name} />
      <h3>{props.donut.name}</h3>
      <p className="donut-price">{`Price: ${props.donut.price} BD / Piece`}</p>
    </Donut>
  );
};

export default DonutItem;
