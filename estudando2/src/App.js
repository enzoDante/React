import './App.css';
import Condicao from './components/Condicao';
import Evento from './components/Evento';
import Form from './components/Form';
import React, { useState } from 'react'
import Lista from './components/Lista';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';
import FormUsu from './components/formsA/FormUsu';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';

import {AiFillHome, AiFillCaretRight} from 'react-icons/ai'

function App() {
  const [atual, setAtual] = React.useState(false)

  const itens = ['react', 'vue', 'angular']

  const [nome, setNome] = useState()

  return (
    <Router>
      <AiFillHome />
      <AiFillCaretRight />
      <p><Link to="/">Home</Link></p>
      <p><Link to="/empresa">pagina 2</Link></p>
      <p><Link to="/contato">pagina 3</Link></p>

      <Routes>
        <Route exact='true' path='/' element={<Home />}></Route>
        <Route path='/empresa' element={<Empresa/>}></Route>
        <Route path='/contato' element={<Contato/>}></Route>
      </Routes>

      <div className="App">
        <header className="App-header">
          <button onClick={() => setAtual(qualquer => !qualquer)}>{atual ? "velho" : "novo"}</button>
          {atual ? (
            <>
              <FormUsu />
              <h1>Novo</h1>
              <SeuNome setNome={setNome} nome={nome} />
              <Saudacao nome={nome} />
              {nome}
            </>
          ): (
            <>
            <h1>Antigo</h1>
            <Lista itens={itens} />
            <Evento numero={2} />
            <Form />
            <br/>
            <br/>
            <h2>Teste com condições</h2>
            <Condicao />
            </>
          )}
      
        </header>
      </div>
    </Router>
  );
}

export default App;
