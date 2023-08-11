'use client';
import { useRouter } from 'next/navigation';
import classes from './button.module.css';

function Button({ route = '/', children, book = false }) {
  const router = useRouter();

  if (book) {
    return <button className={classes.bookingBtn}> Book A Ticket </button>;
  }

  function handleLink() {
    router.push(route);
  }

  return (
    <button onClick={handleLink} className={classes.btn}>
      {' '}
      {children}{' '}
    </button>
  );
}

export default Button;
