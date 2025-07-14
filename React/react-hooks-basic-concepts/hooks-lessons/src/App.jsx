import { useState } from 'react';
import './App.css';

function App() {
   const [counter, setCounter] = useState(0);

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
         <div>{counter}</div>
      </>
   );
}

export default App;
