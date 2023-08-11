'use client';
import { useParams } from 'next/navigation';
import EventsList from '@/components/events/EventsList';
import { getFilteredEvents } from '@/helpers/dummy-data';
import classes from './filteredEvents.module.css';

function FilteredEvents() {
  const params = useParams();
  const filterData = {
    year: +params.filteredEvents[0],
    month: +params.filteredEvents[1],
  };

  const date = new Date(
    filterData.year,
    filterData.month - 1
  ).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

  if (
    filterData.month > 12 ||
    filterData.month < 1 ||
    isNaN(filterData.month) ||
    isNaN(filterData.year)
  )
    return (
      <section className={classes.filteredEvents}>
        <h2 className={classes.filteredEventsTitle}> Invalid Data </h2>
      </section>
    );

  const filteredEvents = getFilteredEvents(filterData);

  if (!filteredEvents || !filteredEvents.length)
    return (
      <section className={classes.filteredEvents}>
        <h2 className={classes.filteredEventsTitle}>
          {' '}
          No Events Available In {date}{' '}
        </h2>
      </section>
    );

  return (
    <section className={classes.filteredEvents}>
      <h2 className={classes.filteredEventsTitle}> Events In {date} </h2>

      <EventsList list={filteredEvents} />
    </section>
  );
}

export default FilteredEvents;
