import Layout from '@components/Layout';
import Doctor from '@components/Doctor';
import Spinner from '@components/Spinner';
import styles from '@styles/doctor.module.css';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getDoctors, setCurrent } from '@actions/puptenActions';

const doctors = ({ pupten: { doctors, loading }, getDoctors, setCurrent }) => {
  const [select, setSelect] = useState();
  const currentDoc = { doc: doctors && doctors[select] };
  const setDoc = () => {
    setCurrent(currentDoc);
  };
  useEffect(() => {
    getDoctors();
  }, []);
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
        {loading && <Spinner />}
        {doctors &&
          doctors.map((doctor, i) => (
            <Doctor
              doctor={doctor}
              key={i}
              active={i === select}
              onClick={() => setSelect(i)}
            />
          ))}
      </div>
      <Link href='/book/appointment'>
        <a className='btn btn-dark' onClick={() => setDoc()}>
          Book
        </a>
      </Link>
    </Layout>
  );
};

const mapStateToProps = state => ({
  pupten: state.pupten,
});

export default connect(mapStateToProps, { getDoctors, setCurrent })(doctors);
