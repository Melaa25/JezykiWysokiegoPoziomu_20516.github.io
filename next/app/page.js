import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ textAlign: 'center', padding: '2rem', color: 'white' }}>
      <img
        src="/assets/logo.png" // Upewnij się, że logo znajduje się w public/assets/logo.png
        alt="Logo"
        style={{ width: '150px', height: '150px', marginBottom: '1rem' }}
      />
      <h1>Welcome to Foodies Blog!</h1>
      <p>Explore the best recipes, join our community, and share your favorite meals!</p>
      <div style={{ marginTop: '2rem' }}>
        <Link
          href="/community"
          style={{
            textDecoration: 'none',
            backgroundColor: '#ff8a05',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '5px',
            margin: '0 1rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            display: 'inline-block',
          }}
        >
          Community
        </Link>
        <Link
          href="/meals"
          style={{
            textDecoration: 'none',
            backgroundColor: '#0070f3',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '5px',
            margin: '0 1rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            display: 'inline-block',
          }}
        >
          Meals
        </Link>
        <Link
          href="/meals/share"
          style={{
            textDecoration: 'none',
            backgroundColor: '#22c55e',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '5px',
            margin: '0 1rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            display: 'inline-block',
          }}
        >
          Share a Meal
        </Link>
      </div>
    </main>
  );
}
