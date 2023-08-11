import './globals.css';
import { Inter } from 'next/font/google';
import MainHeader from '@/components/header/MainHeader';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Event APP',
  description: 'Provides information all the events in the country',
};

function RootLayout({ children }) {
  const copyrightYear = new Date().getFullYear();
  return (
    <html lang='en'>
      <body className={inter.className}>
        <MainHeader />
        <main>{children}</main>
        <footer>Copyright {copyrightYear}</footer>
      </body>
    </html>
  );
}

export default RootLayout;
