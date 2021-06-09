import Layout from '@components/Layout';
import styles from '@styles/patient.module.css';

import Image from 'next/image';
import Link from 'next/link';

export default function find() {
  const userPets = {
    pet1: {
      name: 'Happy',
      type: 'Dog',
      imgUrl: '/img/user_pets/pet1.jpg',
    },

    pet2: {
      name: 'Bruno',
      type: 'Dog',
      imgUrl: '/img/user_pets/pet2.jpg',
    },

    pet3: {
      name: 'Jhonny',
      type: 'Guinea Pig',
      imgUrl: '/img/user_pets/pet3.jpg',
    },
  };
  return (
    <Layout title='Find'>
      <h1 className={styles.title}>
        Who is the <span>patient</span>?
      </h1>
      <div className={styles.card}>
        <div className={`${styles.petContainer} ${styles.selected}`}>
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
        <div className={styles.petContainer}>
          <Image
            className={styles.petImage}
            src={userPets.pet2.imgUrl}
            height='100px'
            width='100px'
          ></Image>
          <p>
            {userPets.pet2.name} ({userPets.pet2.type})
          </p>
        </div>
        <div className={styles.petContainer}>
          <Image
            className={styles.petImage}
            src={userPets.pet3.imgUrl}
            height='100px'
            width='100px'
          ></Image>
          <p>
            {userPets.pet3.name} ({userPets.pet3.type})
          </p>
        </div>
      </div>
      <Link href='/book/doctor'>
        <a className='btn btn-dark'>Find</a>
      </Link>
    </Layout>
  );
}
