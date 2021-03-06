import Layout from '@components/Layout';
import styles from '@styles/payment.module.css';

import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { connect } from 'react-redux';

const payment = ({ pupten: { current } }) => {
  if (current.length === 0) return null;
  // generate random payment price
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (1000 - 300 + 1) + 300);
  };
  const {
    0: { pet },
    1: { doc },
    2: { date, time },
  } = { ...current };
  return (
    <Layout title='Payment'>
      <div className={styles.card}>
        <div className={styles.container}>
          <div className={styles.docContainer}>
            <Image
              className={styles.docImage}
              src={doc.imgUrl}
              height='100px'
              width='100px'
            ></Image>
            <p>{doc.name}</p>
          </div>
          <p>{pet.name}</p>
          <span>
            {moment(date).format('dddd, MMMM Do YYYY')} {time}
          </span>
          <div className={styles.amount}>
            <p>Amount to pay</p>
            <p>Rs {generateRandomNumber()}/-</p>
          </div>
        </div>
      </div>
      <Link href='/book/pay'>
        <a className='btn btn-dark'>Pay</a>
      </Link>
    </Layout>
  );
};

const mapStateToProps = state => ({
  pupten: state.pupten,
});

export default connect(mapStateToProps)(payment);
