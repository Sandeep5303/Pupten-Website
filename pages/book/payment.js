import Layout from '@components/Layout';
import styles from '@styles/payment.module.css';

import Image from 'next/image';
import Link from 'next/link';
import { connect } from 'react-redux';

const payment = ({ pupten: { current } }) => {
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
              src={doc && doc.imgUrl}
              height='100px'
              width='100px'
            ></Image>
            <p>{doc && doc.name}</p>
          </div>
          <p>{pet && pet.name}</p>
          <span>
            {date && date} {time && time}
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
