import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//, Switch, Route, Link
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact='true' path='/'></Route>
        <Route path='/Sobre'></Route>

      </Routes>

    </Router>
  );
}

export default App;
