import { useContext, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ThemeProvider } from "styled-components";
import { CSSGeral } from "./components/estiloGeral/CSSGeral";
import { darkTheme, lightTheme, ThemeContext } from "./components/estiloGeral/theme";
import Header from "./components/header/Header";
import Cadastro from "./pages/cadastro-login/Cadastro";

function App() {
  const {mode} = useContext(ThemeContext)

  useEffect(() => {
    console.log(mode)
  }, [mode])

  return (
    <Router>
      <ThemeProvider theme={mode ? darkTheme : lightTheme}>
        <CSSGeral />
        <Header />
      </ThemeProvider>

      {/* rotas */}
      <Routes>
        <Route exact='true' path="/" ></Route>

        {/* rotas de cadastro e login */}
        <Route path="/Cadastro" element={<Cadastro />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
