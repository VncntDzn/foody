import Head from 'next/head';
import LandingPage from './home/LandingPage';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '0 1rem',
    },
  })
);

const Home = () => {
  const styles = useStyles();
  return (
    <div>
      <Head>
        <title>Foody</title>
        <meta
          name='description'
          content='Discover foods by ingredients in Foody!'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.root}>
        <LandingPage />
      </main>
    </div>
  );
};

export default Home;
