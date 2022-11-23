import './App.css';
import Condicao from './components/Condicao';
import Evento from './components/Evento';
import Form from './components/Form';
import React, { useState } from 'react'
import Lista from './components/Lista';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function App() {
  const [atual, setAtual] = React.useState(false)

  const itens = ['react', 'vue', 'angular']

  const [nome, setNome] = useState()

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setAtual(qualquer => !qualquer)}>{atual ? "velho" : "novo"}</button>
        {atual ? (
          <>
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
  );
}

export default App;
