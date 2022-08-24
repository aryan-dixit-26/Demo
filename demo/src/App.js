import './App.css';
import Card from './components/Card';

function App() {
  const arr = [
    'card1',
    'card2',
    'card3',
    'card4',
    'card5',
    'card6',
    'card7',
    'card8',
    'card9',
  ]
  const itemList = arr.map((i)=>(<Card key={i}  name={i}/>))
  return (
    <div className="App">
      {itemList}
    </div>
  );
}

export default App;
