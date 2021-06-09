import Layout from '@components/Layout';
import styles from '@styles/appointment.module.css';

import Link from 'next/link';

export default function appointment() {
  return (
    <Layout title='Appointment'>
      <h1 className={styles.title}>
        Select <span>Date & Time</span>
      </h1>
      <div className={styles.card}>
        <p>Date:</p>
        <input type='date' name='date' id='date' className={styles.date} />

        <p>Time:</p>
        <div className={styles.time}>
          <div>
            <input type='radio' name='time' id='time' value='10' />
            <label htmlFor='10'>10:00 AM</label>
          </div>
          <div>
            <input type='radio' name='time' id='time' value='10' />
            <label htmlFor='12'>12:00 PM</label>
          </div>
          <div>
            <input type='radio' name='time' id='time' value='10' />
            <label htmlFor='3'>3:00 PM</label>
          </div>
        </div>
      </div>
      <Link href='/book/details'>
        <a className='btn btn-dark'>Payment</a>
      </Link>
    </Layout>
  );
}
