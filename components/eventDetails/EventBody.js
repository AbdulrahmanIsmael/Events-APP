import classes from './eventBody.module.css';

function EventBody({ title, image, date, location }) {
  const timeOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return (
    <section className={classes.eventBody}>
      <img src={`/${image}`} alt={`${title} event`} />
      <div>
        <time dateTime={date}>
          {new Date(date).toLocaleDateString('en-US', timeOptions)}
        </time>
        <address>{location}</address>
      </div>
    </section>
  );
}

export default EventBody;
