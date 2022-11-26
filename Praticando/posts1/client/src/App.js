import {useContext} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, ThemeContext } from './components/estilos/theme';
import {CSSGeral} from './components/estilos/CSSGeral'
import Nav from './components/Nav/Nav';

function App() {
  const {mode} = useContext(ThemeContext)

  return (
    <Router>
      <ThemeProvider theme={mode ? darkTheme : lightTheme}>
        <CSSGeral />
        <Nav />


      {/* rotas */}
      <Routes>
        <Route exact='true' path='/'></Route>
      </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
