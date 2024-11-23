import React from 'react';
import './App.css';
import { CorrectComponent, IncorrectComponent, EventHandlers } from './components/Lab8Components';

function App() {
  return (
    <div className="App">
      <h1>LAB 8 - React</h1>
      <CorrectComponent />
      <IncorrectComponent />
      <EventHandlers />
    </div>
  );
}

export default App;
