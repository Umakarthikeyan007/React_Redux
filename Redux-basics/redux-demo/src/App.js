import {useSelector , useDispatch} from "react-redux";
import './App.css';

function App() {
  const counter = useSelector((state)=>state.counter);
  const dispatch = useDispatch();
  const increment = ()=>{
    dispatch({type:"Inc"});
  };
  const decrement = ()=>{
    dispatch({type:"Dec"});
  };
  const addby10 = ()=>{
    dispatch({type:"add",payload:10})
  }
  return (
    <div className="App">
     <h1>Counter App</h1>
     <h2>{counter}</h2>
     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>
     <button onClick={addby10}>Add10</button>
    </div>
  );
}

export default App;
