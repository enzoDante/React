import './App.css';
import Condicao from './components/Condicao';
import Evento from './components/Evento';
import Form from './components/Form';
import React from 'react'
import Lista from './components/Lista';

function App() {
  const [atual, setAtual] = React.useState(false)

  const itens = ['react', 'vue', 'angular']

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setAtual(qualquer => !qualquer)}>{atual ? "velho" : "novo"}</button>
        {atual ? (
          <>
            <h1>Novo</h1>
            <Lista itens={itens} />
          </>
        ): (
          <>
          <h1>Antigo</h1>
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
