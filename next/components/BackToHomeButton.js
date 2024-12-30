import Link from 'next/link';

export default function BackToHomeButton() {
  return (
    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <Link
        href="/"
        style={{
          textDecoration: 'none',
          backgroundColor: '#ff8a05',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '5px',
          fontSize: '1rem',
          fontWeight: 'bold',
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}
