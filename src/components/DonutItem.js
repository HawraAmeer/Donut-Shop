import styles from "../styles";

const DonutItem = (props) => {
  return (
    <div style={styles.donut}>
      <img
        src={props.donut.image}
        style={styles.donutImage}
        alt={props.donut.name}
      />
      <h3>{props.donut.name}</h3>
      <p style={styles.text}>{`Price: ${props.donut.price} BD / Piece`}</p>
    </div>
  );
};

export default DonutItem;
