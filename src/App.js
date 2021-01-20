import photo from "./Pink-Donut.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Donut Shop</h1>
        <h3>Where you can customize your Donut!</h3>
        <img src={photo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
