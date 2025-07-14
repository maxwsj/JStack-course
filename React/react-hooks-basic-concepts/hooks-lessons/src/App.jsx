import { useReducer } from 'react';
import './App.css';

function reducer(state, action) {
   switch (action.type) {
      case 'plus':
         return {
            counter: state.counter + 1,
            clicks: state.clicks + 1,
         };

      case 'minus':
         return {
            counter: state.counter - 1,
            clicks: state.clicks - 1,
         };

      default:
         return state;
   }
}

const initialValue = {
   counter: 2,
   clicks: 0,
};

function App() {
   const [state, dispatch] = useReducer(reducer, initialValue);

   function handlePlus() {
      dispatch({ type: 'plus' });
   }
   function handleMinus() {
      dispatch({ type: 'minus' });
   }
   return (
      <>
         <h1>useReducer</h1>
         <div className="card">
            <button onClick={handlePlus} style={{ marginRight: 10 }}>
               +
            </button>
            <button onClick={handleMinus}>-</button>
         </div>
         <br />
         <h4>Cliques {state.clicks}</h4>
         <h4>Counter {state.counter}</h4>
         <br />
      </>
   );
}

export default App;
