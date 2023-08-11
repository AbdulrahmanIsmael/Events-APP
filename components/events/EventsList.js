import EventItem from './EventItem';
import classes from './events.module.css';

function EventsList({ list }) {
  const eventsList = list;
  return (
    <ul className={classes.eventsList}>
      {eventsList.map(event => (
        <EventItem eventInfo={event} />
      ))}
    </ul>
  );
}

export default EventsList;
