import classes from './allEvents.module.css';
import EventsList from '@/components/events/EventsList';
import FindEvents from '@/components/filter/FindEvents';
import { getAllEvents } from '@/helpers/dummy-data';

function EventsPage() {
  const allEvents = getAllEvents();
  return (
    <section className={classes.events}>
      <h2 className={classes.eventsTitle}>All Events</h2>
      <FindEvents />
      <EventsList list={allEvents} />
    </section>
  );
}

export default EventsPage;
