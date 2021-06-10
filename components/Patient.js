import styles from '@styles/patient.module.css';
import Image from 'next/image';

export default function Patient({ patient, active, onClick }) {
  return (
    <div
      className={`${styles.petContainer} ${active ? styles.selected : ''}`}
      onClick={onClick}
    >
      <Image
        className={styles.petImage}
        src={patient.imgUrl}
        height='100px'
        width='100px'
      ></Image>
      <p>
        {patient.name} ({patient.type})
      </p>
    </div>
  );
}
