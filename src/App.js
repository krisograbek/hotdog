import { useEffect, useState } from 'react';
import './App.css';
import UploadImage from './components/UploadImage';


function App() {
  const [currentValue, setCurrentValue] = useState("")
  const [name, setName] = useState("")

  useEffect(() => {
    fetch('/api/value').then(res => res.json()).then(data => {
      setCurrentValue(data.value)
    })
  }, [])

  const testRequests = () => {
    const body = {
      name: "Kris",
      description: "Cool Dude!"
    }
    fetch(`/api/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(data => {
        setName(data.value)
      })
      .catch(error => console.log(error))
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Name: {name}</p>
        <button onClick={testRequests}>Send POST</button>
        <UploadImage />
      </header>
    </div>
  );
}

export default App;
