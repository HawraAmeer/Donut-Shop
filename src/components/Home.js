import styles from "../styles";
import photo from "../Pink-Donut.png";

const Home = (props) => {
  return (
    <div style={styles.body}>
      <h1 style={styles.text}>Welcome to Donut Shop</h1>
      <h3 style={styles.text}>Pick up your Favorite Donut!</h3>
      <img src={photo} style={styles.shopImage} alt="Donut!" />
    </div>
  );
};

export default Home;
