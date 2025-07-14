import { useState, useEffect } from 'react';
import './App.css';

function App() {
   const [counter, setCounter] = useState(0);
   const [name, SetName] = useState('');

   useEffect(() => {
      // IIFE -> Immediately Invoked Function Expression - Executar chamadas de APIs
      (async () => {
         // API call
      })();
   }, []);

   useEffect(() => {
      // Determina o que fazer quando o componente for sair da tela
      return () => {};
   });

   function handlePlus() {
      setCounter((prevState) => prevState + 1);
   }
   function handleMinus() {
      setCounter((prevState) => prevState - 1);
   }
   return (
      <>
         <h1>useState</h1>
         <div className="card">
            <button onClick={handlePlus} style={{ marginRight: 10 }}>
               +
            </button>
            <button onClick={handleMinus}>-</button>
         </div>
         <br />
         <div>{counter}</div>
         <br />
         <span>{name}</span>
         <br />
         <input onChange={(e) => SetName(e.target.value)} />
      </>
   );
}

export default App;
