import { useCallback, useState } from 'react';
import './App.css';

const fnCounter = new Set();

function App() {
   const [counter, setCounter] = useState(0);

   const handlePlus = useCallback(() => {
      setCounter((prevState) => prevState + 1);
   }, []);

   fnCounter.add(handlePlus);
   console.log(fnCounter.size);

   return (
      <>
         <h1>useCallback</h1>
         <div className="card">
            <Button onClick={handlePlus} />
         </div>
         <br />
         <div>{counter}</div>
      </>
   );
}

function Button(props) {
   return (
      <button onClick={props.onClick} style={{ marginRight: 10 }}>
         +
      </button>
   );
}

export default App;
