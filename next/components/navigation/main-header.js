'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './main-header.module.css';

export default function MainHeader() {
  const pathname = usePathname();

  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <img src="/logo.png" alt="Logo" />
        Foodies Blog
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/community" className={pathname === '/community' ? classes.active : ''}>
              Community
            </Link>
          </li>
          <li>
            <Link href="/meals" className={pathname === '/meals' ? classes.active : ''}>
              Meals
            </Link>
          </li>
          <li>
            <Link href="/meals/share" className={pathname === '/meals/share' ? classes.active : ''}>
              Share a Meal
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
