import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <h1>Hello React Class!</h1>
      <Welcome name="Tariq" />
    </div>
  )
}

export default App;
