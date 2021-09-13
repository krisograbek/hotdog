import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [currentValue, setCurrentValue] = useState("")

  useEffect(() => {
    fetch('/api/value').then(res => res.json()).then(data => {
      setCurrentValue(data.value)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>Current value: {currentValue}</p>
      </header>
    </div>
  );
}

export default App;
