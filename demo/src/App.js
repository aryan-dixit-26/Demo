import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const arr = [
    'red',
    'blue',
    'green',
    'yellow',
    'pink',
    'orange',
    'crimson',
    'white',
    'navy',
  ]

  const [bgColor, setBgColor] = useState("white")
  const itemList = arr.map((i)=>(<Card key={i}  name={i} bgColor={bgColor} changeColor={setBgColor}/>))
  return (
    <div className="App" style={{backgroundColor : bgColor}}>
      {itemList}
    </div>
  );
}

export default App;
