import Layout from '@components/Layout';
import styles from '@styles/payment.module.css';

import Image from 'next/image';
import Link from 'next/link';

export default function payment() {
  const current = {
    doc: 'Dr. John Doe',
    docImgUrl: '/img/doctor/doc1.jpg',
    patient: 'Bruno',
    date: 'Friday, 19 March 2021, 10:30am',
  };
  return (
    <Layout title='Payment'>
      <div className={styles.card}>
        <div className={styles.container}>
          <div className={styles.docContainer}>
            <Image
              className={styles.docImage}
              src={current.docImgUrl}
              height='100px'
              width='100px'
            ></Image>
            <p>{current.doc}</p>
          </div>
          <p>{current.patient}</p>
          <span>{current.date}</span>
          <div className={styles.amount}>
            <p>Amount to pay</p>
            <p>Rs 700/-</p>
          </div>
        </div>
      </div>
      <Link href='/book/pay'>
        <a className='btn btn-dark'>Pay</a>
      </Link>
    </Layout>
  );
}
