import styles from "./styles";
import Home from "./components/Home";
import DonutList from "./components/DonutList";

function App() {
  return (
    <div style={styles.body}>
      <Home />
      <div style={styles.list}>
        <DonutList />
      </div>
    </div>
  );
}

export default App;
