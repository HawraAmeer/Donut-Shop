import { GlobalStyle } from "./styles";
import Home from "./components/Home";
import DonutList from "./components/DonutList";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "maroon", // main font color
  backgroundColor: "pink", // main background color
  otherColor: "brown",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <DonutList />
    </ThemeProvider>
  );
}

export default App;
