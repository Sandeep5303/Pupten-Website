import Layout from '@components/Layout';
import styles from '@styles/details.module.css';

import Image from 'next/image';
import Link from 'next/link';

export default function details() {
  const userPets = {
    pet1: {
      name: 'Happy',
      type: 'Dog',
      imgUrl: '/img/user_pets/pet1.jpg',
    },
  };
  return (
    <Layout title='Payment'>
      <h1 className={styles.title}>
        Appointment <span>Details</span>
      </h1>
      <div className={styles.card}>
        <div className={styles.petContainer}>
          <Image
            className={styles.petImage}
            src={userPets.pet1.imgUrl}
            height='100px'
            width='100px'
          ></Image>
          <p>
            {userPets.pet1.name} ({userPets.pet1.type})
          </p>
        </div>
        <div className={styles.date}>
          <label htmlFor='date'>Date:</label>
          <input
            type='date'
            name='date'
            id='date'
            value='2020-10-20'
            disabled
          />
        </div>
        <div className={styles.time}>
          <label htmlFor='time'>Time:</label>
          <input
            type='datetime'
            name='time'
            id='time'
            value='10:10 AM'
            disabled
          />
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
}
