import React, { useState, useEffect, useReducer, useRef, createContext } from 'react';
import ReusableCard from './components/ReusableCard';

const ThemeContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function App() {
  const [text, setText] = useState('');
  const [theme, setTheme] = useState('light');

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const inputRef = useRef(null);

  useEffect(() => {
    console.log('Komponent został załadowany');
  }, []);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', minHeight: '100vh', padding: '20px' }}>
        <h1>React - Zadanie 1 i 2</h1>

        <ReusableCard title="Hooki Reacta" description="Pokazujemy różne hooki w działaniu." />

        <input
          ref={inputRef}
          type="text"
          placeholder="Wpisz coś..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p>Wpisano: {text}</p>

        <div>
          <p>Licznik: {state.count}</p>
          <button onClick={() => dispatch({ type: 'increment' })}>+</button>
          <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>

        <button onClick={() => inputRef.current.focus()}>Ustaw focus na polu</button>

        <button onClick={toggleTheme}>Zmień motyw na {theme === 'light' ? 'dark' : 'light'}</button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
