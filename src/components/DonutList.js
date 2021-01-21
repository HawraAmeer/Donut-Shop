import styles from "../styles";
import donuts from "../donuts";
import DonutItem from "./DonutItem";

const DonutList = () => {
  const donutList = donuts.map((donut) => (
    <DonutItem key={donut.id} donut={donut} />
  ));

  return <div style={styles.list}>{donutList}</div>;
};

export default DonutList;
