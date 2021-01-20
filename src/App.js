import photo from "./Pink-Donut.png";
import "./App.css";
import data from "./products";

function App() {
  const productsList = data.map((product) => {
    return (
      <td className="products">
        <img className="image" src={product.image} alt="" />
        <p>{product.name}</p>
        <p>{`${product.price} BD / Piece`}</p>
      </td>
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Donut Shop</h1>
        <h3>Pick up your Favorite Donut!</h3>
        <img src={photo} className="App-logo" alt="logo" />
      </header>
      <table className="App App-header">
        <tbody>
          <tr>{productsList}</tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
