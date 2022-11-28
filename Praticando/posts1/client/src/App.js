import {useContext} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, ThemeContext } from './components/estilos/theme';
import {CSSGeral} from './components/estilos/CSSGeral'
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Publicar from './pages/Publicar/Publicar';
import Contato from './pages/Contato/Contato';
import PerfilUser from './pages/Perfiluser/PerfilUser';
import Cadastro from './pages/Conta/Cadastro';
import Login from './pages/Conta/Login';
import Config from './pages/Config/Config';

function App() {
  const {mode} = useContext(ThemeContext)

  return (
    <Router>
      <ThemeProvider theme={mode ? darkTheme : lightTheme}>
        <CSSGeral />
        <Nav />


      {/* rotas */}
      <Routes>
        {/* === Nav header === */}
        <Route exact='true' path='/' element={<Home />}></Route>
        <Route path='/Publicar' element={<Publicar />}></Route>
        <Route path='/Contato' element={<Contato />}></Route>

        {/* === User === */}
        <Route path='/perfil' element={<PerfilUser />}></Route>
        <Route path='/config'element={<Config />}></Route>

        {/* create account */}
        <Route path='/Cadastro' element={<Cadastro />}></Route>
        <Route path='/Login' element={<Login />}></Route>

      </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
