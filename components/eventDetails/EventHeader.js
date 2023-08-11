import classes from './eventHeader.module.css';

function EventHeader({ title }) {
  return (
    <section className={classes.eventHeader}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventHeader;
