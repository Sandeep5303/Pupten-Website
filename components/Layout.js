import Head from 'next/head';
import { useRouter } from 'next/router';

import Header from '@components/Header';
import Showcase from '@components/Showcase';
import styles from '@styles/Layout.module.css';

export default function Layout({ title, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header></Header>
      <div className={styles.container}>
        {router.pathname === '/' && <Showcase />}
        {children}
      </div>
    </div>
  );
}

Layout.defaultProps = {
  title: 'Pupten: Cloud-based veterinary practice management solution',
};
