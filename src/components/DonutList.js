import { List } from "../styles";
import donuts from "../donuts";
import DonutItem from "./DonutItem";

const DonutList = () => {
  const donutList = donuts.map((donut) => (
    <DonutItem key={donut.id} donut={donut} />
  ));

  return <List>{donutList}</List>;
};

export default DonutList;
