import Link from 'next/link';
import classes from './main-header.module.css';


export default function MainHeader(){
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    return(
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <img
            src={`${basePath}/images/logo.png`}
            alt="A plate with food on it"
            style={{ height: '40px', width: '40px' }}
          />
                NextLevel Food
            </Link>

            <nav>
                <ul>
                    <li><Link href="/meals">Meals</Link></li>
                    <li><Link href="/meals/share">Share</Link></li>
                    <li><Link href= "/community">Community</Link></li>
                </ul>
            </nav>
        </header>
    );
}