import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Aloha, I’m Maham Codes 👋</p>
        <p>
          I am a content developer at RapidAPI. You can find my work
          <a href="https://rapidapi.com/developers/maham"> here</a>.
        </p>
      </section>
    </Layout>
  );
}