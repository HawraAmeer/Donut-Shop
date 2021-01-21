import { Description, ShopImage, Title } from "../styles";
import photo from "../Pink-Donut.png";

const Home = (props) => {
  return (
    <div>
      <Title>Welcome to Donut Shop</Title>
      <Description>Pick up your Favorite Donut!</Description>
      <ShopImage src={photo} alt="Donut!" />
    </div>
  );
};

export default Home;
