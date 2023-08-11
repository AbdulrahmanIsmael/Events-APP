import classes from './event.module.css';
import Button from '@/ui/button/Button';

function EventItem({ eventInfo }) {
  return (
    <li className={classes.event}>
      <img
        src={`/${eventInfo.image}`}
        alt={eventInfo.title}
        className={classes.eventImage}
      />
      <div className={classes.eventDetails}>
        <h2 className={classes.title}>{eventInfo.title}</h2>
        <details className={classes.details}>
          <summary className={classes.summary}>More Details</summary>
          <p>{eventInfo.description}</p>
        </details>
        <Button route={`/events/${eventInfo.id}`}> Explore more </Button>
      </div>
    </li>
  );
}

export default EventItem;
