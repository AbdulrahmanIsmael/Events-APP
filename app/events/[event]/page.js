'use client';
import { useParams } from 'next/navigation';
import { getEventById } from '@/helpers/dummy-data';
import EventHeader from '@/components/eventDetails/EventHeader';
import EventBody from '@/components/eventDetails/EventBody';
import Button from '@/ui/button/Button';
import classes from './event.module.css';

function EventPage() {
  const params = useParams();
  const eventId = params.event;
  const eventDetails = getEventById(eventId);
  return (
    <>
      {eventDetails ? (
        <section className={classes.event}>
          <EventHeader title={eventDetails.title} />
          <EventBody
            title={eventDetails.title}
            image={eventDetails.image}
            date={eventDetails.date}
            location={eventDetails.location}
          />
          <p className={classes.eventDesc}>{eventDetails.description}</p>
          <Button book={true} />
        </section>
      ) : (
        <section className={classes.event}>
          <EventHeader title='There is no event!' />
        </section>
      )}
    </>
  );
}

export default EventPage;
