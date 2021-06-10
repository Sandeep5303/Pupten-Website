import Layout from '@components/Layout';
import styles from '@styles/appointment.module.css';

import Link from 'next/link';
import { connect } from 'react-redux';
import { setCurrent } from '@actions/puptenActions';

const appointment = ({ setCurrent }) => {
  const dateTime = {};
  const setDateTime = () => {
    setCurrent(dateTime);
  };
  return (
    <Layout title='Appointment'>
      <h1 className={styles.title}>
        Select <span>Date & Time</span>
      </h1>
      <div className={styles.card}>
        <p>Date:</p>
        <input
          type='date'
          name='date'
          id='date'
          className={styles.date}
          onChange={e => (dateTime.date = e.target.value)}
        />

        <p>Time:</p>
        <div className={styles.time}>
          <div>
            <input
              type='radio'
              name='time'
              id='time'
              value='10:00 AM'
              onChange={e => (dateTime.time = e.target.value)}
            />
            <label htmlFor='10'>10:00 AM</label>
          </div>
          <div>
            <input
              type='radio'
              name='time'
              id='time'
              value='12:00 PM'
              onChange={e => (dateTime.time = e.target.value)}
            />
            <label htmlFor='12'>12:00 PM</label>
          </div>
          <div>
            <input
              type='radio'
              name='time'
              id='time'
              value='3:00 PM'
              onChange={e => (dateTime.time = e.target.value)}
            />
            <label htmlFor='3'>3:00 PM</label>
          </div>
        </div>
      </div>
      <Link href='/book/details'>
        <a className='btn btn-dark' onClick={() => setDateTime()}>
          Payment
        </a>
      </Link>
    </Layout>
  );
};

export default connect(null, { setCurrent })(appointment);
