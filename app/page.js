import EventsList from '@/components/events/EventsList';
import { getFeaturedEvents } from '@/helpers/dummy-data.js';
import classes from './home.module.css';

function HomePage() {
  const featuredEventsList = getFeaturedEvents();
  return (
    <section className={classes.home}>
      <h2 className={classes.homeTitle}>Important Events</h2>

      <EventsList list={featuredEventsList} />
    </section>
  );
}

export default HomePage;
