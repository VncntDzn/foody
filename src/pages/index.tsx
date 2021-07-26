import Head from 'next/head';
import LandingPage from './home/LandingPage';
import AboutUs from './home/AboutUs';
import Testimonials from './home/Testimonials';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Steps from './home/Steps';
import Footer from 'layouts/Footer';
import WhyFoodie from './home/WhyFoodie';

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
        <title>Foodie</title>
        <meta
          name='description'
          content='Discover foods by ingredients in Foodie!'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.root}>
        <LandingPage />
        <AboutUs />
        <Steps />
        <WhyFoodie />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
