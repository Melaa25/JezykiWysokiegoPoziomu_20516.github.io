import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
