export default function CommunityPage() {
    const articles = [
      { title: 'Jak przygotować idealny burger?', author: 'Jan Kowalski', date: '2024-06-01' },
      { title: 'Najlepsze przepisy na domową pizzę', author: 'Anna Nowak', date: '2024-05-25' },
      { title: 'Przyprawy, które odmienią Twoje curry', author: 'Piotr Wiśniewski', date: '2024-05-20' },
    ];
  
    return (
      <main style={{ padding: '20px', maxWidth: '900px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Community</h1>
        <p style={{ textAlign: 'center', marginBottom: '30px' }}>
          Witamy na stronie społecznościowej! Znajdziesz tu najnowsze artykuły, porady i przepisy od naszych użytkowników.
        </p>
  
        <section style={{ marginBottom: '40px' }}>
          <h2>Ostatnie artykuły</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {articles.map((article, index) => (
              <li
                key={index}
                style={{
                  borderBottom: '1px solid #ddd',
                  padding: '10px 0',
                }}
              >
                <h3 style={{ margin: '5px 0' }}>{article.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#555' }}>
                  Autor: <strong>{article.author}</strong> | Data: {article.date}
                </p>
              </li>
            ))}
          </ul>
        </section>
  
        <section style={{ marginBottom: '40px' }}>
          <h2>Komentarze</h2>
          <div
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '10px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <p>
              <strong>Użytkownik123:</strong> Świetny przepis na curry! Wyszło idealnie.
            </p>
            <p>
              <strong>MariaL:</strong> Dzięki za porady dotyczące burgerów. Moja rodzina była zachwycona!
            </p>
          </div>
        </section>
  
        <section>
          <h2>Podziel się swoją opinią</h2>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <label htmlFor="username">Twoje imię:</label>
            <input
              id="username"
              type="text"
              placeholder="Wpisz swoje imię"
              style={{
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
  
            <label htmlFor="comment">Twój komentarz:</label>
            <textarea
              id="comment"
              rows="4"
              placeholder="Napisz swoją opinię..."
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
                padding: '10px 15px',
                backgroundColor: '#0070f3',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Wyślij
            </button>
          </form>
        </section>
      </main>
    );
  }
  