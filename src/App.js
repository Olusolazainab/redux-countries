import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementAmount } from './features/slices/CounterSlices';


function App() {
  const dispatch = useDispatch();
const counter = useSelector(state => state?.counter)
console.log(counter)
  return (
    <div className="App">
      <h1>Redux toolkit counter</h1>
 <h2>counter: {counter.value}</h2>
  <button onClick={()=> dispatch(increment())}>+</button>
  <button onClick={()=> dispatch(decrement())}>-</button>
  <button onClick={()=> dispatch(incrementAmount(5))}>incrementAmount</button>
    </div>
  );
}

export default App;
