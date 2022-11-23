import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//, Switch, Route, Link
import Header from './components/Header';
import Cadastro from './pages/Conta/Cadastro';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />

      {/* páginas */}
      <Routes>
        {/* navbar superior */}
        <Route exact='true' path='/' element={<Home />}></Route>
        <Route path='/Sobre'></Route>

        {/* usuario perfil */}
        <Route path='/criarconta' element={<Cadastro />}></Route>

      </Routes>

    </Router>
  );
}

export default App;
