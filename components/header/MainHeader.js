import Link from 'next/link';
import classes from './mainHeader.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href='/' legacyBehavior>
        <a className={classes.logo}>GoEvents</a>
      </Link>
      <nav>
        <Link href='/events'>All Events</Link>
      </nav>
    </header>
  );
}

export default MainHeader;
