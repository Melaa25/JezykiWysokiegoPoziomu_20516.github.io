import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li><Link href="/">O mnie</Link></li>
        <li><Link href="/zainteresowania">Zainteresowania</Link></li>
        <li><Link href="/ulubiony-film">Ulubiony Film</Link></li>
        <li><Link href="/kontakt">Kontakt</Link></li>
      </ul>
    </nav>
  );
}
