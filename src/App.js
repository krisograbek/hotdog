import { useState } from 'react';
import './App.css';
import UploadImage from './components/UploadImage';


function App() {
  const [name, setName] = useState("")


  const testRequests = () => {
    const body = {
      name: "Izunia",
      description: "Cool Chick!"
    }
    fetch(`/api/name`, {
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
        <p>Name: {name}, Cool Chick!</p>
        <button onClick={testRequests}>Send POST</button>
        <UploadImage />
      </header>
    </div>
  );
}

export default App;
