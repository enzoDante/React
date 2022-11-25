import {useContext} from 'react'
import { Context } from './components/ContextoTeste';
import C1 from './components/C1';

function App() {
  const {mode} = useContext(Context)

  return (
    <>
      <h1>{mode}</h1>
      <C1 />
    </>
  );
}

export default App;
