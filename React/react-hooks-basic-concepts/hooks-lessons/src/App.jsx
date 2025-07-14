import React, { useMemo, useState } from 'react';
import './App.css';

function App() {
   const [counter, setCounter] = useState(1);
   const [name, setName] = useState('');

   const total = useMemo(() => {
      return counter * 12313131 * 23313 * 213131;
   }, [counter]);

   function handlePlus() {
      setCounter((prevState) => prevState + 1);
   }

   return (
      <div>
         <h1>{counter}</h1>
         <h4>{total}</h4>
         <button onClick={handlePlus}>+</button>

         <br />
         <br />
         <span>{name}</span>
         <br />
         <input onChange={(e) => setName(e.target.value)} />
      </div>
   );
}

export default App;
