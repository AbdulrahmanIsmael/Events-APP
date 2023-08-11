'use client';
import { useRef } from 'react';
import classes from './findEvents.module.css';
import { useRouter } from 'next/navigation';

function FindEvents() {
  const monthRef = useRef();
  const yearRef = useRef();
  const router = useRouter();

  function handleFilter(e) {
    e.preventDefault();

    const year = yearRef.current.value;
    const month = monthRef.current.value;

    router.push(`/events/${year}/${month}`);
  }

  return (
    <form className={classes.filterForm}>
      <div className={classes.selectFilter}>
        <label htmlFor='year'>Year</label>
        <select name='years' id='year' ref={yearRef}>
          <option value=''>Select A Year</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019 or less</option>
        </select>
      </div>
      <div className={classes.selectFilter}>
        <label htmlFor='month'>Month</label>
        <select name='months' id='month' ref={monthRef}>
          <option value=''>Select A Month</option>
          <option value='1'>January</option>
          <option value='2'>February</option>
          <option value='3'>March</option>
          <option value='4'>April</option>
          <option value='5'>May</option>
          <option value='5'>June</option>
          <option value='5'>July</option>
          <option value='5'>August</option>
          <option value='5'>September</option>
          <option value='5'>October</option>
          <option value='5'>November</option>
          <option value='5'>December</option>
        </select>
      </div>
      <button className={classes.filterBtn} onClick={handleFilter}>
        Find Events
      </button>
    </form>
  );
}

export default FindEvents;
