// import logo from './logo.svg';
import React from 'react';
import './App.css';
import DigaNome from './components/Diganome';
import Hello from './components/Hello';
import Lista from './components/Lista';
import Pessoa from './components/Pessoa';

function App() {
  const t = React.createElement('h1', {}, "teste nemmm");
  function sum(a, b) {
    return a + b
  }

  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <header className="App-header">
        {t}
        <h1 className='App-logo'>palavras aq</h1>
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        {sum(2, 4)}

        <img src={url} alt="" />
        <Hello />
        <DigaNome nome="Dante" idade="17" />
        <Pessoa nome="Dante" idade="17" cargo="dev" />
        <Lista />
      </header>
    </div>
  );
}

export default App;

