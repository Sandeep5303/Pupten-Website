import Layout from '@components/Layout';
import styles from '@styles/doctor.module.css';

import Image from 'next/image';
import Link from 'next/link';

export default function find() {
  const doctors = {
    doc1: {
      name: 'Dr. John Doe',
      degree: 'Bachelor in Veterinary Science (BVS)',
      exp: '10 years experience',
      location: 'Park Street, New York',
      imgUrl: '/img/doctor/doc1.jpg',
    },

    doc2: {
      name: 'Dr. Simon',
      degree: 'Bachelor in Veterinary Science (BVS)',
      exp: '10 years experience',
      location: 'Park Street, New York',
      imgUrl: '/img/doctor/doc2.jpg',
    },

    doc3: {
      name: 'Dr. Lizzy Alex',
      degree: 'Bachelor in Veterinary Science (BVS)',
      exp: '10 years experience',
      location: 'Park Street, New York',
      imgUrl: '/img/doctor/doc3.jpg',
    },
  };
  return (
    <Layout title='Book'>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Find and <span>book</span> |
        </h1>
        <select className={styles.location} name='location' id='location'>
          <option value='Kolkata'>Kolkata</option>
          <option value='Delhi'>Delhi</option>
          <option value='Mumbai'>Mumbai</option>
          <option value='Bangalore'>Bangalore</option>
        </select>
      </div>
      <div className={styles.card}>
        <div className={`${styles.docContainer} ${styles.selected}`}>
          <Image
            className={styles.docImage}
            src={doctors.doc1.imgUrl}
            height='100px'
            width='100px'
          ></Image>
          <p>
            <span>{doctors.doc1.name}</span>
            <br></br>
            {doctors.doc1.degree}
            <br></br>
            {doctors.doc1.exp}
            <br></br>
            {doctors.doc1.location}
            <br></br>
          </p>
          <button className='btn btn-dark'>More Info</button>
        </div>
        <div className={styles.docContainer}>
          <Image
            className={styles.docImage}
            src={doctors.doc2.imgUrl}
            height='100px'
            width='100px'
          ></Image>
          <p>
            <span>{doctors.doc2.name}</span>
            <br></br>
            {doctors.doc2.degree}
            <br></br>
            {doctors.doc2.exp}
            <br></br>
            {doctors.doc2.location}
            <br></br>
          </p>
          <button className='btn btn-dark'>More Info</button>
        </div>
        <div className={styles.docContainer}>
          <Image
            className={styles.docImage}
            src={doctors.doc3.imgUrl}
            height='100px'
            width='100px'
          ></Image>
          <p>
            <span>{doctors.doc3.name}</span>
            <br></br>
            {doctors.doc3.degree}
            <br></br>
            {doctors.doc3.exp}
            <br></br>
            {doctors.doc3.location}
            <br></br>
          </p>
          <button className='btn btn-dark'>More Info</button>
        </div>
      </div>
      <Link href='/book/appointment'>
        <a className='btn btn-dark'>Book</a>
      </Link>
    </Layout>
  );
}
