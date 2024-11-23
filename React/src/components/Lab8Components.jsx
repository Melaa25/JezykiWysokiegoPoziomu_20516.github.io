import React, { useState } from 'react';

// Komponent z prawidłowym stanem
export function CorrectComponent() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>Correct Component</h2>
      <p>Counter: {counter}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

// Komponent bez użycia stanu (nieprawidłowy)
export function IncorrectComponent() {
  let counter = 0;

  const incrementCounter = () => {
    counter += 1;
    console.log('Counter:', counter);
  };

  return (
    <div>
      <h2>Incorrect Component</h2>
      <p>Counter (console only): {counter}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

// Wszystkie zdarzenia w jednym miejscu
export function EventHandlers() {
  const [message, setMessage] = useState('Hover over me!');
  const [jsonData, setJsonData] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [visible, setVisible] = useState(false);
  const [style, setStyle] = useState({ color: 'black' });

  // Funkcje obsługi
  const handleMouseOver = () => setMessage('Mouse is over this text!');
  const loadDataFromJson = () => {
    const mockData = { name: 'React', version: '18.2.0', description: 'A JavaScript library for building user interfaces' };
    setJsonData(mockData);
    console.log('Loaded JSON Data:', mockData);
  };
  const uploadFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
      console.log('Uploaded File:', file);
    }
  };
  const toggleImage = () => setVisible(!visible);
  const changeStyle = () => setStyle({ color: style.color === 'black' ? 'red' : 'black' });
  const handleClick = () => alert('Button clicked!');

  return (
    <div>
      <h2>Event Handlers</h2>

      {/* Obsługa kliknięcia */}
      <button onClick={handleClick}>Click Me</button>

      {/* Obsługa najechania myszką */}
      <p onMouseOver={handleMouseOver} style={{ cursor: 'pointer', backgroundColor: '#f0f0f0', padding: '10px' }}>
        {message}
      </p>

      {/* Obsługa wczytywania danych z JSON */}
      <button onClick={loadDataFromJson}>Load JSON Data</button>
      {jsonData && (
        <div>
          <p>Data Loaded:</p>
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
      )}

      {/* Obsługa przesyłania pliku */}
      <input type="file" onChange={uploadFile} />
      {uploadedFileName && <p>Uploaded File: {uploadedFileName}</p>}

      {/* Wczytanie obrazka */}
      <button onClick={toggleImage}>{visible ? 'Hide' : 'Show'} Image</button>
      {visible && <img src="https://via.placeholder.com/150" alt="Example" style={{ display: 'block', margin: '10px auto' }} />}

      {/* Zmiana stylu */}
      <p style={style}>This text changes color!</p>
      <button onClick={changeStyle}>Change Style</button>
    </div>
  );
}
