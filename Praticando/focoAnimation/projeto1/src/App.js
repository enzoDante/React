import { useContext } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ThemeProvider} from 'styled-components'
import { CSSGeral } from './components/estilo/CSSGeral';
import { lightTheme, darkTheme, ThemeContexto } from './components/estilo/theme';

import Header from './components/Header';
import Cadastro from './pages/Conta/Cadastro';
import Home from './pages/Home';

function App() {
  const {mode} = useContext(ThemeContexto)
  // setMode(false)

  return (
    <Router>
      <ThemeProvider theme={mode ? darkTheme : lightTheme}>
        <CSSGeral />
        <Header/>

        {/* páginas */}
        <Routes>
          {/* navbar superior */}
          <Route exact='true' path='/' element={<Home />}></Route>
          <Route path='/Sobre'></Route>

          {/* usuario perfil */}
          <Route path='/criarconta' element={<Cadastro />}></Route>

        </Routes>

      </ThemeProvider>

    </Router>
  );
}

export default App;
