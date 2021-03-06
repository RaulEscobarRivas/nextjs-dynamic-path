import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { dynamicPaths } from '../dynamicPathsApi';

export default function Home({ paths }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href="/static-path">
              <h2 style={{ cursor: 'pointer' }}>Static Path Page &rarr;</h2>
            </Link>
            <p>This should work as expected 👏</p>
          </div>

          {paths.map((path, index) => (
            <div key={index} className={styles.card}>
              <Link href={`/dynamic/${path}`}>
                <h2 style={{ cursor: 'pointer' }}>Dynamic Path Page &rarr;</h2>
              </Link>
              <p>This one is not really working 😓</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export const getStaticProps = async({ params }) => {
  const paths = await dynamicPaths();
  return { props: { paths } };
};
