import Layout from '@components/Layout';
import styles from '@styles/details.module.css';

import Image from 'next/image';
import Link from 'next/link';
import { connect } from 'react-redux';

const details = ({ pupten: { current } }) => {
  const {
    0: { pet },
    2: { date, time },
  } = { ...current };
  return (
    <Layout title='Payment'>
      <h1 className={styles.title}>
        Appointment <span>Details</span>
      </h1>
      <div className={styles.card}>
        <div className={styles.petContainer}>
          <Image
            className={styles.petImage}
            src={pet.imgUrl}
            height='100px'
            width='100px'
          ></Image>
          <p>
            {pet.name} ({pet.type})
          </p>
        </div>
        <div className={styles.date}>
          <label htmlFor='date'>Date:</label>
          <p>{date}</p>
        </div>
        <div className={styles.time}>
          <label htmlFor='time'>Time:</label>
          <p>{time}</p>
        </div>
        <div className={styles.reason}>
          <label htmlFor='reason'>Reason:</label>
          <textarea name='reason' id='reason' rows='8'></textarea>
        </div>
      </div>
      <Link href='/book/payment'>
        <a className='btn btn-dark'>Proceed</a>
      </Link>
    </Layout>
  );
};

const mapStateToProps = state => ({
  pupten: state.pupten,
});

export default connect(mapStateToProps)(details);
