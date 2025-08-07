import GlobalStyles from "../../assets/styles/global";
import { Container } from "./styles";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Header from "components/Header";
import Routes from "../../Routes";
import ToastContainer from "components/Toast/ToastContainer";

import defaultTheme from "../../assets/styles/themes/default";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ToastContainer />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
