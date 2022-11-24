import {  useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import { CSSGeral } from './components/estilo/CSSGeral';
import { lightTheme, darkTheme } from './components/estilo/theme';
//, Switch, Route, Link
import Header from './components/Header';
import Cadastro from './pages/Conta/Cadastro';
import Home from './pages/Home';

function App() {
  const [Darkt, setDarkt] = useState(false)

  return (
    <Router>
      <ThemeProvider theme={Darkt ? darkTheme : lightTheme}>
        <CSSGeral />
        <Header setDarkt={setDarkt}/>

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
