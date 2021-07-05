import MainLayout from 'layouts/MainLayout';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import LandingPage from './home/LandingPage';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Foody</title>
        <meta
          name='description'
          content='Discover foods by ingredients in Foody!'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <LandingPage />
      </main>
    </div>
  );
}
