import photo from "./Pink-Donut.png";

import products from "./products";

const styles = {
  body: { backgroundColor: "pink" },
  donut: { margin: "20px" },
  donutImage: { width: "200px", height: "150px" },
  list: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    color: "maroon",
    textAlign: "center",
  },
  shopImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },
  text: { textAlign: "center", color: "maroon" },
};

function App() {
  const productsList = products.map((product) => {
    return (
      <div style={styles.donut}>
        <img src={product.image} style={styles.donutImage} alt={product.name} />
        <h3>{product.name}</h3>
        <p style={styles.text}>{`Price: ${product.price} BD / Piece`}</p>
      </div>
    );
  });

  return (
    <div style={styles.body}>
      <h1 style={styles.text}>Welcome to Donut Shop</h1>
      <h3 style={styles.text}>Pick up your Favorite Donut!</h3>
      <img src={photo} style={styles.shopImage} alt="Donut!" />
      <div style={styles.list}>{productsList}</div>
    </div>
  );
}

export default App;
