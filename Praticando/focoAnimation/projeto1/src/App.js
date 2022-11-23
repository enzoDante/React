import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//, Switch, Route, Link
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Header />

      {/* páginas */}
      <Routes>
        {/* navbar superior */}
        <Route exact='true' path='/' element={<Home />}></Route>
        <Route path='/Sobre'></Route>

      </Routes>

    </Router>
  );
}

export default App;
