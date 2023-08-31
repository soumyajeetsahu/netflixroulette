import "./App.css";
import Counter from './components/counter/counter.ts'

function App() {
  return (
    <div className="App">
      <Counter initialValue={0} />
    </div>
  );
}

export default App;
