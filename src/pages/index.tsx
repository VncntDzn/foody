import Head from 'next/head';
import LandingPage from './home/LandingPage';

export default function Home() {
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

      <main>
        <LandingPage />
      </main>
    </div>
  );
}
