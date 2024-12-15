export default function SharePage() {
    return (
      <main style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Share a Meal</h1>
        <p style={{ textAlign: 'center', marginBottom: '30px' }}>
          Podziel się swoim ulubionym posiłkiem z innymi! Wypełnij poniższy formularz.
        </p>
  
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            backgroundColor: '#f9f9f9',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <label htmlFor="mealName">Nazwa posiłku:</label>
          <input
            id="mealName"
            type="text"
            placeholder="Wpisz nazwę posiłku"
            style={{
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
  
          <label htmlFor="mealDescription">Opis posiłku:</label>
          <textarea
            id="mealDescription"
            rows="4"
            placeholder="Dodaj krótki opis posiłku..."
            style={{
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              resize: 'none',
            }}
          ></textarea>
  
          <button
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#0070f3',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Udostępnij
          </button>
        </form>
      </main>
    );
  }
  