import Layout from '@components/Layout';
import Patient from '@components/Patient';
import Spinner from '@components/Spinner';
import styles from '@styles/patient.module.css';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getPatients, setCurrent } from '@actions/puptenActions';

const patient = ({
  pupten: { patients, loading },
  getPatients,
  setCurrent,
}) => {
  const [select, setSelect] = useState();
  const currentPet = { pet: patients && patients[select] };
  const setPet = () => {
    setCurrent(currentPet);
  };
  useEffect(() => {
    getPatients();
  }, []);
  return (
    <Layout title='Find'>
      <h1 className={styles.title}>
        Who is the <span>patient</span>?
      </h1>
      <div className={styles.card}>
        {loading && <Spinner />}
        {patients &&
          patients.map((patient, i) => (
            <Patient
              patient={patient}
              key={i}
              active={i === select}
              onClick={() => setSelect(i)}
            />
          ))}
      </div>
      <Link href='/book/doctor'>
        <a className='btn btn-dark' onClick={() => setPet()}>
          Find
        </a>
      </Link>
    </Layout>
  );
};

const mapStateToProps = state => ({
  pupten: state.pupten,
});

export default connect(mapStateToProps, { getPatients, setCurrent })(patient);
