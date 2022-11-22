import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Evento numero={2} />
        <Form />
      </header>
    </div>
  );
}

export default App;
