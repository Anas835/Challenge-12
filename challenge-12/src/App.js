
import './App.css';
import CounterComplex from './Components/usereducercomplex';
import DataList from './Components/usereducerfetch';
import Counter from './Components/usereducersimple';

function App() {
  return (
    <div className="App">
      <h1>Simple use Reducer</h1>
      <Counter/>
      <h1>Complex use Reducer</h1>
      <CounterComplex/>
      <h1>useReducer hook to fetch data</h1>
      <DataList/>
    </div>
  );
}

export default App;
