import styles from '@styles/doctor.module.css';

import Image from 'next/image';

export default function Doctor({ doctor, active, onClick }) {
  return (
    <div
      className={`${styles.docContainer} ${active ? styles.selected : ''}`}
      onClick={onClick}
    >
      <Image
        className={styles.docImage}
        src={doctor.imgUrl}
        height='100px'
        width='100px'
      ></Image>
      <p>
        {doctor.name}
        <span>
          <br></br>
          {doctor.degree}
          <br></br>
          {doctor.exp}
          <br></br>
          {doctor.location}
          <br></br>
        </span>
      </p>
      <button className='btn btn-dark'>More Info</button>
    </div>
  );
}
